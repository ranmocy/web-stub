/**
 * [Constructor(DOMString type, optional EventInit eventInitDict),
 *  Exposed=(Window,Worker)]
 * interface Event {
 *   readonly attribute DOMString type;
 *   readonly attribute EventTarget? target;
 *   readonly attribute EventTarget? currentTarget;
 *   sequence<EventTarget> composedPath();
 *   const unsigned short NONE = 0;
 *   const unsigned short CAPTURING_PHASE = 1;
 *   const unsigned short AT_TARGET = 2;
 *   const unsigned short BUBBLING_PHASE = 3;
 *   readonly attribute unsigned short eventPhase;
 *   void stopPropagation();
 *            attribute boolean cancelBubble; // historical alias of .stopPropagation
 *   void stopImmediatePropagation();
 *   readonly attribute boolean bubbles;
 *   readonly attribute boolean cancelable;
 *   void preventDefault();
 *   readonly attribute boolean defaultPrevented;
 *   readonly attribute boolean composed;
 *   [Unforgeable] readonly attribute boolean isTrusted;
 *   readonly attribute DOMTimeStamp timeStamp;
 *   void initEvent(DOMString type, boolean bubbles, boolean cancelable); // historical
 * };
 */
/**
 * @constructor
 * @param {string} type
 * @param {EventInit} [eventInitDict]
 */
let Event = function (type, eventInitDict) {};
Window.prototype.Event = Event;
Worker.prototype.Event = Event;

/**
 * @type {string}
 * @readonly
 */
Event.prototype.type = "";

/**
 * @type {?EventTarget}
 * @readonly
 */
Event.prototype.target = null;

/**
 * @type {?EventTarget}
 * @readonly
 */
Event.prototype.currentTarget = null;

/**
 * @returns {EventTarget[]}
 */
Event.prototype.composedPath = function () { return [new EventTarget()]; };

/**
 * @type {number}
 */
Event.NONE = 0

/**
 * @type {number}
 */
Event.CAPTURING_PHASE = 1

/**
 * @type {number}
 */
Event.AT_TARGET = 2

/**
 * @type {number}
 */
Event.BUBBLING_PHASE = 3

/**
 * @type {number}
 * @readonly
 */
Event.prototype.eventPhase = 0;

/**
 * @returns {void}
 */
Event.prototype.stopPropagation = function () { return ; };

/**
 * @type {boolean}
 */
Event.prototype.cancelBubble = false;

/**
 * @returns {void}
 */
Event.prototype.stopImmediatePropagation = function () { return ; };

/**
 * @type {boolean}
 * @readonly
 */
Event.prototype.bubbles = false;

/**
 * @type {boolean}
 * @readonly
 */
Event.prototype.cancelable = false;

/**
 * @returns {void}
 */
Event.prototype.preventDefault = function () { return ; };

/**
 * @type {boolean}
 * @readonly
 */
Event.prototype.defaultPrevented = false;

/**
 * @type {boolean}
 * @readonly
 */
Event.prototype.composed = false;

/**
 * [Unforgeable] -- This method is non-configurable.
 * @type {boolean}
 * @readonly
 */
Event.prototype.isTrusted = false;

/**
 * @type {DOMTimeStamp}
 * @readonly
 */
Event.prototype.timeStamp = new DOMTimeStamp();

/**
 * @param {string} type
 * @param {boolean} bubbles
 * @param {boolean} cancelable
 * @returns {void}
 */
Event.prototype.initEvent = function (type, bubbles, cancelable) { return ; };


/**
 * dictionary EventInit {
 *   boolean bubbles = false;
 *   boolean cancelable = false;
 *   boolean composed = false;
 * };
 */
/**
 * @typedef {Object} EventInit
 * @property {boolean} [bubbles=false]
 * @property {boolean} [cancelable=false]
 * @property {boolean} [composed=false]
 */


/**
 * [Constructor(DOMString type, optional CustomEventInit eventInitDict),
 *  Exposed=(Window,Worker)]
 * interface CustomEvent : Event {
 *   readonly attribute any detail;
 *   void initCustomEvent(DOMString type, boolean bubbles, boolean cancelable, any detail);
 * };
 */
/**
 * @constructor
 * @param {string} type
 * @param {CustomEventInit} [eventInitDict]
 */
