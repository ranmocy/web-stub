interface WebIDL2 {
  sequence<WebIDLDefination> parse(DOMString idl_string);
};

typedef (WebIDLInterface or WebIDLCallback or WebIDLDictionary or WebIDLEnum or WebIDLTypeDef or WebIDLImplements) WebIDLDefination;

dictionary WebIDLType {
  bool array = false;
  DOMString? generic = null;
  (DOMString or sequence<WebIDLType> or WebIDLType) idlType = "void";
  bool nullable = false;
  sequence<bool> nullableArray = null;
  bool union = false;
};

typedef DOMString WebIDLSimpleType;

dictionary WebIDLInterface {
  DOMString type = "interface";
  DOMString name;
  bool partial = false;
  sequence<WebIDLInterfaceMember> members;
  DOMString? inheritance = null;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

typedef (WebIDLAttributeMember or WebIDLConstantMember or WebIDLOperationMember or WebIDLIteratorMember or WebIDLIterable) WebIDLInterfaceMember;

dictionary WebIDLAttributeMember {
  DOMString type = "attribute";
  bool static = false;
  bool stringifier = false;
  bool inherit = false;
  bool readonly = false;
  WebIDLType idlType;
  DOMString name;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLConstantMember {
  DOMString type = "const";
  bool nullable = false;
  WebIDLSimpleType idlType;
  DOMString name;
  WebIDLConstValue value;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

// TODO: dictionary WebIDLSerializerMember {};

dictionary WebIDLOperationMember {
  DOMString type = "operation";
  bool getter = false;
  bool setter = false;
  bool creator = false;
  bool deleter = false;
  bool legacycaller = false;
  bool static = false;
  bool stringifier = false;
  WebIDLType idlType;
  DOMString name;
  sequence<WebIDLArgument> arguments;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLArgument {
  bool optional = false;
  bool variadic = true;
  sequence<WebIDLExtendedAttribute> extAttrs;
  WebIDLType idlType;
  DOMString name;
};

dictionary WebIDLIteratorMember {
  DOMString type = "iterator";
  bool getter = false;
  bool setter = false;
  bool creator = false;
  bool deleter = false;
  bool legacycaller = false;
  bool static = false;
  bool stringifier = false;
  WebIDLType idlType;
  DOMString? iteratorObject = null;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLIterable {
  WebIDLIterableType type;
  (WebIDLType or record<DOMString, WebIDLType>) idlType;
  bool readonly = false; // only for maplike and setlike
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
  bool partial = false;
  sequence<WebIDLDictionaryMember> members;
  DOMString? inheritance = null;
  sequence<WebIDLExtendedAttribute> extAttrs;
};

dictionary WebIDLDictionaryMember {
  DOMString type = "field";
  DOMString name;
  bool required;
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
  // For string, number, boolean, and sequence:
  any value;
  // For Infinity:
  bool negative;
};

enum WebIDLConstValueType {
  "string", "number", "boolean", "null", "Infinity", "NaN", "sequence"
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
