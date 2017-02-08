let WebIDL2 = require("webidl2");
let fs = require('fs');

function toJSDoc(str) {
  let doc = str.split("\n").map(line => {
    return ` * ${line}`;
  }).join("\n");
  return `/**\n${doc}\n */`;
}

let idl = fs.readFileSync('idl/indexed_db/IDBCursor.webidl', 'utf8');
let tree = WebIDL2.parse(idl);
console.log(tree);

var result = `
${toJSDoc(idl)}
`;

fs.writeFileSync('js/indexed_db/IDBCursor.js', result);
console.log(result);
