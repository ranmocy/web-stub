/**
 * interface WebIDL2 {
 *   sequence<WebIDLDefination> parse(DOMString idl_string);
 * };
 */
/**
 * @constructor
 */
let WebIDL2 = function () {};

/**
 * @param {string} idl_string
 * @returns {WebIDLDefination[]}
 */
WebIDL2.prototype.parse = function (idl_string) { return [new WebIDLDefination()]; };


/**
 * typedef (WebIDLInterface or WebIDLCallback or WebIDLDictionary or WebIDLEnum or WebIDLTypeDef or WebIDLImplements) WebIDLDefination;
 */
/**
 * @typedef {(WebIDLInterface|WebIDLCallback|WebIDLDictionary|WebIDLEnum|WebIDLTypeDef|WebIDLImplements)} WebIDLDefination
 */


/**
 * dictionary WebIDLType {
 *   bool array = false;
 *   DOMString? generic = null;
 *   (DOMString or sequence<WebIDLType> or WebIDLType) idlType = "void";
 *   bool nullable = false;
 *   sequence<bool> nullableArray = null;
 *   bool union = false;
 * };
 */
/**
 * @typedef {Object} WebIDLType
 * @property {bool} [array=false]
 * @property {?string} [generic=null]
 * @property {(string|WebIDLType[]|WebIDLType)} [idlType='void']
 * @property {bool} [nullable=false]
 * @property {bool[]} [nullableArray=null]
 * @property {bool} [union=false]
 */
let WebIDLType = {};
WebIDLType.array = false;
WebIDLType.generic = null;
WebIDLType.idlType = 'void';
WebIDLType.nullable = false;
WebIDLType.nullableArray = null;
WebIDLType.union = false;


/**
 * typedef DOMString WebIDLSimpleType;
 */
/**
 * @typedef {string} WebIDLSimpleType
 */


/**
 * dictionary WebIDLInterface {
 *   DOMString type = "interface";
 *   DOMString name;
 *   bool partial = false;
 *   sequence<WebIDLInterfaceMember> members;
 *   DOMString? inheritance = null;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLInterface
 * @property {string} [type='interface']
 * @property {string} [name]
 * @property {bool} [partial=false]
 * @property {WebIDLInterfaceMember[]} [members]
 * @property {?string} [inheritance=null]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 */
let WebIDLInterface = {};
WebIDLInterface.type = 'interface';
WebIDLInterface.name = "";
WebIDLInterface.partial = false;
WebIDLInterface.members = [new WebIDLInterfaceMember()];
WebIDLInterface.inheritance = null;
WebIDLInterface.extAttrs = ;


/**
 * typedef (WebIDLAttributeMember or WebIDLConstantMember or WebIDLOperationMember or WebIDLIteratorMember or WebIDLIterable) WebIDLInterfaceMember;
 */
/**
 * @typedef {(WebIDLAttributeMember|WebIDLConstantMember|WebIDLOperationMember|WebIDLIteratorMember|WebIDLIterable)} WebIDLInterfaceMember
 */


/**
 * dictionary WebIDLAttributeMember {
 *   DOMString type = "attribute";
 *   bool static = false;
 *   bool stringifier = false;
 *   bool inherit = false;
 *   bool readonly = false;
 *   WebIDLType idlType;
 *   DOMString name;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLAttributeMember
 * @property {string} [type='attribute']
 * @property {bool} [static=false]
 * @property {bool} [stringifier=false]
 * @property {bool} [inherit=false]
 * @property {bool} [readonly=false]
 * @property {WebIDLType} [idlType]
 * @property {string} [name]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 */
let WebIDLAttributeMember = {};
WebIDLAttributeMember.type = 'attribute';
WebIDLAttributeMember.static = false;
WebIDLAttributeMember.stringifier = false;
WebIDLAttributeMember.inherit = false;
WebIDLAttributeMember.readonly = false;
WebIDLAttributeMember.idlType = new WebIDLType();
WebIDLAttributeMember.name = "";
WebIDLAttributeMember.extAttrs = ;


/**
 * dictionary WebIDLConstantMember {
 *   DOMString type = "const";
 *   bool nullable = false;
 *   WebIDLSimpleType idlType;
 *   DOMString name;
 *   WebIDLConstValue value;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLConstantMember
 * @property {string} [type='const']
 * @property {bool} [nullable=false]
 * @property {WebIDLSimpleType} [idlType]
 * @property {string} [name]
 * @property {WebIDLConstValue} [value]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 */
