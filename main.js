"use strict";

const RESET = "\x1b[0m";
// const BLACK = "\x1b[30m";
// const RED = "\x1b[31m";
// const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
// const BLUE = "\x1b[34m";
const MAGENTA = "\x1b[35m";
const CYAN = "\x1b[36m";
// const WHITE = "\x1b[37m";


/** @type {WebIDL2} */
const WebIDL2 = require("webidl2");
const fs = require('fs');
const assert_ext = require('assert');

/**
 * @param {Object} obj
 * @returns {boolean}
 */
function isDefined(obj) {
  return typeof(obj) !== 'undefined' && obj !== null;
}

/**
 * @param {boolean} condition
 * @param {Object} [obj]
 */
function assert(condition, obj) {
  assert_ext(condition, `${YELLOW}${JSON.stringify(obj)}${RESET}`);
}

/**
 * @param {string} msg
 * @param {Object} [obj]
 */
function fail(msg, obj) {
  assert_ext(false, `${MAGENTA}${msg}, ${CYAN}${JSON.stringify(obj)}${RESET}`);
}

/**
 * @param {string[]} lines
 * @returns {string} -- JSDoc
 */
function getDocFromLines(lines) {
  if (lines.length === 0) {
    return "";
  }
  let doc = lines
    .filter(line => (line !== null && line.length > 0))
    .map(line => { return ` * ${line}`; })
    .join("\n");
  return `/**\n${doc}\n */`;
}

// /**
//  * @param {WebIDLType} sub_type
//  * @returns {WebIDLType}
//  */
// function getTypeOfArray(sub_type) {
//   return {
//     sequence: true,
//     generic: 'sequence',
//     nullable: false,
//     nullableArray: null,
//     // array: (sub_type.array === false ? 1 : sub_type.array + 1),
//     union: false,
//     idlType: sub_type,
//   };
// }

/**
 * @param {WebIDLSimpleType} idlType
 * @returns {*} -- "new TargetClass()"
 */
