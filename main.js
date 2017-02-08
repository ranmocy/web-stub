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

function convertType(type) {
  assert(!type.sequence);
  assert(type.generic === null);
  assert(!type.nullable);
  assert(!type.array);
  if (type.union) {
    return type.idlType.map(convertType).join(" | ");
  }
  assert(typeof type.idlType === 'string');
  return type.idlType;
}

function getDefaultValue(type) {
  assert(!type.sequence);
  assert(type.generic === null);
  assert(!type.nullable);
  assert(!type.array);
  if (type.union) {
    return 'null';
  }
  assert(typeof type.idlType === 'string');
  switch (type.idlType) {
    case 'any':
      return '{}';
    case 'void':
      return '';
    default:
      return `new ${type.idlType}()`;
  }
}

function convertTypeDoc(type) {
  assert(!type.sequence);
  assert(type.generic === null);
  assert(!type.nullable);
  assert(!type.array);
  if (type.union) {
    return type.idlType.map(convertType).join("|");
  }
  assert(typeof type.idlType === 'string');
  switch (type.idlType) {
    case 'any':
      return '*';
    case 'unsigned long':
    case 'unsigned int':
      return 'number';
    default:
      return type.idlType;
  }
}

function convertArgDoc(arg) {
  assert(!arg.variadic);
  return `@param {${convertTypeDoc(arg.idlType)}} ` +
    `${arg.optional ? `[${arg.name}]` : arg.name}` +
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
      assert(member.readonly);
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

      let doc_lines = [
        member.arguments.map(convertArgDoc).join("\n"),
        `@returns {${convertTypeDoc(member.idlType)}}`
      ];
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
  let result = `var ${interface.name} = function () {};\n\n`;
  if (interface.inheritance) {
    console.log(interface);
  }
  return result + interface.members.map(member => {
    return convertMember(interface, member);
  }).join("\n\n");
}


let idl = fs.readFileSync('idl/indexed_db/IDBCursor.webidl', 'utf8');
let tree = WebIDL2.parse(idl);
console.log(tree);

var result = toJSDoc(idl.split("\n")) +
tree.map(obj => {
  if (obj.type === 'interface') {
    return convertInterface(obj);
  } else {
    throw "Un-supported type:" + obj.type;
  }
});
console.log(result);

if (!fs.existsSync('js')) {
  fs.mkdirSync('js', 0766);
}
if (!fs.existsSync('js/indexed_db')) {
  fs.mkdirSync('js/indexed_db', 0766);
}
fs.writeFileSync('js/indexed_db/IDBCursor.js', result);