let WebIDLConstantMember = {};
WebIDLConstantMember.type = 'const';
WebIDLConstantMember.nullable = false;
WebIDLConstantMember.idlType = new WebIDLSimpleType();
WebIDLConstantMember.name = "";
WebIDLConstantMember.value = new WebIDLConstValue();
WebIDLConstantMember.extAttrs = ;


/**
 * dictionary WebIDLOperationMember {
 *   DOMString type = "operation";
 *   bool getter = false;
 *   bool setter = false;
 *   bool creator = false;
 *   bool deleter = false;
 *   bool legacycaller = false;
 *   bool static = false;
 *   bool stringifier = false;
 *   WebIDLType idlType;
 *   DOMString name;
 *   sequence<WebIDLArgument> arguments;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLOperationMember
 * @property {string} [type='operation']
 * @property {bool} [getter=false]
 * @property {bool} [setter=false]
 * @property {bool} [creator=false]
 * @property {bool} [deleter=false]
 * @property {bool} [legacycaller=false]
 * @property {bool} [static=false]
 * @property {bool} [stringifier=false]
 * @property {WebIDLType} [idlType]
 * @property {string} [name]
 * @property {WebIDLArgument[]} [arguments]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 */
let WebIDLOperationMember = {};
WebIDLOperationMember.type = 'operation';
WebIDLOperationMember.getter = false;
WebIDLOperationMember.setter = false;
WebIDLOperationMember.creator = false;
WebIDLOperationMember.deleter = false;
WebIDLOperationMember.legacycaller = false;
WebIDLOperationMember.static = false;
WebIDLOperationMember.stringifier = false;
WebIDLOperationMember.idlType = new WebIDLType();
WebIDLOperationMember.name = "";
WebIDLOperationMember.arguments = [new WebIDLArgument()];
WebIDLOperationMember.extAttrs = ;


/**
 * dictionary WebIDLArgument {
 *   bool optional = false;
 *   bool variadic = true;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 *   WebIDLType idlType;
 *   DOMString name;
 * };
 */
/**
 * @typedef {Object} WebIDLArgument
 * @property {bool} [optional=false]
 * @property {bool} [variadic=true]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 * @property {WebIDLType} [idlType]
 * @property {string} [name]
 */
let WebIDLArgument = {};
WebIDLArgument.optional = false;
WebIDLArgument.variadic = true;
WebIDLArgument.extAttrs = ;
WebIDLArgument.idlType = new WebIDLType();
WebIDLArgument.name = "";


/**
 * dictionary WebIDLIteratorMember {
 *   DOMString type = "iterator";
 *   bool getter = false;
 *   bool setter = false;
 *   bool creator = false;
 *   bool deleter = false;
 *   bool legacycaller = false;
 *   bool static = false;
 *   bool stringifier = false;
 *   WebIDLType idlType;
 *   DOMString? iteratorObject = null;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLIteratorMember
 * @property {string} [type='iterator']
 * @property {bool} [getter=false]
 * @property {bool} [setter=false]
 * @property {bool} [creator=false]
 * @property {bool} [deleter=false]
 * @property {bool} [legacycaller=false]
 * @property {bool} [static=false]
 * @property {bool} [stringifier=false]
 * @property {WebIDLType} [idlType]
 * @property {?string} [iteratorObject=null]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 */
let WebIDLIteratorMember = {};
WebIDLIteratorMember.type = 'iterator';
WebIDLIteratorMember.getter = false;
WebIDLIteratorMember.setter = false;
WebIDLIteratorMember.creator = false;
WebIDLIteratorMember.deleter = false;
WebIDLIteratorMember.legacycaller = false;
WebIDLIteratorMember.static = false;
WebIDLIteratorMember.stringifier = false;
WebIDLIteratorMember.idlType = new WebIDLType();
WebIDLIteratorMember.iteratorObject = null;
WebIDLIteratorMember.extAttrs = ;