let CustomEvent = function (type, eventInitDict) {};
CustomEvent.prototype = new Event();
Window.prototype.CustomEvent = CustomEvent;
Worker.prototype.CustomEvent = CustomEvent;

/**
 * @type {*}
 * @readonly
 */
CustomEvent.prototype.detail = {};

/**
 * @param {string} type
 * @param {boolean} bubbles
 * @param {boolean} cancelable
 * @param {*} detail
 * @returns {void}
 */
CustomEvent.prototype.initCustomEvent = function (type, bubbles, cancelable, detail) { return ; };


/**
 * dictionary CustomEventInit : EventInit {
 *   any detail = null;
 * };
 */
/**
 * @typedef {Object} CustomEventInit
 * @property {*} [detail=null]
 */


/**
 * [Exposed=(Window,Worker)]
 * interface EventTarget {
 *   void addEventListener(DOMString type, EventListener? callback, optional (AddEventListenerOptions or boolean) options);
 *   void removeEventListener(DOMString type, EventListener? callback, optional (EventListenerOptions or boolean) options);
 *   boolean dispatchEvent(Event event);
 * };
 */
/**
 * @constructor
 */
let EventTarget = function () {};
Window.prototype.EventTarget = EventTarget;
Worker.prototype.EventTarget = EventTarget;

/**
 * @param {string} type
 * @param {?EventListener} callback
 * @param {(AddEventListenerOptions|boolean)} [options]
 * @returns {void}
 */
EventTarget.prototype.addEventListener = function (type, callback, options) { return ; };

/**
 * @param {string} type
 * @param {?EventListener} callback
 * @param {(EventListenerOptions|boolean)} [options]
 * @returns {void}
 */
EventTarget.prototype.removeEventListener = function (type, callback, options) { return ; };

/**
 * @param {Event} event
 * @returns {boolean}
 */
EventTarget.prototype.dispatchEvent = function (event) { return false; };


/**
 * callback interface EventListener {
 *   void handleEvent(Event event);
 * };
 */
/**
 * @constructor
 */
let EventListener = function () {};

/**
 * @param {Event} event
 * @returns {void}
 */
EventListener.prototype.handleEvent = function (event) { return ; };


/**
 * dictionary EventListenerOptions {
 *   boolean capture = false;
 * };
 */
/**
 * @typedef {Object} EventListenerOptions
 * @property {boolean} [capture=false]
 */


/**
 * dictionary AddEventListenerOptions : EventListenerOptions {
 *   boolean passive = false;
 *   boolean once = false;
 * };
 */
/**
 * @typedef {Object} AddEventListenerOptions
 * @property {boolean} [passive=false]
 * @property {boolean} [once=false]
 */


/**
 * [NoInterfaceObject,
 *  Exposed=Window]
 * interface NonElementParentNode {
 *   Element? getElementById(DOMString elementId);
 * };
 */
/**
 * @interface NonElementParentNode
 */
let NonElementParentNode = {};
Window.prototype.NonElementParentNode = NonElementParentNode;

/**
 * @param {string} elementId
 * @returns {?Element}
 */
NonElementParentNode.prototype.getElementById = function (elementId) { return null; };


/**
 * Document implements NonElementParentNode;
 */
/**
 * @implements {NonElementParentNode}
 */
Document.prototype = NonElementParentNode.prototype;


/**
 * DocumentFragment implements NonElementParentNode;
 */
/**
 * @implements {NonElementParentNode}
 */
DocumentFragment.prototype = NonElementParentNode.prototype;


/**
 * [NoInterfaceObject,
 *  Exposed=Window]
 * interface DocumentOrShadowRoot {
 * };
 */
/**
 * @interface DocumentOrShadowRoot
 */
let DocumentOrShadowRoot = {};
Window.prototype.DocumentOrShadowRoot = DocumentOrShadowRoot;


/**
 * Document implements DocumentOrShadowRoot;
 */
/**
 * @implements {DocumentOrShadowRoot}
 */
Document.prototype = DocumentOrShadowRoot.prototype;


/**
 * ShadowRoot implements DocumentOrShadowRoot;
 */
/**
 * @implements {DocumentOrShadowRoot}
 */
ShadowRoot.prototype = DocumentOrShadowRoot.prototype;


