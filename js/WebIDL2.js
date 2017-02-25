/**
 * interface WebIDL2 {
 *   sequence<WebIDLDefinition> parse(DOMString idl_string);
 * };
 */
/**
 * @constructor
 */
let WebIDL2 = function () {};

/**
 * @param {string} idl_string
 * @returns {WebIDLDefinition[]}
 */
WebIDL2.prototype.parse = function (idl_string) { return [new WebIDLDefinition()]; };


/**
 * typedef (WebIDLInterface or WebIDLCallback or WebIDLDictionary or WebIDLEnum or WebIDLTypeDef or WebIDLImplements) WebIDLDefinition;
 */
/**
 * @typedef {(WebIDLInterface|WebIDLCallback|WebIDLDictionary|WebIDLEnum|WebIDLTypeDef|WebIDLImplements)} WebIDLDefinition
 */


/**
 * dictionary WebIDLType {
 *   boolean sequence = false;
 *   DOMString? generic = null;
 *   boolean nullable = false;
 *   sequence<boolean> nullableArray = null;
 *   (boolean or unsigned short) array = false;
 *   boolean union = false;
 *   (DOMString or sequence<WebIDLType> or WebIDLType) idlType = "void";
 * };
 */
/**
 * @typedef {Object} WebIDLType
 * @property {boolean} [sequence=false]
 * @property {?string} [generic=null]
 * @property {boolean} [nullable=false]
 * @property {boolean[]} [nullableArray=null]
 * @property {(boolean|unsigned short)} [array=false]
 * @property {boolean} [union=false]
 * @property {(string|WebIDLType[]|WebIDLType)} [idlType='void']
 */


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
 *   boolean partial = false;
 *   sequence<WebIDLInterfaceMember> members;
 *   DOMString? inheritance = null;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLInterface
 * @property {string} [type='interface']
 * @property {string} [name]
 * @property {boolean} [partial=false]
 * @property {WebIDLInterfaceMember[]} [members]
 * @property {?string} [inheritance=null]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */


/**
 * typedef (WebIDLAttributeMember or WebIDLConstantMember or WebIDLOperationMember or WebIDLIteratorMember or WebIDLIterable) WebIDLInterfaceMember;
 */
/**
 * @typedef {(WebIDLAttributeMember|WebIDLConstantMember|WebIDLOperationMember|WebIDLIteratorMember|WebIDLIterable)} WebIDLInterfaceMember
 */


/**
 * dictionary WebIDLAttributeMember {
 *   DOMString type = "attribute";
 *   boolean static = false;
 *   boolean stringifier = false;
 *   boolean inherit = false;
 *   boolean readonly = false;
 *   WebIDLType idlType;
 *   DOMString name;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLAttributeMember
 * @property {string} [type='attribute']
 * @property {boolean} [static=false]
 * @property {boolean} [stringifier=false]
 * @property {boolean} [inherit=false]
 * @property {boolean} [readonly=false]
 * @property {WebIDLType} [idlType]
 * @property {string} [name]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */


/**
 * dictionary WebIDLConstantMember {
 *   DOMString type = "const";
 *   boolean nullable = false;
 *   WebIDLSimpleType idlType;
 *   DOMString name;
 *   WebIDLConstValue value;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLConstantMember
 * @property {string} [type='const']
 * @property {boolean} [nullable=false]
 * @property {WebIDLSimpleType} [idlType]
 * @property {string} [name]
 * @property {WebIDLConstValue} [value]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */


/**
 * dictionary WebIDLOperationMember {
 *   DOMString type = "operation";
 *   boolean getter = false;
 *   boolean setter = false;
 *   boolean creator = false;
 *   boolean deleter = false;
 *   boolean legacycaller = false;
 *   boolean static = false;
 *   boolean stringifier = false;
 *   WebIDLType idlType;
 *   DOMString name;
 *   sequence<WebIDLArgument> arguments;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLOperationMember
 * @property {string} [type='operation']
 * @property {boolean} [getter=false]
 * @property {boolean} [setter=false]
 * @property {boolean} [creator=false]
 * @property {boolean} [deleter=false]
 * @property {boolean} [legacycaller=false]
 * @property {boolean} [static=false]
 * @property {boolean} [stringifier=false]
 * @property {WebIDLType} [idlType]
 * @property {string} [name]
 * @property {WebIDLArgument[]} [arguments]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */


/**
 * dictionary WebIDLArgument {
 *   boolean optional = false;
 *   boolean variadic = true;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 *   WebIDLType idlType;
 *   DOMString name;
 *   WebIDLConstValue default;
 * };
 */
/**
 * @typedef {Object} WebIDLArgument
 * @property {boolean} [optional=false]
 * @property {boolean} [variadic=true]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 * @property {WebIDLType} [idlType]
 * @property {string} [name]
 * @property {WebIDLConstValue} [default]
 */


