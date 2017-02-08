const WebIDL2 = require("webidl2");
const fs = require('fs');
const assert = require('assert');

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
    case 'DOMString':
      return '""';
    default:
      return `new ${idlType}()`;
  }
}

/**
 * @returns "[new TargetClass()]"
 */
function getDefaultValue(type) {
  assert(!type.nullable);
  assert(!type.array);
  if (type.union) {
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
  assert(!type.nullable);
  assert(!type.array);
  if (type.union) {
    assert(!type.sequence);
    assert(type.generic === null);
    assert((typeof(type.default) === 'undefined'));
    assert(Array.isArray(type.idlType));
    return type.idlType.map(getTypeInDoc).join("|");
  }
  if (type.sequence) {
    assert(type.generic === 'sequence');
    return getTypeInDoc(type.idlType) + '[]';
  }
  return getTypePlainName(type.idlType);
}

/**
 * @returns "@param {string|string[]} storeNames"
 */
function getArgInDoc(arg) {
  assert(!arg.variadic);
  let name = arg.name;
  if (typeof(arg.default) !== 'undefined') {
    assert(arg.default.type === 'string');
    name += `='${arg.default.value}'`;
  }
  if (arg.optional) {
    name = `[${name}]`;
  }

  return `@param {${getTypeInDoc(arg.idlType)}} ${name}` +
    (arg.extAttrs.length === 0 ? '' : ' - ' + arg.extAttrs.map(attr => {
      assert(attr.arguments === null);
      return `${attr.name}`;
    }));
}

function convertMemberAttribute(parent, member) {
  assert(!member.static);
  assert(!member.stringifier);
  assert(!member.inherit);
  assert(member.extAttrs.length === 0);
  if (parent == null) {
    assert(!member.static);
  }

  let result = [];
  let doc_lines = [
    `@type {${getTypeInDoc(member.idlType)}}`,
    (member.readonly ? "@readonly" : null),
  ];
  result.push(getDocFromLines(doc_lines));
  if (parent !== null) {
    result.push(`${parent}${member.static ? '' : '.prototype'}.`);
  }
  result.push(`${member.name} = ${getDefaultValue(member.idlType)};`);
  return result.join("");
}

function convertMemberOperation(parent, member) {
  /**
   * @param {*} [key]
   * @returns {void}
   */
  /*
  IDBCursor.prototype.continue = function (key) {};
  */

  assert(!member.getter);
  assert(!member.setter);
  assert(!member.creator);
  assert(!member.deleter);
  assert(!member.legacycaller);
  assert(!member.static);
  assert(!member.stringifier);
  assert(member.extAttrs.length === 0);
  if (parent === null) {
    assert(!member.static);
  }

  let doc_lines = member.arguments.map(getArgInDoc).concat([
    `@returns {${getTypeInDoc(member.idlType)}}`
  ]);
  return getDocFromLines(doc_lines) +
    `${parent}${member.static ? '' : '.prototype'}.${member.name}` +
    ` = function (` +
    member.arguments.map(arg => { return arg.name; }).join(", ") +
    `) { return ${getDefaultValue(member.idlType)}; };`;
}

function convertInterface(interface) {
  assert(!interface.partial);

  let result = "";
  let parent_name = interface.name;

  if (interface.extAttrs.length === 0) {
    result += `var ${interface.name} = function () {};\n` +
    (interface.inheritance === null ?
      '':
      `${interface.name}.prototype = new ${interface.inheritance}();\n`) +
    "\n";
  } else {
    interface.extAttrs.forEach(attr => {
      switch (attr.name) {
        case 'NoInterfaceObject': {
          parent_name = null;
          break;
        }
        default: {
          throw "Un-supported attr:" + attr.name;
        }
      }
    });
  }

  return result +
    interface.members.map(member => {
      switch (member.type) {
        case 'attribute': {
          return convertMemberAttribute(parent_name, member);
        }
        case 'operation': {
          return convertMemberOperation(parent_name, member);
        }
        default:
          throw "Un-supported member type:" + member.type;
      }
    }).join("\n\n");
}

function convertFile(source_path, target_path) {
  let idl = fs.readFileSync(source_path, 'utf8');
  let definitions = WebIDL2.parse(idl);
  let result = getDocFromLines(idl.split("\n")) +
    definitions.map(obj => {
      if (obj.type === 'interface') {
        return convertInterface(obj);
      } else {
        throw "Un-supported type:" + obj.type;
      }
    }) +
    "\n";
  console.log(idl);
  console.log(result);
  fs.writeFileSync(target_path, result);
}


// ================ Main ===============
const SOURCE = 'idl';
const TARGET = 'js';

if (!fs.existsSync(TARGET)) {
  fs.mkdirSync(TARGET, 0766);
}

fs.readdir(SOURCE, (err, folders) => {
  folders.forEach(folder => {
    console.log(folder);
    let target_folder = `${TARGET}/${folder}`;
    if (!fs.existsSync(target_folder)) {
      fs.mkdirSync(target_folder, 0766);
    }

    fs.readdir(`${SOURCE}/${folder}`, (err, files) => {
      files.forEach(file => {
        assert(file.endsWith(".webidl"));
        console.log(file);
        if (file !== 'IDBEnvironment.webidl') {
          // console.log("DEBUG");
          // return;
        }
        convertFile(`${SOURCE}/${folder}/${file}`,
                    `${TARGET}/${folder}/${file.replace(".webidl", ".js")}`);
      });
    });
  });
});

// =============== Test ==============
exports.test = function(name) {
  let idl = fs.readFileSync(`${SOURCE}/indexed_db/${name}`, 'utf8');
  return WebIDL2.parse(idl);
};