/**
 * dictionary WebIDLIterable {
 *   WebIDLIterableType type;
 *   (WebIDLType or record<DOMString, WebIDLType>) idlType;
 *   bool readonly = false; // only for maplike and setlike
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLIterable
 * @property {WebIDLIterableType} [type]
 * @property {(WebIDLType|Object.<string, WebIDLType>)} [idlType]
 * @property {bool} [readonly=false]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 */
let WebIDLIterable = {};
WebIDLIterable.type = new WebIDLIterableType();
WebIDLIterable.idlType = null;
WebIDLIterable.readonly = false;
WebIDLIterable.extAttrs = ;


/**
 * enum WebIDLIterableType {
 *   "iterable", "legacyiterable", "maplike", "setlike"
 * };
 */
/**
 * @typedef {"iterable"|"legacyiterable"|"maplike"|"setlike"} WebIDLIterableType
 */


/**
 * dictionary WebIDLCallback {
 *   DOMString type = "callback";
 *   DOMString name;
 *   WebIDLType idlType;
 *   sequence<WebIDLArgument> arguments;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLCallback
 * @property {string} [type='callback']
 * @property {string} [name]
 * @property {WebIDLType} [idlType]
 * @property {WebIDLArgument[]} [arguments]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 */
let WebIDLCallback = {};
WebIDLCallback.type = 'callback';
WebIDLCallback.name = "";
WebIDLCallback.idlType = new WebIDLType();
WebIDLCallback.arguments = [new WebIDLArgument()];
WebIDLCallback.extAttrs = ;


/**
 * dictionary WebIDLDictionary {
 *   DOMString type = "dictionary";
 *   DOMString name;
 *   bool partial = false;
 *   sequence<WebIDLDictionaryMember> members;
 *   DOMString? inheritance = null;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLDictionary
 * @property {string} [type='dictionary']
 * @property {string} [name]
 * @property {bool} [partial=false]
 * @property {WebIDLDictionaryMember[]} [members]
 * @property {?string} [inheritance=null]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 */
let WebIDLDictionary = {};
WebIDLDictionary.type = 'dictionary';
WebIDLDictionary.name = "";
WebIDLDictionary.partial = false;
WebIDLDictionary.members = [new WebIDLDictionaryMember()];
WebIDLDictionary.inheritance = null;
WebIDLDictionary.extAttrs = ;


/**
 * dictionary WebIDLDictionaryMember {
 *   DOMString type = "field";
 *   DOMString name;
 *   bool required;
 *   WebIDLType idlType;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 *   WebIDLConstValue default;
 * };
 */
/**
 * @typedef {Object} WebIDLDictionaryMember
 * @property {string} [type='field']
 * @property {string} [name]
 * @property {bool} [required]
 * @property {WebIDLType} [idlType]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 * @property {WebIDLConstValue} [default]
 */
let WebIDLDictionaryMember = {};
WebIDLDictionaryMember.type = 'field';
WebIDLDictionaryMember.name = "";
WebIDLDictionaryMember.required = new bool();
WebIDLDictionaryMember.idlType = new WebIDLType();
WebIDLDictionaryMember.extAttrs = ;
WebIDLDictionaryMember.default = new WebIDLConstValue();


/**
 * dictionary WebIDLException {
 *   DOMString type = "exception";
 *   DOMString name;
 *   sequence<WebIDLExceptionMember> members;
 *   DOMString? inheritance = null;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLException
 * @property {string} [type='exception']
 * @property {string} [name]
 * @property {WebIDLExceptionMember[]} [members]
 * @property {?string} [inheritance=null]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 */
let WebIDLException = {};
WebIDLException.type = 'exception';
WebIDLException.name = "";
WebIDLException.members = [new WebIDLExceptionMember()];
WebIDLException.inheritance = null;
WebIDLException.extAttrs = ;


/**
 * dictionary WebIDLExceptionMember {
 *   DOMString type = "field";
 *   DOMString name;
 *   WebIDLType idlType;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLExceptionMember
 * @property {string} [type='field']
 * @property {string} [name]
 * @property {WebIDLType} [idlType]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 */
let WebIDLExceptionMember = {};
WebIDLExceptionMember.type = 'field';
WebIDLExceptionMember.name = "";
WebIDLExceptionMember.idlType = new WebIDLType();
WebIDLExceptionMember.extAttrs = ;


