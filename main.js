const WebIDL2 = require("webidl2");
const fs = require('fs');
const assert_ext = require('assert');

function assert(condition, obj) {
  assert_ext(condition, JSON.stringify(obj));
}

function fail(msg, obj) {
  assert_ext(false, msg + ", " + JSON.stringify(obj));
}

/**
 * @param {string[]} lines
 * @returns JSDoc
 */
function getDocFromLines(lines) {
  let doc = lines
    .filter(line => (line !== null && line.length > 0))
    .map(line => { return ` * ${line}`; })
    .join("\n");
  return `/**\n${doc}\n */\n`;
}

/**
 * @returns "new TargetClass()"
 */
function getDefaultValueObj(idlType) {
  switch (idlType) {
    case 'any':
      return '{}';
    case 'void':
      return '';
    case 'short':
    case 'unsigned long':
    case 'unsigned long long':
      return '0';
    case 'boolean':
      return false;
    case 'DOMString':
      return '""';
    default:
      return `new ${idlType}()`;
  }
}

/**
 * @returns "[new TargetClass()]"
 */
function getDefaultValueOfType(type) {
  assert(type);
  assert(!type.array);

  if (type.nullable || type.union) {
    return 'null';
  }
  assert(typeof type.idlType === 'string');
  if (type.idlType === 'void') {
    assert(!type.sequence);
  }
  let obj = getDefaultValueObj(type.idlType);
  return type.sequence ? `[${obj}]` : obj;
}

/**
 * @returns "some_string"
 */
function getDefaultValueOfDefault(default_def) {
  assert(typeof(default_def) !== 'undefined');
  switch (default_def.type) {
    case 'string': {
      return `'${default_def.value}'`;
    }
    case 'number':
    case 'boolean': {
      return default_def.value;
    }
    case 'null': {
      return null;
    }
    default: {
      fail("Un-supported arg default type:" + default_def.type, default_def);
    }
  }
}

/**
 * @returns "string"
 */
function getTypePlainName(idlType) {
  assert(typeof(idlType) === 'string');
  switch (idlType) {
    case 'any':
      return '*';
    case 'short':
    case 'unsigned long':
    case 'unsigned long long':
      return 'number';
    case 'DOMString':
      return 'string';
    default:
      return idlType;
  }
}

/**
 * @returns "string|string[]"
 */
function getTypeInDoc(type) {
  // String indicating the generic type (e.g. "Promise", "sequence"). null otherwise.
  // assert(type.generic === null);
  assert(!type.array);

  let doc = type.nullable ? "?" : "";
  if (type.union) {
    assert(!type.sequence);
    assert(type.generic === null);
    assert((typeof(type.default) === 'undefined'));
    assert(Array.isArray(type.idlType));
    doc += "(" + type.idlType.map(getTypeInDoc).join("|") + ")";
  } else if (type.sequence) {
    assert(type.generic === 'sequence');
    doc += getTypeInDoc(type.idlType) + '[]';
  } else {
    doc += getTypePlainName(type.idlType);
  }
  return doc;
}

/**
 * @returns "@param {string|string[]} storeNames"
 */
function getArgInDoc(arg) {
  assert(!arg.variadic);
  let doc = arg.name;
  if (typeof(arg.default) !== 'undefined') {
    doc += `=${getDefaultValueOfDefault(arg.default)}`;
  }
  if (arg.optional) {
    doc = `[${doc}]`;
  }

  return `@param {${getTypeInDoc(arg.idlType)}} ${doc}` +
    (arg.extAttrs.length === 0 ? '' : ' - ' + arg.extAttrs.map(attr => {
      assert(attr.arguments === null);
      return `${attr.name}`;
    }));
}

/**
 * @returns doc "@type {(string|string[])} attr_name"
 * @returns body "Target.prototype.attr_name = 'default_value';"
 */
function convertInterfaceAttribute(interface_name, member) {
  assert(!member.static);
  assert(!member.stringifier);
  assert(!member.inherit);
  assert(member.extAttrs.length === 0);
  if (interface_name == null) {
    assert(!member.static);
  }

  let result = [];
  let doc_lines = [
    `@type {${getTypeInDoc(member.idlType)}}`,
    (member.readonly ? "@readonly" : null),
  ];
  result.push(getDocFromLines(doc_lines));
  if (interface_name !== null) {
    result.push(`${interface_name}${member.static ? '' : '.prototype'}.`);
  }
  result.push(`${member.name} = ${getDefaultValueOfType(member.idlType)};`);
  return result.join("");
}

/**
 * @returns "<name> = function (arg1, arg2) { return default_value; };"
 */
function getFunction(name, args, return_type) {
  let result = [];
  result.push(`${name} = function (`);
  result.push(args.map(arg => { return arg.name; }).join(", "));
  result.push(`) {`);
  if (return_type !== null) {
    result.push(` return ${getDefaultValueOfType(return_type)}; `);
  }
  result.push(`};`);

  return result.join("");
}

function convertInterfaceOperation(interface_name, member) {
  assert(!member.getter);
  assert(!member.setter);
  assert(!member.creator);
  assert(!member.deleter);
  assert(!member.legacycaller);
  assert(!member.stringifier);
  assert(member.extAttrs.length === 0);
  if (interface_name === null) {
    assert(!member.static);
  }

  let doc_lines = member.arguments.map(getArgInDoc)
    .concat(`@returns {${getTypeInDoc(member.idlType)}}`);
  return getDocFromLines(doc_lines) +
    getFunction(`${interface_name}${member.static ? '' : '.prototype'}.${member.name}`,
                member.arguments,
                member.idlType);
}

