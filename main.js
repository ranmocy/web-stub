const WebIDL2 = require("webidl2");
const fs = require('fs');
const assert = require('assert');

function toJSDoc(lines) {
  let doc = lines
    .filter(line => (line !== null && line.length > 0))
    .map(line => { return ` * ${line}`; })
    .join("\n");
  return `/**\n${doc}\n */\n`;
}

function getDefaultValueObj(idlType) {
  switch (idlType) {
    case 'any':
      return '{}';
    case 'void':
      return '';
    case 'unsigned int':
    case 'unsigned long':
    case 'unsigned long long':
      return '0';
    case 'DOMString':
      return '""';
    default:
      return `new ${idlType}()`;
  }
}
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

function getTypeDocName(idlType) {
  assert(typeof(idlType) === 'string');
  switch (idlType) {
    case 'any':
      return '*';
    case 'unsigned int':
    case 'unsigned long':
    case 'unsigned long long':
      return 'number';
    case 'DOMString':
      return 'string';
    default:
      return idlType;
  }
}
function getTypeName(type) {
  // String indicating the generic type (e.g. "Promise", "sequence"). null otherwise.
  // assert(type.generic === null);
  assert(!type.nullable);
  assert(!type.array);
  if (type.union) {
    assert(!type.sequence);
    assert(type.generic === null);
    assert((typeof(type.default) === 'undefined'));
    assert(Array.isArray(type.idlType));
    return type.idlType.map(getTypeName).join("|");
  }
  if (type.sequence) {
    assert(type.generic === 'sequence');
    return getTypeName(type.idlType) + '[]';
  }
  return getTypeDocName(type.idlType);
}
function convertTypeDoc(type) {
  return getTypeName(type) +
    (() => {
      if (typeof(type.default) === 'undefined') {
        return '';
      }
      assert(type.default.type === 'string');
      return `=${type.default.value}`;
    })();
}

function convertArgDoc(arg) {
  assert(!arg.variadic);
  let name = arg.name;
  if (typeof(arg.default) !== 'undefined') {
    assert(arg.default.type === 'string');
    name += `='${arg.default.value}'`;
  }
  if (arg.optional) {
    name = `[${name}]`;
  }

  return `@param {${convertTypeDoc(arg.idlType)}} ${name}` +
    (arg.extAttrs.length === 0 ? '' : ' - ' + arg.extAttrs.map(attr => {
      assert(attr.arguments === null);
      return `${attr.name}`;
    }));
}

function convertMember(parent, member) {
  switch (member.type) {
    case 'attribute': {
      assert(!member.static);
      assert(!member.stringifier);
      assert(!member.inherit);
      assert(member.extAttrs.length === 0);

      let doc_lines = [
        `@type {${convertTypeDoc(member.idlType)}}`,
        (member.readonly ? "@readonly" : null),
      ];
      return toJSDoc(doc_lines) +
        `${parent.name}${member.static ? '' : '.prototype'}.${member.name}` +
        ` = ${getDefaultValue(member.idlType)};`;
      }
    case 'operation': {

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

      let doc_lines = member.arguments.map(convertArgDoc).concat([
        `@returns {${convertTypeDoc(member.idlType)}}`
      ]);
      return toJSDoc(doc_lines) +
        `${parent.name}${member.static ? '' : '.prototype'}.${member.name}` +
        ` = function (` +
        member.arguments.map(arg => { return arg.name; }).join(", ") +
        `) { return ${getDefaultValue(member.idlType)}; };`;
    }
    default:
      throw "Un-supported member type:" + member.type;
  }
}

function convertInterface(interface) {
  assert(!interface.partial);
  assert(interface.extAttrs.length === 0);

  return `var ${interface.name} = function () {};\n` +
    (interface.inheritance === null ?
      '':
      `${interface.name}.prototype = new ${interface.inheritance}();\n`) +
    "\n" +
    interface.members.map(member => {
      return convertMember(interface, member);
    }).join("\n\n");
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
        if (file !== 'IDBDatabase.webidl') {
          // console.log("DEBUG");
          // return;
        }
        let idl = fs.readFileSync(`${SOURCE}/${folder}/${file}`, 'utf8');
        let definitions = WebIDL2.parse(idl);
        let result = toJSDoc(idl.split("\n")) +
          definitions.map(obj => {
            if (obj.type === 'interface') {
              return convertInterface(obj);
            } else {
              throw "Un-supported type:" + obj.type;
            }
          });
        console.log(idl);
        console.log(result);
        fs.writeFileSync(`${TARGET}/${folder}/${file.replace(".webidl", ".js")}`, result);
      });
    });
  });
});