/**
 * dictionary WebIDLEnum {
 *   DOMString type = "enum";
 *   DOMString name;
 *   sequence<DOMString> values;
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLEnum
 * @property {string} [type='enum']
 * @property {string} [name]
 * @property {string[]} [values]
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 */
let WebIDLEnum = {};
WebIDLEnum.type = 'enum';
WebIDLEnum.name = "";
WebIDLEnum.values = [""];
WebIDLEnum.extAttrs = ;


/**
 * dictionary WebIDLTypeDef {
 *   DOMString type = "typedef";
 *   sequence<WebIDLExtendedAttribute> extAttrs = [];
 *   WebIDLType idlType;
 *   DOMString name;
 *   sequence<WebIDLExtendedAttribute> typeExtAttrs = [];
 * };
 */
/**
 * @typedef {Object} WebIDLTypeDef
 * @property {string} [type='typedef']
 * @property {WebIDLExtendedAttribute[]} [extAttrs=]
 * @property {WebIDLType} [idlType]
 * @property {string} [name]
 * @property {WebIDLExtendedAttribute[]} [typeExtAttrs=]
 */
let WebIDLTypeDef = {};
WebIDLTypeDef.type = 'typedef';
WebIDLTypeDef.extAttrs = ;
WebIDLTypeDef.idlType = new WebIDLType();
WebIDLTypeDef.name = "";
WebIDLTypeDef.typeExtAttrs = ;


/**
 * dictionary WebIDLImplements {
 *   DOMString type = "implements";
 *   DOMString target;
 *   DOMString implements;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLImplements
 * @property {string} [type='implements']
 * @property {string} [target]
 * @property {string} [implements]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */
let WebIDLImplements = {};
WebIDLImplements.type = 'implements';
WebIDLImplements.target = "";
WebIDLImplements.implements = "";
WebIDLImplements.extAttrs = [new WebIDLExtendedAttribute()];


/**
 * // Also used for const values
 * dictionary WebIDLConstValue {
 *   WebIDLConstValueType type;
 *   // For string, number, boolean, and sequence:
 *   any value;
 *   // For Infinity:
 *   bool negative;
 * };
 */
/**
 * @typedef {Object} WebIDLConstValue
 * @property {WebIDLConstValueType} [type]
 * @property {*} [value]
 * @property {bool} [negative]
 */
let WebIDLConstValue = {};
WebIDLConstValue.type = new WebIDLConstValueType();
WebIDLConstValue.value = {};
WebIDLConstValue.negative = new bool();


/**
 * enum WebIDLConstValueType {
 *   "string", "number", "boolean", "null", "Infinity", "NaN", "sequence"
 * };
 */
/**
 * @typedef {"string"|"number"|"boolean"|"null"|"Infinity"|"NaN"|"sequence"} WebIDLConstValueType
 */


/**
 * dictionary WebIDLExtendedAttribute {
 *   DOMString name;
 *   sequence<WebIDLArgument> arguments = null;
 *   WebIDLExtendedAttributeRHS? rhs;
 *   record<DOMString, WebIDLType>? typePair;
 * };
 */
/**
 * @typedef {Object} WebIDLExtendedAttribute
 * @property {string} [name]
 * @property {WebIDLArgument[]} [arguments=null]
 * @property {?WebIDLExtendedAttributeRHS} [rhs]
 * @property {?Object.<string, WebIDLType>} [typePair]
 */
let WebIDLExtendedAttribute = {};
WebIDLExtendedAttribute.name = "";
WebIDLExtendedAttribute.arguments = null;
WebIDLExtendedAttribute.rhs = null;
WebIDLExtendedAttribute.typePair = null;


/**
 * dictionary WebIDLExtendedAttributeRHS {
 *   WebIDLExtendedAttributeRHSType type;
 *   DOMString value;
 * };
 */
/**
 * @typedef {Object} WebIDLExtendedAttributeRHS
 * @property {WebIDLExtendedAttributeRHSType} [type]
 * @property {string} [value]
 */
let WebIDLExtendedAttributeRHS = {};
WebIDLExtendedAttributeRHS.type = new WebIDLExtendedAttributeRHSType();
WebIDLExtendedAttributeRHS.value = "";


/**
 * enum WebIDLExtendedAttributeRHSType {
 *   "identifier", "identifier-list"
 * };
 */
/**
 * @typedef {"identifier"|"identifier-list"} WebIDLExtendedAttributeRHSType
 */