function convertInterfaceConstructor(interface_name, args) {
  let doc_lines = ["@constructor"];
  if (args) {
    doc_lines = doc_lines.concat(args.map(getArgInDoc));
  }
  return getDocFromLines(doc_lines) +
    getFunction(`var ${interface_name}`, args, null/*return_type*/);
}

function convertInterface(definition) {
  assert(!definition.partial);

  let no_interface_object = false;
  let constructor_arguments = [];
  definition.extAttrs.forEach(attr => {
    switch (attr.name) {
      case 'NoInterfaceObject': {
        no_interface_object = true;
        break;
      }
      case 'Constructor': {
        constructor_arguments = attr.arguments;
        break;
      }
      default: {
        fail("Un-supported attr:" + attr.name, attr);
      }
    }
  });

  let result = [];
  let interface_name = definition.name;

  if (no_interface_object) {
    assert(constructor_arguments.length === 0);
    interface_name = null;
  } else {
    result.push(convertInterfaceConstructor(definition.name, constructor_arguments));
    if (definition.inheritance !== null) {
      result.push(`${definition.name}.prototype = new ${definition.inheritance}();`);
    }
    result.push("\n");
  }

  return result.join("\n") +
    definition.members.map(member => {
      switch (member.type) {
        case 'attribute': {
          return convertInterfaceAttribute(interface_name, member);
        }
        case 'operation': {
          return convertInterfaceOperation(interface_name, member);
        }
        default:
          fail("Un-supported member type:" + member.type, member);
      }
    }).join("\n\n");
}

function convertEnum(definition) {
  assert(definition.extAttrs.length === 0);

  // TODO: add jsdoc
  let result = [`const ${definition.name} = {`]
    .concat(definition.values.map((value) => {
      return `  ${value}: "${value}",`;
    }))
    .concat(`};`);

  return result.join("\n");
}

function convertDictField(dict_name, field) {
  return `${dict_name}.${field.name} = ${getDefaultValueOfDefault(field.default)},`;
}

function convertDict(definition) {
  assert(!definition.partial);
  assert(definition.extAttrs.length === 0);

  // TODO: add jsdoc
  let result = [`const ${definition.name} = {};`];
  if (definition.inheritance) {
    assert(typeof(definition.inheritance) === 'string');
    result.push(`${definition.name}.prototype = ${definition.inheritance}`);
  }
  result.push(definition.members.map((member) => {
    switch (member.type) {
      case 'field': {
        return convertDictField(definition.name, member);
      }
      default: {
        fail("Un-supported dict member type" + member.type, member);
      }
    }
  }));
  result.push(`};`);

  return result.join("\n");
}

function convertImpl(definition) {
  assert(definition.extAttrs.length === 0);

  // TODO: add jsdoc
  return `${definition.target}.prototype = new ${definition.implements}();`;
}

function convertFile(source_path, target_path) {
  assert(source_path.endsWith(".webidl"));
  assert(target_path.endsWith(".js"));

  let result = fs.readFileSync(source_path, 'utf8').split("\n\n").map(idl_str => {
    console.log("==================================================");
    console.log(idl_str);
    console.log("==================================================");

    let definition = WebIDL2.parse(idl_str);
    assert(definition.length === 1);
    definition = definition[0];

    let doc = getDocFromLines(idl_str.split("\n"));
    let str;
    switch (definition.type) {
      case 'interface': {
        str = convertInterface(definition);
        break;
      }
      case 'enum': {
        str = convertEnum(definition);
        break;
      }
      case 'dictionary': {
        str = convertDict(definition);
        break;
      }
      case 'implements': {
        str = convertImpl(definition);
        break;
      }
      default: {
        fail("Un-supported type:" + definition.type, definition);
      }
    }
    console.log(doc + str + "\n");
    return doc + str + "\n";
  });

  fs.writeFileSync(target_path, result.join("\n\n") + "\n");
}

function convertDir(source_root, target_root, ignore_error) {
  assert(fs.lstatSync(source_root).isDirectory());
  if (!fs.existsSync(target_root)) {
    fs.mkdirSync(target_root, 0766);
  }

  let children = fs.readdirSync(source_root);
  children.forEach(child => {
    console.log('scan', child);
    let source = `${source_root}/${child}`;
    let target = `${target_root}/${child}`;
    let source_stat = fs.lstatSync(source);
    if (source_stat.isFile()) {
      try {
        convertFile(source, target.replace(".webidl", ".js"));
      } catch (e) {
        if (ignore_error) {
          console.log(e);
        } else {
          throw e;
        }
      }
    } else if (source_stat.isDirectory()) {
      convertDir(source, target);
    } else {
      fail("Un-supported file:" + source, source_stat);
    }
  });
}

const exec = require( 'child_process' ).exec;
const URL_TO_IDL = {
  "https://www.w3.org/TR/IndexedDB/" : "idl/IndexedDB.webidl"
};
function updateIDL() {
  for (let url of Object.keys(URL_TO_IDL)) {
    let path = URL_TO_IDL[url];
    console.log('update', url, '=>', path);
    exec(`curl ${url} | node_modules/webidl-extract/cli.js > ${path}`);
  }
}


// ================ Main ===============
const process = require('process');
let cmd = process.argv[process.argv.length - 1];
switch (cmd) {
  case 'update': {
    updateIDL();
    break;
  }
  case 'all': {
    convertDir('idl', 'js', 'ignore_error');
    break;
  }
  default:
    convertDir('idl', 'js');
}

// =============== Test ==============
exports.test = function(name) {
  let idl = fs.readFileSync(`idl/indexed_db/${name}`, 'utf8');
  return WebIDL2.parse(idl);
};