/**
 * dictionary WebIDLIteratorMember {
 *   DOMString type = "iterator";
 *   boolean getter = false;
 *   boolean setter = false;
 *   boolean creator = false;
 *   boolean deleter = false;
 *   boolean legacycaller = false;
 *   boolean static = false;
 *   boolean stringifier = false;
 *   WebIDLType idlType;
 *   DOMString? iteratorObject = null;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLIteratorMember
 * @property {string} [type='iterator']
 * @property {boolean} [getter=false]
 * @property {boolean} [setter=false]
 * @property {boolean} [creator=false]
 * @property {boolean} [deleter=false]
 * @property {boolean} [legacycaller=false]
 * @property {boolean} [static=false]
 * @property {boolean} [stringifier=false]
 * @property {WebIDLType} [idlType]
 * @property {?string} [iteratorObject=null]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */


/**
 * dictionary WebIDLIterable {
 *   WebIDLIterableType type;
 *   (WebIDLType or record<DOMString, WebIDLType>) idlType;
 *   boolean readonly = false; // only for maplike and setlike
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLIterable
 * @property {WebIDLIterableType} [type]
 * @property {(WebIDLType|Object.<string, WebIDLType>)} [idlType]
 * @property {boolean} [readonly=false]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */


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
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLCallback
 * @property {string} [type='callback']
 * @property {string} [name]
 * @property {WebIDLType} [idlType]
 * @property {WebIDLArgument[]} [arguments]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */


/**
 * dictionary WebIDLDictionary {
 *   DOMString type = "dictionary";
 *   DOMString name;
 *   boolean partial = false;
 *   sequence<WebIDLDictionaryMember> members;
 *   DOMString? inheritance = null;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLDictionary
 * @property {string} [type='dictionary']
 * @property {string} [name]
 * @property {boolean} [partial=false]
 * @property {WebIDLDictionaryMember[]} [members]
 * @property {?string} [inheritance=null]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */


/**
 * dictionary WebIDLDictionaryMember {
 *   DOMString type = "field";
 *   DOMString name;
 *   boolean required;
 *   WebIDLType idlType;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 *   WebIDLConstValue default;
 * };
 */
/**
 * @typedef {Object} WebIDLDictionaryMember
 * @property {string} [type='field']
 * @property {string} [name]
 * @property {boolean} [required]
 * @property {WebIDLType} [idlType]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 * @property {WebIDLConstValue} [default]
 */


/**
 * dictionary WebIDLException {
 *   DOMString type = "exception";
 *   DOMString name;
 *   sequence<WebIDLExceptionMember> members;
 *   DOMString? inheritance = null;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLException
 * @property {string} [type='exception']
 * @property {string} [name]
 * @property {WebIDLExceptionMember[]} [members]
 * @property {?string} [inheritance=null]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */


/**
 * dictionary WebIDLExceptionMember {
 *   DOMString type = "field";
 *   DOMString name;
 *   WebIDLType idlType;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLExceptionMember
 * @property {string} [type='field']
 * @property {string} [name]
 * @property {WebIDLType} [idlType]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */


/**
 * dictionary WebIDLEnum {
 *   DOMString type = "enum";
 *   DOMString name;
 *   sequence<DOMString> values;
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLEnum
 * @property {string} [type='enum']
 * @property {string} [name]
 * @property {string[]} [values]
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 */


/**
 * dictionary WebIDLTypeDef {
 *   DOMString type = "typedef";
 *   sequence<WebIDLExtendedAttribute> extAttrs;
 *   WebIDLType idlType;
 *   DOMString name;
 *   sequence<WebIDLExtendedAttribute> typeExtAttrs;
 * };
 */
/**
 * @typedef {Object} WebIDLTypeDef
 * @property {string} [type='typedef']
 * @property {WebIDLExtendedAttribute[]} [extAttrs]
 * @property {WebIDLType} [idlType]
 * @property {string} [name]
 * @property {WebIDLExtendedAttribute[]} [typeExtAttrs]
 */


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


/**
 * // Also used for const values
 * dictionary WebIDLConstValue {
 *   WebIDLConstValueType type;
 *   // For string, number, booleanean, and sequence:
 *   any value;
 *   // For Infinity:
 *   boolean negative;
 * };
 */
/**
 * @typedef {Object} WebIDLConstValue
 * @property {WebIDLConstValueType} [type]
 * @property {*} [value]
 * @property {boolean} [negative]
 */


/**
 * enum WebIDLConstValueType {
 *   "string", "number", "booleanean", "null", "Infinity", "NaN", "sequence"
 * };
 */
/**
 * @typedef {"string"|"number"|"booleanean"|"null"|"Infinity"|"NaN"|"sequence"} WebIDLConstValueType
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


/**
 * enum WebIDLExtendedAttributeRHSType {
 *   "identifier", "identifier-list"
 * };
 */
/**
 * @typedef {"identifier"|"identifier-list"} WebIDLExtendedAttributeRHSType
 */