function getDefaultValueObj(idlType) {
  switch (idlType) {
    case 'any':
      return '{}';
    case 'void':
      return '';
    case 'short':
    case 'long':
    case 'long long':
    case 'unsigned short':
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
 * @param {WebIDLSimpleType | WebIDLType} type
 * @returns {string} -- "[new TargetClass()]"
 */
function getDefaultValueOfType(type) {
  assert(isDefined(type));
  if (typeof(type) === 'string') {
    return `${getDefaultValueObj(type)}`;
  }

  if (type.nullable || type.union) {
    return 'null';
  }

  assert(isDefined(type.idlType));
  let value = getDefaultValueOfType(type.idlType);

  let array = 0;
  if (type.sequence) {
    assert(type.idlType !== 'void');
    assert(!type.array, type);
    array = 1;
  } else if (type.array) {
    assert(!type.sequence);
    array = type.array;
  }
  for (let i = 0; i < array; i++) {
    value = `[${value}]`;
  }

  return value;
}

/**
 * @param {WebIDLConstValue} default_def
 * @returns {string|number|null} -- "some_string"
 */
function getDefaultValueOfDefault(default_def) {
  assert(isDefined(default_def));
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
    case 'sequence': {
      return default_def.value;
    }
    default: {
      fail("Un-supported arg default type:" + default_def.type, default_def);
    }
  }
}

/**
 * @param {string} idlType
 * @returns {string} -- "string"
 */
function getTypePlainName(idlType) {
  assert(typeof(idlType) === 'string', idlType);
  switch (idlType) {
    case 'any':
      return '*';
    case 'short':
    case 'long':
    case 'long long':
    case 'unsigned short':
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
 * @param {WebIDLType|WebIDLSimpleType} type
 * @returns {string} -- "string|string[]"
 */
function getTypeInDoc(type) {
  if (typeof(type) === 'string') {
    return getTypePlainName(type);
  }

  let doc = type.nullable ? "?" : "";
  if (type.union) {
    assert(!type.array, type);
    assert(!type.sequence);
    assert(type.generic === null);
    assert((typeof(type['default']) === 'undefined'));
    assert(Array.isArray(type.idlType));
    doc += "(" + type.idlType.map(getTypeInDoc).join("|") + ")";
  } else if (type.array) {
    assert(!type.sequence);
    assert(!type.union);
    assert(type.generic === null);
    assert((typeof(type['default']) === 'undefined'));
    doc += getTypeInDoc(type.idlType) + '[]';
  } else if (type.sequence) {
    assert(!type.array, type);
    assert(!type.union);
    assert(type.generic === 'sequence');
    doc += getTypeInDoc(type.idlType) + '[]';
  } else if (type.generic === 'record') {
    assert(!type.array, type);
    assert(!type.union);
    assert(!type.sequence);
    assert(type.idlType.length === 2);
    doc += `Object.<${getTypeInDoc(type.idlType[0])}, ${getTypeInDoc(type.idlType[1])}>`
  } else if (type.generic === 'Promise') {
    assert(!type.array, type);
    assert(!type.union);
    assert(!type.sequence);
    assert(!Array.isArray(type.idlType));
    doc += `Promise.<${getTypeInDoc(type.idlType)}>`;
  } else {
    assert(!type.array, type);
    assert(!type.union);
    assert(!type.sequence);
    assert(type.generic === null, type);
    assert(typeof(type.idlType) === 'string');
    doc += getTypeInDoc(type.idlType);
  }
  return doc;
}

/**
 * @param {string} generic_type_name
 * @param {string[]} template_type_names
 */
function getGenericTypeInDoc(generic_type_name, template_type_names) {
  assert(typeof(generic_type_name) === 'string');
  return generic_type_name + ".<" + template_type_names.join(", ") + ">";
}

/**
 * @param {WebIDLArgument} arg
 * @returns {string} -- "@param {string|string[]} storeNames"
 */
function getArgInDoc(arg) {
  let arg_name = arg.name;
  if (typeof(arg.default) !== 'undefined') {
    arg_name += `=${getDefaultValueOfDefault(arg.default)}`;
  }
  if (arg.optional) {
    arg_name = `[${arg_name}]`;
  }

  let type_doc = getTypeInDoc(arg.idlType);
  if (arg.variadic) {
    type_doc = `...${type_doc}`;
  }

  let doc = [];
  doc.push(`@param {${type_doc}} `);
  doc.push(arg_name);
  if (arg.extAttrs.length > 0) {
    doc.push(' --');
    arg.extAttrs.forEach(attr => {
      assert(attr.arguments === null);
      switch (attr.name) {
        case 'EnforceRange': {
          doc.push(` [EnforceRange]`);
          break;
        }
        case 'TreatNullAs': {
          assert(attr.rhs.type === 'identifier');
          doc.push(` [TreatNullAs=${attr.rhs.value}]`);
          break;
        }
        default: {
          fail("Un-supported attr:" + attr.name, attr);
        }
      }
    });
  }
  return doc.join("");
}

/**
 * @param {string} interface_name
 * @param {WebIDLAttributeMember} member
 * @returns {string} -- doc "@type {(string|string[])} attr_name"
 *                      body "Target.prototype.attr_name = 'default_value';"
 */
function convertInterfaceAttribute(interface_name, member) {
  assert(!member.static);
  assert(!member.inherit);
  assert(isDefined(interface_name));

  let result = [];
  let doc_lines = [];
  let exposed = [];

  if (member.stringifier) {
    doc_lines.push(`[stringifier]`);
  }

  member.extAttrs.forEach(attr => {
    switch (attr.name) {
      case 'SameObject': {
        assert(attr.arguments === null);
        doc_lines.push(`[SameObject] -- It will always return the same object`);
        break;
      }
      case 'LenientThis': {
        assert(attr.arguments === null);
        doc_lines.push(`[LenientThis] -- This method is only accessible on object that implements this interface. Not on its prototype.`);
        break;
      }
      case 'Exposed': {
        assert(attr.arguments === null);
        if (attr.rhs.type === 'identifier') {
          assert(typeof(attr.rhs.value) === 'string');
          exposed = [attr.rhs.value];
        } else if (attr.rhs.type === 'identifier-list') {
          exposed = attr.rhs.value;
        } else {
          fail("Unknown Exposed attr", attr);
        }
        break;
      }
      case 'Unforgeable': {
        assert(attr.arguments === null);
        doc_lines.push(`[Unforgeable] -- This method is non-configurable.`);
        break;
      }
      case 'CEReactions': {
        assert(attr.arguments === null);
        doc_lines.push(`[CEReactions] -- Specify algorithms used in custom elements.`);
        break;
      }
      case 'PutForwards': {
        assert(attr.arguments === null);
        assert(attr.rhs.type === 'identifier');
        assert(member.readonly);
        doc_lines.push(`[PutForwards=${attr.rhs.value}] -- The value assigned to this attribute will be forwarded to its property "${attr.rhs.value}".`);
        break;
      }
      case 'Unscopable': {
        assert(attr.arguments === null);
        doc_lines.push(`[Unscopable] -- Implementation won't include this property name with it as its base object.`);
        break;
      }
      case 'TreatNullAs': {
        assert(attr.arguments === null);
        assert(attr.rhs.type === 'identifier');
        doc_lines.push(`[TreatNullAs=${attr.rhs.value}]`);
        break;
      }
      default: {
        fail("Un-supported attr:" + attr.name, attr);
      }
    }
  });

  doc_lines.push(`@type {${getTypeInDoc(member.idlType)}}`);
  if (member.readonly) {
    doc_lines.push("@readonly")
  }
  result.push(getDocFromLines(doc_lines));

  let member_definition_name = `${interface_name}${member.static ? '' : '.prototype'}.${member.name}`;
  result.push(`${member_definition_name} = ${getDefaultValueOfType(member.idlType)};`);

  exposed.forEach(target => {
    result.push(`${target}${member.static ? '' : '.prototype'}.${member.name} = ${member_definition_name}`);
  });

  return result.join("\n");
}

/**
 * @param {string} name
 * @param {WebIDLArgument[]} args
 * @param {?(WebIDLSimpleType | WebIDLType)} return_type
 * @returns {string} -- "<name> = function (arg1, arg2) { return default_value; };"
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

/**
 * @param {string} name
 * @param {WebIDLSimpleType|WebIDLType|WebIDLType[]} return_types
 * @returns {string}
 */
function getIterator(name, return_types) {
  let default_value = Array.isArray(return_types) ?
    `[${return_types.map(type => getDefaultValueOfType(type)).join(", ")}]` :
    getDefaultValueOfType(return_types);
  return `${name} = function* () { yield ${default_value}; };`;
}

/**
 * @param {string} interface_name
 * @param {WebIDLOperationMember} member
 * @returns {string}
 */
function getInterfaceStringifier(interface_name, member) {
  assert(!member.getter);
  assert(!member.setter);
  assert(!member.creator);
  assert(!member.deleter);
  assert(!member.legacycaller);
  assert(!member.static);
  assert(member.stringifier);
  assert(member.extAttrs.length === 0);
  assert(!isDefined(member.name), member);

  let doc_lines = [`@returns {string}`];
  let result = [getDocFromLines(doc_lines)];
  result.push(getFunction(`${interface_name}.prototype.toString`, [], 'DOMString'));
  return result.join("\n");
}

/**
 * @param {string} interface_name
 * @param {WebIDLOperationMember} member
 * @returns {string}
 */
function convertInterfaceOperation(interface_name, member) {
  if (member.stringifier) {
    return getInterfaceStringifier(interface_name, member);
  }
  assert(!member.creator);
  assert(!member.deleter);
  assert(!member.legacycaller);
  if (interface_name === null) {
    assert(!member.static);
  }

  let result = [];
  let doc_lines = [];

  member.extAttrs.forEach(attr => {
    switch (attr.name) {
      case 'NewObject': {
        assert(attr.arguments === null);
        // By default we always create new object, no op here
        doc_lines.push(`[NewObject] -- Always returns new object.`);
        break;
      }
      case 'CEReactions': {
        assert(attr.arguments === null);
        doc_lines.push(`[CEReactions] -- Specify algorithms used in custom elements.`);
        break;
      }
      case 'Unscopable': {
        assert(attr.arguments === null);
        doc_lines.push(`[Unscopable] -- Implementation won't include this property name with it as its base object.`);
        break;
      }
      default: {
        fail("Un-supported attr:" + attr.name, attr);
      }
    }
  });

  if (member.getter) {
    assert(!member.setter);
    doc_lines.push(`@getter`);
  }

  if (member.setter) {
    assert(!member.getter);
    doc_lines.push(`@setter`);
  }

  doc_lines = doc_lines.concat(member.arguments.map(getArgInDoc));
  doc_lines.push(`@returns {${getTypeInDoc(member.idlType)}}`);
  result.push(getDocFromLines(doc_lines));

  result.push(getFunction(
    `${interface_name}${member.static ? '' : '.prototype'}.${member.name}`,
    member.arguments,
    member.idlType));

  return result.join("\n");
}

/**
 * @param {string} interface_name
 * @param {WebIDLIteratorMember} member
 * @returns {string[]}
 */
function getAllIterators(interface_name, member) {
  assert(member.extAttrs.length === 0);
  if (Array.isArray(member.idlType)) {
    // Map iterators
    assert(member.idlType.length === 2);
    let key_type = member.idlType[0];
    let value_type = member.idlType[1];
    let iterators = [];
    iterators.push(
      getDocFromLines([`@returns {${getGenericTypeInDoc("Iterator", [getTypeInDoc(key_type)])}}`]) + "\n" +
      getIterator(`${interface_name}.prototype.keys`, key_type));
    iterators.push(
      getDocFromLines([`@returns {${getGenericTypeInDoc("Iterator", [getTypeInDoc(value_type)])}}`]) + "\n" +
      getIterator(`${interface_name}.prototype.values`, value_type));
    iterators.push(
      getDocFromLines([`@returns {${getGenericTypeInDoc("Iterator", [getTypeInDoc(key_type), getTypeInDoc(value_type)])}}`]) + "\n" +
      getIterator(`${interface_name}.prototype.entries`, [key_type, value_type]));
    iterators.push(
      getDocFromLines([`@returns {${getGenericTypeInDoc("Iterator", [getTypeInDoc(key_type), getTypeInDoc(value_type)])}}`]) + "\n" +
      getIterator(`${interface_name}.prototype[Symbol.iterator]`, [key_type, value_type]));

    return iterators;
  } else {
    // Array iterators
    let key_type = 'unsigned long';
    let value_type = member.idlType;
    let iterators = [];
    iterators.push(
      getDocFromLines([`@returns {${getGenericTypeInDoc("Iterator", [getTypeInDoc(key_type)])}}`]) + "\n" +
      getIterator(`${interface_name}.prototype.keys`, key_type));
    iterators.push(
      getDocFromLines([`@returns {${getGenericTypeInDoc("Iterator", [getTypeInDoc(value_type)])}}`]) + "\n" +
      getIterator(`${interface_name}.prototype.values`, value_type));
    iterators.push(
      getDocFromLines([`@returns {${getGenericTypeInDoc("Iterator", [getTypeInDoc(key_type), getTypeInDoc(value_type)])}}`]) + "\n" +
      getIterator(`${interface_name}.prototype.entries`, [key_type, value_type]));
    iterators.push(
      getDocFromLines([`@returns {${getGenericTypeInDoc("Iterator", [getTypeInDoc(key_type), getTypeInDoc(value_type)])}}`]) + "\n" +
      getIterator(`${interface_name}.prototype[Symbol.iterator]`, [key_type, value_type]));

    return iterators;
  }
}

/**
 * @param {WebIDLConstValue} value
 * @returns {string}
 */
function getInterfaceConstValue(value) {
  switch (value.type) {
    case "string":
    case "number":
    case "booleanean":
      return value.value;
    case "null":
      return "null";
    case "Infinity":
      return `${value.negative ? '-' : ''}Infinity`;
    case "NaN":
      return "NaN";
    case "sequence":
      fail("Un-supported sequence const value type");
      break;
    default:
      fail("Unknown const value type:" + value.type, value);
  }
}

/**
 * @param {string} interface_name
 * @param {WebIDLConstantMember} member
 * @return {string}
 */
function getInterfaceConst(interface_name, member) {
  assert(member.type === 'const');
  assert(!member.nullable);
  assert(member.extAttrs.length === 0);

  let doc_lines = [];
  doc_lines.push(`@type {${getTypeInDoc(member.idlType)}}`);
  let result = [getDocFromLines(doc_lines)];

  result.push(`${interface_name}.${member.name} = ${getInterfaceConstValue(member.value)}`);

  return result.join("\n");
}

/**
 * @typedef {Object} WebIDLInterfaceConfig
 * @property {boolean} no_interface_object
 * @property {WebIDLArgument[]} constructor_arguments
 * @property {string[]} exposed
 * @property {boolean} LegacyUnenumerableNamedProperties
 */
/**
 * @param {WebIDLExtendedAttribute[]} extAttrs
 * @returns {WebIDLInterfaceConfig}
 */
function getInterfaceConfig(extAttrs) {
  let config = {
    no_interface_object: false,
    constructor_arguments: [],
    exposed: [],
    LegacyUnenumerableNamedProperties: false,
  };

  extAttrs.forEach(attr => {
    switch (attr.name) {
      case 'NoInterfaceObject': {
        config.no_interface_object = true;
        break;
      }
      case 'Constructor': {
        if (attr.arguments === null) {
          attr.arguments = [];
        }
        config.constructor_arguments = attr.arguments;
        break;
      }
      case 'Exposed': {
        assert(attr.arguments === null);
        if (attr.rhs.type === 'identifier') {
          assert(typeof(attr.rhs.value) === 'string');
          config.exposed = [attr.rhs.value];
        } else if (attr.rhs.type === 'identifier-list') {
          config.exposed = attr.rhs.value;
        } else {
          fail("Unknown Exposed attr", attr);
        }
        break;
      }
      case 'LegacyUnenumerableNamedProperties': {
        assert(attr.arguments === null);
        config.LegacyUnenumerableNamedProperties = true;
        break;
      }
      default: {
        fail("Un-supported attr:" + attr.name, attr);
      }
    }
  });

  return config;
}

/**
 * @param {WebIDLInterface} definition
 * @returns {string}
 */
function getInterfaceConstructorAndInheritance(definition) {
  if (definition.partial) {
    return "";
  }

  let config = getInterfaceConfig(definition.extAttrs);
  let doc_lines = [];
  let result = [];

  if (config.LegacyUnenumerableNamedProperties) {
    doc_lines.push(`[LegacyUnenumerableNamedProperties]`);
  }

  if (config.no_interface_object) {
    assert(config.constructor_arguments.length === 0);
    assert(definition.inheritance === null);

    doc_lines.push(`@interface ${definition.name}`);
    result.push(`let ${definition.name} = {};`);
  } else {
    doc_lines.push("@constructor");
    if (config.constructor_arguments) {
      doc_lines = doc_lines.concat(config.constructor_arguments.map(getArgInDoc));
    }
    result.push(getFunction(`let ${definition.name}`, config.constructor_arguments, null/*return_type*/));
  }

  if (definition.inheritance !== null) {
    result.push(`${definition.name}.prototype = new ${definition.inheritance}();`);
  }

  config.exposed.forEach((target_class) => {
    result.push(`${target_class}.prototype.${definition.name} = ${definition.name};`);
  });

  return [getDocFromLines(doc_lines)].concat(result).join("\n");
}

/**
 * @param {WebIDLInterface} definition
 * @returns {string}
 */
function convertInterface(definition) {
  let result = [getInterfaceConstructorAndInheritance(definition)];

  definition.members.forEach(member => {
    switch (member.type) {
      case 'attribute': {
        result.push(convertInterfaceAttribute(definition.name, member));
        break;
      }
      case 'operation': {
        result.push(convertInterfaceOperation(definition.name, member));
        break;
      }
      case 'iterable': {
        result = result.concat(getAllIterators(definition.name, member));
        break;
      }
      case 'const': {
        result = result.concat(getInterfaceConst(definition.name, member));
        break;
      }
      default:
        fail("Un-supported member type:" + member.type, member);
    }
  });

  return result.join("\n\n");
}

/**
 * @param {WebIDLEnum} definition
 * @returns {string}
 */
function convertEnum(definition) {
  assert(definition.extAttrs.length === 0);

  let doc = [
    `@typedef {` +
    definition.values.map((value) => { return JSON.stringify(value); }).join("|") +
    `} ${definition.name}`
  ];

  return getDocFromLines(doc);
}

/**
 * @param {WebIDLDictionaryMember} field
 * @returns {string} -- "@property {string|string[]} storeNames"
 */
function getDictFieldInDoc(field) {
  assert(field.extAttrs.length === 0);
  assert(field.type === 'field');

  let name = field.name;
  if (typeof(field.default) !== 'undefined') {
    name += `=${getDefaultValueOfDefault(field.default)}`;
  }
  if (!field.required) {
    name = `[${name}]`;
  }

  let doc = [];
  doc.push(`@property {${getTypeInDoc(field.idlType)}} `);
  doc.push(name);
  return doc.join("");
}

// /**
//  * @param {string} dict_name
//  * @param {WebIDLDictionaryMember} field
//  * @returns {string}
//  */
// function convertDictField(dict_name, field) {
//   assert(field.type === 'field');
//   let default_value = typeof(field.default) !== 'undefined' ?
//     getDefaultValueOfDefault(field.default) :
//     getDefaultValueOfType(field.idlType);
//   return `${dict_name}.${field.name} = ${default_value};`;
// }

/**
 * @param {WebIDLDictionary} definition
 * @returns {string}
 */
function convertDict(definition) {
  assert(!definition.partial);
  assert(definition.extAttrs.length === 0);

  let result = [];
  let doc_lines = [
    `@typedef {Object} ${definition.name}`,
  ].concat(definition.members.map(getDictFieldInDoc));
  result.push(getDocFromLines(doc_lines));

  // result.push(`let ${definition.name} = {};`);
  // if (definition.inheritance) {
  //   assert(typeof(definition.inheritance) === 'string');
  //   result.push(`${definition.name}.prototype = new ${definition.inheritance}();`);
  // }
  // result = result.concat(definition.members.map((member) => {
  //   switch (member.type) {
  //     case 'field': {
  //       return convertDictField(definition.name, member);
  //     }
  //     default: {
  //       fail("Un-supported dict member type" + member.type, member);
  //     }
  //   }
  // }));

  return result.join("\n");
}

/**
 * @param {WebIDLImplements} definition
 * @returns {string}
 */
function convertImpl(definition) {
  assert(definition.extAttrs.length === 0);

  let result = [];
  let doc_lines = [
    `@implements {${definition.implements}}`
  ];
  result.push(getDocFromLines(doc_lines));

  result.push(`${definition.target}.prototype = ${definition.implements}.prototype;`);

  return result.join("\n");
}

/**
 * @param {WebIDLTypeDef} definition
 * @returns {string}
 */
function convertTypeDef(definition) {
  assert(definition.typeExtAttrs.length === 0);
  assert(definition.extAttrs.length === 0);

  let doc = [
    `@typedef {${getTypeInDoc(definition.idlType)}} ${definition.name}`
  ];
  return getDocFromLines(doc);
}

/**
 * @param {WebIDLCallback} definition
 */
function convertCallback(definition) {
  let result = [];
  let doc_lines = [];

  definition.extAttrs.forEach(extAttr => {
    switch (extAttr.name) {
      case 'TreatNonObjectAsNull':
        doc_lines.push("[TreatNonObjectAsNull]");
        break;
      default:
        fail("Unknown callback extAttr", extAttr);
    }
  });

  doc_lines.push(`@callback ${definition.name}`);
  doc_lines = doc_lines.concat(definition.arguments.map(getArgInDoc));
  doc_lines.push(`@returns {${getTypeInDoc(definition.idlType)}}`);
  result.push(getDocFromLines(doc_lines));

  result.push(getFunction(
    `let ${definition.name}`,
    definition.arguments,
    definition.idlType));

  return result.join("\n");
}

const BRACKETS = {
  ')' : '(',
  ']' : '[',
  '}' : '{',
};
const LEFT_BRACKETS = Object.values(BRACKETS);
const RIGHT_BRACKETS = Object.keys(BRACKETS);
/**
 * @param {string} source_str
 * @returns {string[]}
 */
function slicer(source_str) {
  source_str = source_str.trim();
  let result = [];
  let index = 0;
  let stack = [];
  while (index < source_str.length) {
    let char = source_str[index];
    if (char === ';') {
      if (stack.length === 0) {
        result.push(source_str.substring(0, index + 1));
        source_str = source_str.substring(index + 1);
        index = 0;
        continue;
      }
    } else if (LEFT_BRACKETS.indexOf(char) >= 0) {
      stack.push(char);
    } else if (RIGHT_BRACKETS.indexOf(char) >= 0) {
      assert(stack[stack.length - 1] === BRACKETS[char]);
      stack.pop();
    }
    index++;
  }
  assert(source_str.length === 0, source_str);
  return result;
}

/**
 * @param {string} source_path
 * @param {string} target_path
 * @return {undefined}
 */
function convertFile(source_path, target_path) {
  assert(source_path.endsWith(".webidl"));
  assert(target_path.endsWith(".js"));

  let idl_source = fs.readFileSync(source_path, 'utf8');
  let idl_list = slicer(idl_source).filter(str => str.trim().length > 0);
  fs.writeFileSync(target_path, "", {flag: 'w'});

  idl_list.forEach((idl_str) => {
    console.log(">>>>>>>>>>>>>>>>>>");
    console.log(idl_str);
    console.log("==================");

    let definitions = WebIDL2.parse(idl_str);
    if (definitions.length === 0) {
      return;
    }
    assert(definitions.length === 1, definitions.length);
    let definition = definitions[0];

    let doc = getDocFromLines(idl_str.split("\n"));
    let str;
    switch (definition.type) {
      case 'callback interface':
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
      case 'typedef': {
        str = convertTypeDef(definition);
        break;
      }
      case 'callback': {
        str = convertCallback(definition);
        break;
      }
      default: {
        fail("Un-supported type:" + definition.type, definition);
      }
    }
    let definition_result = doc + "\n" + str + "\n";
    console.log(definition_result);
    console.log("<<<<<<<<<<<<<<<<<<");
    if (definition_result.match(/\[object Object]/)) {
      fail("definition_result contains [object Object]!");
    }
    fs.writeFileSync(target_path, definition_result + "\n\n", {flag: 'a'});
  });
}

/**
 * @param {string} source_root
 * @param {string} target_root
 * @param {string} [ignore_error]
 * @return {undefined}
 */
function convertDir(source_root, target_root, ignore_error) {
  assert(fs.lstatSync(source_root).isDirectory());
  if (!fs.existsSync(target_root)) {
    fs.mkdirSync(target_root, 0o766);
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
        if (isDefined(ignore_error)) {
          console.log("Exception in convertFile:", e, e.stack);
        } else {
          throw e;
        }
      }
    } else if (source_stat.isDirectory()) {
      convertDir(source, target, ignore_error);
    } else {
      fail("Un-supported file:" + source, source_stat);
    }
  });
}

const exec = require( 'child_process' ).exec;
const URL_TO_IDL = {
  "https://dom.spec.whatwg.org/" : "DOMStandard",
  "https://www.w3.org/TR/html51/webappapis.html" : "WebAppAPI",
  "https://w3c.github.io/webcomponents/spec/custom/" : "WebComponent",
  "https://www.w3.org/TR/IndexedDB/" : "IndexedDB",
  "https://fetch.spec.whatwg.org/" : "Fetch",
};
/**
 * @returns {undefined}
 */
function updateIDL() {
  for (let url of Object.keys(URL_TO_IDL)) {
    let path = `idl/${URL_TO_IDL[url]}.webidl`;
    console.log('update', url, '=>', path);
    exec(`node node_modules/webidl-scraper/cli/index.js ${url} > ${path}`);
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