/**
 * [NoInterfaceObject,
 *  Exposed=Window]
 * interface ParentNode {
 *   [SameObject] readonly attribute HTMLCollection children;
 *   readonly attribute Element? firstElementChild;
 *   readonly attribute Element? lastElementChild;
 *   readonly attribute unsigned long childElementCount;
 *   [CEReactions, Unscopable] void prepend((Node or DOMString)... nodes);
 *   [CEReactions, Unscopable] void append((Node or DOMString)... nodes);
 *   Element? querySelector(DOMString selectors);
 *   [NewObject] NodeList querySelectorAll(DOMString selectors);
 * };
 */
/**
 * @interface ParentNode
 */
let ParentNode = {};
Window.prototype.ParentNode = ParentNode;

/**
 * [SameObject] -- It will always return the same object
 * @type {HTMLCollection}
 * @readonly
 */
ParentNode.prototype.children = new HTMLCollection();

/**
 * @type {?Element}
 * @readonly
 */
ParentNode.prototype.firstElementChild = null;

/**
 * @type {?Element}
 * @readonly
 */
ParentNode.prototype.lastElementChild = null;

/**
 * @type {number}
 * @readonly
 */
ParentNode.prototype.childElementCount = 0;

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * [Unscopable] -- Implementation won't include this property name with it as its base object.
 * @param {...(Node|string)} nodes
 * @returns {void}
 */
ParentNode.prototype.prepend = function (nodes) { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * [Unscopable] -- Implementation won't include this property name with it as its base object.
 * @param {...(Node|string)} nodes
 * @returns {void}
 */
ParentNode.prototype.append = function (nodes) { return ; };

/**
 * @param {string} selectors
 * @returns {?Element}
 */
ParentNode.prototype.querySelector = function (selectors) { return null; };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} selectors
 * @returns {NodeList}
 */
ParentNode.prototype.querySelectorAll = function (selectors) { return new NodeList(); };


/**
 * Document implements ParentNode;
 */
/**
 * @implements {ParentNode}
 */
Document.prototype = ParentNode.prototype;


/**
 * DocumentFragment implements ParentNode;
 */
/**
 * @implements {ParentNode}
 */
DocumentFragment.prototype = ParentNode.prototype;


/**
 * Element implements ParentNode;
 */
/**
 * @implements {ParentNode}
 */
Element.prototype = ParentNode.prototype;


/**
 * [NoInterfaceObject,
 *  Exposed=Window]
 * interface NonDocumentTypeChildNode {
 *   readonly attribute Element? previousElementSibling;
 *   readonly attribute Element? nextElementSibling;
 * };
 */
/**
 * @interface NonDocumentTypeChildNode
 */
let NonDocumentTypeChildNode = {};
Window.prototype.NonDocumentTypeChildNode = NonDocumentTypeChildNode;

/**
 * @type {?Element}
 * @readonly
 */
NonDocumentTypeChildNode.prototype.previousElementSibling = null;

/**
 * @type {?Element}
 * @readonly
 */
NonDocumentTypeChildNode.prototype.nextElementSibling = null;


/**
 * Element implements NonDocumentTypeChildNode;
 */
/**
 * @implements {NonDocumentTypeChildNode}
 */
Element.prototype = NonDocumentTypeChildNode.prototype;


/**
 * CharacterData implements NonDocumentTypeChildNode;
 */
/**
 * @implements {NonDocumentTypeChildNode}
 */
CharacterData.prototype = NonDocumentTypeChildNode.prototype;


/**
 * [NoInterfaceObject,
 *  Exposed=Window]
 * interface ChildNode {
 *   [CEReactions, Unscopable] void before((Node or DOMString)... nodes);
 *   [CEReactions, Unscopable] void after((Node or DOMString)... nodes);
 *   [CEReactions, Unscopable] void replaceWith((Node or DOMString)... nodes);
 *   [CEReactions, Unscopable] void remove();
 * };
 */
/**
 * @interface ChildNode
 */
let ChildNode = {};
Window.prototype.ChildNode = ChildNode;

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * [Unscopable] -- Implementation won't include this property name with it as its base object.
 * @param {...(Node|string)} nodes
 * @returns {void}
 */
