interface WebIDL2 {
  sequence<WebIDLDefinition> parse(DOMString idl_string);
};

typedef (WebIDLInterface or WebIDLCallback or WebIDLDictionary or WebIDLEnum or WebIDLTypeDef or WebIDLImplements) WebIDLDefinition;

dictionary WebIDLType {
  boolean sequence = false;
  DOMString? generic = null;
  boolean nullable = false;
  sequence<boolean> nullableArray = null;
  (boolean or unsigned short) array = false;
  boolean union = false;
  (DOMString or sequence<WebIDLType> or WebIDLType) idlType = "void";
};

typedef DOMString WebIDLSimpleType;

dictionary WebIDLInterface {
  DOMString type = "interface";
  DOMString name;
  boolean partial = false;
  sequence<WebIDLInterfaceMember> members;
  DOMString? inheritance = null;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

typedef (WebIDLAttributeMember or WebIDLConstantMember or WebIDLOperationMember or WebIDLIteratorMember or WebIDLIterable) WebIDLInterfaceMember;

dictionary WebIDLAttributeMember {
  DOMString type = "attribute";
  boolean static = false;
  boolean stringifier = false;
  boolean inherit = false;
  boolean readonly = false;
  WebIDLType idlType;
  DOMString name;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLConstantMember {
  DOMString type = "const";
  boolean nullable = false;
  WebIDLSimpleType idlType;
  DOMString name;
  WebIDLConstValue value;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

// TODO: dictionary WebIDLSerializerMember {};

dictionary WebIDLOperationMember {
  DOMString type = "operation";
  boolean getter = false;
  boolean setter = false;
  boolean creator = false;
  boolean deleter = false;
  boolean legacycaller = false;
  boolean static = false;
  boolean stringifier = false;
  WebIDLType idlType;
  DOMString name;
  sequence<WebIDLArgument> arguments;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLArgument {
  boolean optional = false;
  boolean variadic = true;
  sequence<WebIDLExtendedAttribute> extAttrs;
  WebIDLType idlType;
  DOMString name;
  WebIDLConstValue default;
};

dictionary WebIDLIteratorMember {
  DOMString type = "iterator";
  boolean getter = false;
  boolean setter = false;
  boolean creator = false;
  boolean deleter = false;
  boolean legacycaller = false;
  boolean static = false;
  boolean stringifier = false;
  WebIDLType idlType;
  DOMString? iteratorObject = null;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLIterable {
  WebIDLIterableType type;
  (WebIDLType or record<DOMString, WebIDLType>) idlType;
  boolean readonly = false; // only for maplike and setlike
  sequence<WebIDLExtendedAttribute> extAttrs;
};

enum WebIDLIterableType {
  "iterable", "legacyiterable", "maplike", "setlike"
};

dictionary WebIDLCallback {
  DOMString type = "callback";
  DOMString name;
  WebIDLType idlType;
  sequence<WebIDLArgument> arguments;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLDictionary {
  DOMString type = "dictionary";
  DOMString name;
  boolean partial = false;
  sequence<WebIDLDictionaryMember> members;
  DOMString? inheritance = null;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLDictionaryMember {
  DOMString type = "field";
  DOMString name;
  boolean required;
  WebIDLType idlType;
  sequence<WebIDLExtendedAttribute> extAttrs;
  WebIDLConstValue default;
};

dictionary WebIDLException {
  DOMString type = "exception";
  DOMString name;
  sequence<WebIDLExceptionMember> members;
  DOMString? inheritance = null;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLExceptionMember {
  DOMString type = "field";
  DOMString name;
  WebIDLType idlType;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLEnum {
  DOMString type = "enum";
  DOMString name;
  sequence<DOMString> values;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLTypeDef {
  DOMString type = "typedef";
  sequence<WebIDLExtendedAttribute> extAttrs;
  WebIDLType idlType;
  DOMString name;
  sequence<WebIDLExtendedAttribute> typeExtAttrs;
};

dictionary WebIDLImplements {
  DOMString type = "implements";
  DOMString target;
  DOMString implements;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

// Also used for const values
dictionary WebIDLConstValue {
  WebIDLConstValueType type;
  // For string, number, booleanean, and sequence:
  any value;
  // For Infinity:
  boolean negative;
};

enum WebIDLConstValueType {
  "string", "number", "booleanean", "null", "Infinity", "NaN", "sequence"
};

dictionary WebIDLExtendedAttribute {
  DOMString name;
  sequence<WebIDLArgument> arguments = null;
  WebIDLExtendedAttributeRHS? rhs;
  record<DOMString, WebIDLType>? typePair;
};

dictionary WebIDLExtendedAttributeRHS {
  WebIDLExtendedAttributeRHSType type;
  DOMString value;
};

enum WebIDLExtendedAttributeRHSType {
  "identifier", "identifier-list"
};