ChildNode.prototype.before = function (nodes) { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * [Unscopable] -- Implementation won't include this property name with it as its base object.
 * @param {...(Node|string)} nodes
 * @returns {void}
 */
ChildNode.prototype.after = function (nodes) { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * [Unscopable] -- Implementation won't include this property name with it as its base object.
 * @param {...(Node|string)} nodes
 * @returns {void}
 */
ChildNode.prototype.replaceWith = function (nodes) { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * [Unscopable] -- Implementation won't include this property name with it as its base object.
 * @returns {void}
 */
ChildNode.prototype.remove = function () { return ; };


/**
 * DocumentType implements ChildNode;
 */
/**
 * @implements {ChildNode}
 */
DocumentType.prototype = ChildNode.prototype;


/**
 * Element implements ChildNode;
 */
/**
 * @implements {ChildNode}
 */
Element.prototype = ChildNode.prototype;


/**
 * CharacterData implements ChildNode;
 */
/**
 * @implements {ChildNode}
 */
CharacterData.prototype = ChildNode.prototype;


/**
 * [NoInterfaceObject,
 *  Exposed=Window]
 * interface Slotable {
 *   readonly attribute HTMLSlotElement? assignedSlot;
 * };
 */
/**
 * @interface Slotable
 */
let Slotable = {};
Window.prototype.Slotable = Slotable;

/**
 * @type {?HTMLSlotElement}
 * @readonly
 */
Slotable.prototype.assignedSlot = null;


/**
 * Element implements Slotable;
 */
/**
 * @implements {Slotable}
 */
Element.prototype = Slotable.prototype;


/**
 * Text implements Slotable;
 */
/**
 * @implements {Slotable}
 */
Text.prototype = Slotable.prototype;


/**
 * [Exposed=Window]
 * interface NodeList {
 *   getter Node? item(unsigned long index);
 *   readonly attribute unsigned long length;
 *   iterable<Node>;
 * };
 */
/**
 * @constructor
 */
let NodeList = function () {};
Window.prototype.NodeList = NodeList;

/**
 * @getter
 * @param {number} index
 * @returns {?Node}
 */
NodeList.prototype.item = function (index) { return null; };

/**
 * @type {number}
 * @readonly
 */
NodeList.prototype.length = 0;

/**
 * @returns {Iterator.<number>}
 */
NodeList.prototype.keys = function* () { yield 0; };

/**
 * @returns {Iterator.<Node>}
 */
NodeList.prototype.values = function* () { yield new Node(); };

/**
 * @returns {Iterator.<number, Node>}
 */
NodeList.prototype.entries = function* () { yield [0, new Node()]; };

/**
 * @returns {Iterator.<number, Node>}
 */
NodeList.prototype[Symbol.iterator] = function* () { yield [0, new Node()]; };


/**
 * [Exposed=Window, LegacyUnenumerableNamedProperties]
 * interface HTMLCollection {
 *   readonly attribute unsigned long length;
 *   getter Element? item(unsigned long index);
 *   getter Element? namedItem(DOMString name);
 * };
 */
/**
 * [LegacyUnenumerableNamedProperties]
 * @constructor
 */
let HTMLCollection = function () {};
Window.prototype.HTMLCollection = HTMLCollection;

/**
 * @type {number}
 * @readonly
 */
HTMLCollection.prototype.length = 0;

/**
 * @getter
 * @param {number} index
 * @returns {?Element}
 */
HTMLCollection.prototype.item = function (index) { return null; };

/**
 * @getter
 * @param {string} name
 * @returns {?Element}
 */
HTMLCollection.prototype.namedItem = function (name) { return null; };


/**
 * [Constructor(MutationCallback callback)]
 * interface MutationObserver {
 *   void observe(Node target, optional MutationObserverInit options);
 *   void disconnect();
 *   sequence<MutationRecord> takeRecords();
 * };
 */
/**
 * @constructor
 * @param {MutationCallback} callback
 */
let MutationObserver = function (callback) {};

/**
 * @param {Node} target
 * @param {MutationObserverInit} [options]
 * @returns {void}
 */
MutationObserver.prototype.observe = function (target, options) { return ; };

/**
 * @returns {void}
 */
MutationObserver.prototype.disconnect = function () { return ; };

/**
 * @returns {MutationRecord[]}
 */
MutationObserver.prototype.takeRecords = function () { return [new MutationRecord()]; };


/**
 * callback MutationCallback = void (sequence<MutationRecord> mutations, MutationObserver observer);
 */
/**
 * @callback MutationCallback
 * @param {MutationRecord[]} mutations
 * @param {MutationObserver} observer
 * @returns {void}
 */
let MutationCallback = function (mutations, observer) { return ; };


/**
 * dictionary MutationObserverInit {
 *   boolean childList = false;
 *   boolean attributes;
 *   boolean characterData;
 *   boolean subtree = false;
 *   boolean attributeOldValue;
 *   boolean characterDataOldValue;
 *   sequence<DOMString> attributeFilter;
 * };
 */
/**
 * @typedef {Object} MutationObserverInit
 * @property {boolean} [childList=false]
 * @property {boolean} [attributes]
 * @property {boolean} [characterData]
 * @property {boolean} [subtree=false]
 * @property {boolean} [attributeOldValue]
 * @property {boolean} [characterDataOldValue]
 * @property {string[]} [attributeFilter]
 */


/**
 * [Exposed=Window]
 * interface MutationRecord {
 *   readonly attribute DOMString type;
 *   [SameObject] readonly attribute Node target;
 *   [SameObject] readonly attribute NodeList addedNodes;
 *   [SameObject] readonly attribute NodeList removedNodes;
 *   readonly attribute Node? previousSibling;
 *   readonly attribute Node? nextSibling;
 *   readonly attribute DOMString? attributeName;
 *   readonly attribute DOMString? attributeNamespace;
 *   readonly attribute DOMString? oldValue;
 * };
 */
/**
 * @constructor
 */
let MutationRecord = function () {};
Window.prototype.MutationRecord = MutationRecord;

/**
 * @type {string}
 * @readonly
 */
MutationRecord.prototype.type = "";

/**
 * [SameObject] -- It will always return the same object
 * @type {Node}
 * @readonly
 */
MutationRecord.prototype.target = new Node();

/**
 * [SameObject] -- It will always return the same object
 * @type {NodeList}
 * @readonly
 */
MutationRecord.prototype.addedNodes = new NodeList();

/**
 * [SameObject] -- It will always return the same object
 * @type {NodeList}
 * @readonly
 */
MutationRecord.prototype.removedNodes = new NodeList();

/**
 * @type {?Node}
 * @readonly
 */
MutationRecord.prototype.previousSibling = null;

/**
 * @type {?Node}
 * @readonly
 */
MutationRecord.prototype.nextSibling = null;

/**
 * @type {?string}
 * @readonly
 */
MutationRecord.prototype.attributeName = null;

/**
 * @type {?string}
 * @readonly
 */
MutationRecord.prototype.attributeNamespace = null;

/**
 * @type {?string}
 * @readonly
 */
MutationRecord.prototype.oldValue = null;


/**
 * [Exposed=Window]
 * interface Node : EventTarget {
 *   const unsigned short ELEMENT_NODE = 1;
 *   const unsigned short ATTRIBUTE_NODE = 2;
 *   const unsigned short TEXT_NODE = 3;
 *   const unsigned short CDATA_SECTION_NODE = 4;
 *   const unsigned short ENTITY_REFERENCE_NODE = 5; // historical
 *   const unsigned short ENTITY_NODE = 6; // historical
 *   const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
 *   const unsigned short COMMENT_NODE = 8;
 *   const unsigned short DOCUMENT_NODE = 9;
 *   const unsigned short DOCUMENT_TYPE_NODE = 10;
 *   const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
 *   const unsigned short NOTATION_NODE = 12; // historical
 *   readonly attribute unsigned short nodeType;
 *   readonly attribute DOMString nodeName;
 *   readonly attribute USVString baseURI;
 *   readonly attribute boolean isConnected;
 *   readonly attribute Document? ownerDocument;
 *   Node getRootNode(optional GetRootNodeOptions options);
 *   readonly attribute Node? parentNode;
 *   readonly attribute Element? parentElement;
 *   boolean hasChildNodes();
 *   [SameObject] readonly attribute NodeList childNodes;
 *   readonly attribute Node? firstChild;
 *   readonly attribute Node? lastChild;
 *   readonly attribute Node? previousSibling;
 *   readonly attribute Node? nextSibling;
 *   [CEReactions] attribute DOMString? nodeValue;
 *   [CEReactions] attribute DOMString? textContent;
 *   [CEReactions] void normalize();
 *   [CEReactions, NewObject] Node cloneNode(optional boolean deep = false);
 *   boolean isEqualNode(Node? otherNode);
 *   boolean isSameNode(Node? otherNode); // historical alias of ===
 *   const unsigned short DOCUMENT_POSITION_DISCONNECTED = 0x01;
 *   const unsigned short DOCUMENT_POSITION_PRECEDING = 0x02;
 *   const unsigned short DOCUMENT_POSITION_FOLLOWING = 0x04;
 *   const unsigned short DOCUMENT_POSITION_CONTAINS = 0x08;
 *   const unsigned short DOCUMENT_POSITION_CONTAINED_BY = 0x10;
 *   const unsigned short DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
 *   unsigned short compareDocumentPosition(Node other);
 *   boolean contains(Node? other);
 *   DOMString? lookupPrefix(DOMString? namespace);
 *   DOMString? lookupNamespaceURI(DOMString? prefix);
 *   boolean isDefaultNamespace(DOMString? namespace);
 *   [CEReactions] Node insertBefore(Node node, Node? child);
 *   [CEReactions] Node appendChild(Node node);
 *   [CEReactions] Node replaceChild(Node node, Node child);
 *   [CEReactions] Node removeChild(Node child);
 * };
 */
/**
 * @constructor
 */
let Node = function () {};
Node.prototype = new EventTarget();
Window.prototype.Node = Node;

/**
 * @type {number}
 */
Node.ELEMENT_NODE = 1

/**
 * @type {number}
 */
Node.ATTRIBUTE_NODE = 2

/**
 * @type {number}
 */
Node.TEXT_NODE = 3

/**
 * @type {number}
 */
Node.CDATA_SECTION_NODE = 4

/**
 * @type {number}
 */
Node.ENTITY_REFERENCE_NODE = 5

/**
 * @type {number}
 */
Node.ENTITY_NODE = 6

/**
 * @type {number}
 */
Node.PROCESSING_INSTRUCTION_NODE = 7

/**
 * @type {number}
 */
Node.COMMENT_NODE = 8

/**
 * @type {number}
 */
Node.DOCUMENT_NODE = 9

/**
 * @type {number}
 */
Node.DOCUMENT_TYPE_NODE = 10

/**
 * @type {number}
 */
Node.DOCUMENT_FRAGMENT_NODE = 11

/**
 * @type {number}
 */
Node.NOTATION_NODE = 12

/**
 * @type {number}
 * @readonly
 */
Node.prototype.nodeType = 0;

/**
 * @type {string}
 * @readonly
 */
Node.prototype.nodeName = "";

/**
 * @type {USVString}
 * @readonly
 */
Node.prototype.baseURI = new USVString();

/**
 * @type {boolean}
 * @readonly
 */
Node.prototype.isConnected = false;

/**
 * @type {?Document}
 * @readonly
 */
Node.prototype.ownerDocument = null;

/**
 * @param {GetRootNodeOptions} [options]
 * @returns {Node}
 */
Node.prototype.getRootNode = function (options) { return new Node(); };

/**
 * @type {?Node}
 * @readonly
 */
Node.prototype.parentNode = null;

/**
 * @type {?Element}
 * @readonly
 */
Node.prototype.parentElement = null;

/**
 * @returns {boolean}
 */
Node.prototype.hasChildNodes = function () { return false; };

/**
 * [SameObject] -- It will always return the same object
 * @type {NodeList}
 * @readonly
 */
Node.prototype.childNodes = new NodeList();

/**
 * @type {?Node}
 * @readonly
 */
Node.prototype.firstChild = null;

/**
 * @type {?Node}
 * @readonly
 */
Node.prototype.lastChild = null;

/**
 * @type {?Node}
 * @readonly
 */
Node.prototype.previousSibling = null;

/**
 * @type {?Node}
 * @readonly
 */
Node.prototype.nextSibling = null;

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @type {?string}
 */
Node.prototype.nodeValue = null;

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @type {?string}
 */
Node.prototype.textContent = null;

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @returns {void}
 */
Node.prototype.normalize = function () { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * [NewObject] -- Always returns new object.
 * @param {boolean} [deep=false]
 * @returns {Node}
 */
Node.prototype.cloneNode = function (deep) { return new Node(); };

/**
 * @param {?Node} otherNode
 * @returns {boolean}
 */
Node.prototype.isEqualNode = function (otherNode) { return false; };

/**
 * @param {?Node} otherNode
 * @returns {boolean}
 */
Node.prototype.isSameNode = function (otherNode) { return false; };

/**
 * @type {number}
 */
Node.DOCUMENT_POSITION_DISCONNECTED = 1

/**
 * @type {number}
 */
Node.DOCUMENT_POSITION_PRECEDING = 2

/**
 * @type {number}
 */
Node.DOCUMENT_POSITION_FOLLOWING = 4

/**
 * @type {number}
 */
Node.DOCUMENT_POSITION_CONTAINS = 8

/**
 * @type {number}
 */
Node.DOCUMENT_POSITION_CONTAINED_BY = 16

/**
 * @type {number}
 */
Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32

/**
 * @param {Node} other
 * @returns {number}
 */
Node.prototype.compareDocumentPosition = function (other) { return 0; };

/**
 * @param {?Node} other
 * @returns {boolean}
 */
Node.prototype.contains = function (other) { return false; };

/**
 * @param {?string} namespace
 * @returns {?string}
 */
Node.prototype.lookupPrefix = function (namespace) { return null; };

/**
 * @param {?string} prefix
 * @returns {?string}
 */
Node.prototype.lookupNamespaceURI = function (prefix) { return null; };

/**
 * @param {?string} namespace
 * @returns {boolean}
 */
Node.prototype.isDefaultNamespace = function (namespace) { return false; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Node} node
 * @param {?Node} child
 * @returns {Node}
 */
Node.prototype.insertBefore = function (node, child) { return new Node(); };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Node} node
 * @returns {Node}
 */
Node.prototype.appendChild = function (node) { return new Node(); };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Node} node
 * @param {Node} child
 * @returns {Node}
 */
Node.prototype.replaceChild = function (node, child) { return new Node(); };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Node} child
 * @returns {Node}
 */
Node.prototype.removeChild = function (child) { return new Node(); };


/**
 * dictionary GetRootNodeOptions {
 *   boolean composed = false;
 * };
 */
/**
 * @typedef {Object} GetRootNodeOptions
 * @property {boolean} [composed=false]
 */


/**
 * [Constructor,
 *  Exposed=Window]
 * interface Document : Node {
 *   [SameObject] readonly attribute DOMImplementation implementation;
 *   readonly attribute USVString URL;
 *   readonly attribute USVString documentURI;
 *   readonly attribute USVString origin;
 *   readonly attribute DOMString compatMode;
 *   readonly attribute DOMString characterSet;
 *   readonly attribute DOMString charset; // historical alias of .characterSet
 *   readonly attribute DOMString inputEncoding; // historical alias of .characterSet
 *   readonly attribute DOMString contentType;
 *   readonly attribute DocumentType? doctype;
 *   readonly attribute Element? documentElement;
 *   HTMLCollection getElementsByTagName(DOMString qualifiedName);
 *   HTMLCollection getElementsByTagNameNS(DOMString? namespace, DOMString localName);
 *   HTMLCollection getElementsByClassName(DOMString classNames);
 *   [NewObject] Element createElement(DOMString localName, optional ElementCreationOptions options);
 *   [NewObject] Element createElementNS(DOMString? namespace, DOMString qualifiedName, optional ElementCreationOptions options);
 *   [NewObject] DocumentFragment createDocumentFragment();
 *   [NewObject] Text createTextNode(DOMString data);
 *   [NewObject] CDATASection createCDATASection(DOMString data);
 *   [NewObject] Comment createComment(DOMString data);
 *   [NewObject] ProcessingInstruction createProcessingInstruction(DOMString target, DOMString data);
 *   [CEReactions, NewObject] Node importNode(Node node, optional boolean deep = false);
 *   [CEReactions] Node adoptNode(Node node);
 *   [NewObject] Attr createAttribute(DOMString localName);
 *   [NewObject] Attr createAttributeNS(DOMString? namespace, DOMString qualifiedName);
 *   [NewObject] Event createEvent(DOMString interface);
 *   [NewObject] Range createRange();
 *   // NodeFilter.SHOW_ALL = 0xFFFFFFFF
 *   [NewObject] NodeIterator createNodeIterator(Node root, optional unsigned long whatToShow = 0xFFFFFFFF, optional NodeFilter? filter = null);
 *   [NewObject] TreeWalker createTreeWalker(Node root, optional unsigned long whatToShow = 0xFFFFFFFF, optional NodeFilter? filter = null);
 * };
 */
/**
 * @constructor
 */
let Document = function () {};
Document.prototype = new Node();
Window.prototype.Document = Document;

/**
 * [SameObject] -- It will always return the same object
 * @type {DOMImplementation}
 * @readonly
 */
Document.prototype.implementation = new DOMImplementation();

/**
 * @type {USVString}
 * @readonly
 */
Document.prototype.URL = new USVString();

/**
 * @type {USVString}
 * @readonly
 */
Document.prototype.documentURI = new USVString();

/**
 * @type {USVString}
 * @readonly
 */
Document.prototype.origin = new USVString();

/**
 * @type {string}
 * @readonly
 */
Document.prototype.compatMode = "";

/**
 * @type {string}
 * @readonly
 */
Document.prototype.characterSet = "";

/**
 * @type {string}
 * @readonly
 */
Document.prototype.charset = "";

/**
 * @type {string}
 * @readonly
 */
Document.prototype.inputEncoding = "";

/**
 * @type {string}
 * @readonly
 */
Document.prototype.contentType = "";

/**
 * @type {?DocumentType}
 * @readonly
 */
Document.prototype.doctype = null;

/**
 * @type {?Element}
 * @readonly
 */
Document.prototype.documentElement = null;

/**
 * @param {string} qualifiedName
 * @returns {HTMLCollection}
 */
Document.prototype.getElementsByTagName = function (qualifiedName) { return new HTMLCollection(); };

/**
 * @param {?string} namespace
 * @param {string} localName
 * @returns {HTMLCollection}
 */
Document.prototype.getElementsByTagNameNS = function (namespace, localName) { return new HTMLCollection(); };

/**
 * @param {string} classNames
 * @returns {HTMLCollection}
 */
Document.prototype.getElementsByClassName = function (classNames) { return new HTMLCollection(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} localName
 * @param {ElementCreationOptions} [options]
 * @returns {Element}
 */
Document.prototype.createElement = function (localName, options) { return new Element(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {?string} namespace
 * @param {string} qualifiedName
 * @param {ElementCreationOptions} [options]
 * @returns {Element}
 */
Document.prototype.createElementNS = function (namespace, qualifiedName, options) { return new Element(); };

/**
 * [NewObject] -- Always returns new object.
 * @returns {DocumentFragment}
 */
Document.prototype.createDocumentFragment = function () { return new DocumentFragment(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} data
 * @returns {Text}
 */
Document.prototype.createTextNode = function (data) { return new Text(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} data
 * @returns {CDATASection}
 */
Document.prototype.createCDATASection = function (data) { return new CDATASection(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} data
 * @returns {Comment}
 */
Document.prototype.createComment = function (data) { return new Comment(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} target
 * @param {string} data
 * @returns {ProcessingInstruction}
 */
Document.prototype.createProcessingInstruction = function (target, data) { return new ProcessingInstruction(); };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * [NewObject] -- Always returns new object.
 * @param {Node} node
 * @param {boolean} [deep=false]
 * @returns {Node}
 */
Document.prototype.importNode = function (node, deep) { return new Node(); };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Node} node
 * @returns {Node}
 */
Document.prototype.adoptNode = function (node) { return new Node(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} localName
 * @returns {Attr}
 */
Document.prototype.createAttribute = function (localName) { return new Attr(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {?string} namespace
 * @param {string} qualifiedName
 * @returns {Attr}
 */
Document.prototype.createAttributeNS = function (namespace, qualifiedName) { return new Attr(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} interface
 * @returns {Event}
 */
Document.prototype.createEvent = function (interface) { return new Event(); };

/**
 * [NewObject] -- Always returns new object.
 * @returns {Range}
 */
Document.prototype.createRange = function () { return new Range(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {Node} root
 * @param {number} [whatToShow=4294967295]
 * @param {?NodeFilter} [filter=null]
 * @returns {NodeIterator}
 */
Document.prototype.createNodeIterator = function (root, whatToShow, filter) { return new NodeIterator(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {Node} root
 * @param {number} [whatToShow=4294967295]
 * @param {?NodeFilter} [filter=null]
 * @returns {TreeWalker}
 */
Document.prototype.createTreeWalker = function (root, whatToShow, filter) { return new TreeWalker(); };


/**
 * [Exposed=Window]
 * interface XMLDocument : Document {};
 */
/**
 * @constructor
 */
let XMLDocument = function () {};
XMLDocument.prototype = new Document();
Window.prototype.XMLDocument = XMLDocument;


/**
 * dictionary ElementCreationOptions {
 *   DOMString is;
 * };
 */
/**
 * @typedef {Object} ElementCreationOptions
 * @property {string} [is]
 */


