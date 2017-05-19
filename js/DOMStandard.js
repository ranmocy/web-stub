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
 *   void initEvent(DOMString type, optional boolean bubbles = false, optional boolean cancelable = false); // historical
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
 * @param {boolean} [bubbles=false]
 * @param {boolean} [cancelable=false]
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
 *   void initCustomEvent(DOMString type, optional boolean bubbles = false, optional boolean cancelable = false, optional any detail = null);
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
 * @param {boolean} [bubbles=false]
 * @param {boolean} [cancelable=false]
 * @param {*} [detail=null]
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
 * @type {string}
 * @readonly
 */
Node.prototype.baseURI = "";

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
 * @type {string}
 * @readonly
 */
Document.prototype.URL = "";

/**
 * @type {string}
 * @readonly
 */
Document.prototype.documentURI = "";

/**
 * @type {string}
 * @readonly
 */
Document.prototype.origin = "";

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


/**
 * [Exposed=Window]
 * interface DOMImplementation {
 *   [NewObject] DocumentType createDocumentType(DOMString qualifiedName, DOMString publicId, DOMString systemId);
 *   [NewObject] XMLDocument createDocument(DOMString? namespace, [TreatNullAs=EmptyString] DOMString qualifiedName, optional DocumentType? doctype = null);
 *   [NewObject] Document createHTMLDocument(optional DOMString title);
 *   boolean hasFeature(); // useless; always returns true
 * };
 */
/**
 * @constructor
 */
let DOMImplementation = function () {};
Window.prototype.DOMImplementation = DOMImplementation;

/**
 * [NewObject] -- Always returns new object.
 * @param {string} qualifiedName
 * @param {string} publicId
 * @param {string} systemId
 * @returns {DocumentType}
 */
DOMImplementation.prototype.createDocumentType = function (qualifiedName, publicId, systemId) { return new DocumentType(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {?string} namespace
 * @param {string} qualifiedName -- [TreatNullAs=EmptyString]
 * @param {?DocumentType} [doctype=null]
 * @returns {XMLDocument}
 */
DOMImplementation.prototype.createDocument = function (namespace, qualifiedName, doctype) { return new XMLDocument(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} [title]
 * @returns {Document}
 */
DOMImplementation.prototype.createHTMLDocument = function (title) { return new Document(); };

/**
 * @returns {boolean}
 */
DOMImplementation.prototype.hasFeature = function () { return false; };


/**
 * [Exposed=Window]
 * interface DocumentType : Node {
 *   readonly attribute DOMString name;
 *   readonly attribute DOMString publicId;
 *   readonly attribute DOMString systemId;
 * };
 */
/**
 * @constructor
 */
let DocumentType = function () {};
DocumentType.prototype = new Node();
Window.prototype.DocumentType = DocumentType;

/**
 * @type {string}
 * @readonly
 */
DocumentType.prototype.name = "";

/**
 * @type {string}
 * @readonly
 */
DocumentType.prototype.publicId = "";

/**
 * @type {string}
 * @readonly
 */
DocumentType.prototype.systemId = "";


/**
 * [Constructor,
 *  Exposed=Window]
 * interface DocumentFragment : Node {
 * };
 */
/**
 * @constructor
 */
let DocumentFragment = function () {};
DocumentFragment.prototype = new Node();
Window.prototype.DocumentFragment = DocumentFragment;


/**
 * [Exposed=Window]
 * interface ShadowRoot : DocumentFragment {
 *   readonly attribute ShadowRootMode mode;
 *   readonly attribute Element host;
 * };
 */
/**
 * @constructor
 */
let ShadowRoot = function () {};
ShadowRoot.prototype = new DocumentFragment();
Window.prototype.ShadowRoot = ShadowRoot;

/**
 * @type {ShadowRootMode}
 * @readonly
 */
ShadowRoot.prototype.mode = new ShadowRootMode();

/**
 * @type {Element}
 * @readonly
 */
ShadowRoot.prototype.host = new Element();


/**
 * enum ShadowRootMode { "open", "closed" };
 */
/**
 * @typedef {"open"|"closed"} ShadowRootMode
 */


/**
 * [Exposed=Window]
 * interface Element : Node {
 *   readonly attribute DOMString? namespaceURI;
 *   readonly attribute DOMString? prefix;
 *   readonly attribute DOMString localName;
 *   readonly attribute DOMString tagName;
 *   [CEReactions] attribute DOMString id;
 *   [CEReactions] attribute DOMString className;
 *   [SameObject, PutForwards=value] readonly attribute DOMTokenList classList;
 *   [CEReactions, Unscopable] attribute DOMString slot;
 *   boolean hasAttributes();
 *   [SameObject] readonly attribute NamedNodeMap attributes;
 *   sequence<DOMString> getAttributeNames();
 *   DOMString? getAttribute(DOMString qualifiedName);
 *   DOMString? getAttributeNS(DOMString? namespace, DOMString localName);
 *   [CEReactions] void setAttribute(DOMString qualifiedName, DOMString value);
 *   [CEReactions] void setAttributeNS(DOMString? namespace, DOMString qualifiedName, DOMString value);
 *   [CEReactions] void removeAttribute(DOMString qualifiedName);
 *   [CEReactions] void removeAttributeNS(DOMString? namespace, DOMString localName);
 *   boolean hasAttribute(DOMString qualifiedName);
 *   boolean hasAttributeNS(DOMString? namespace, DOMString localName);
 *   Attr? getAttributeNode(DOMString qualifiedName);
 *   Attr? getAttributeNodeNS(DOMString? namespace, DOMString localName);
 *   [CEReactions] Attr? setAttributeNode(Attr attr);
 *   [CEReactions] Attr? setAttributeNodeNS(Attr attr);
 *   [CEReactions] Attr removeAttributeNode(Attr attr);
 *   ShadowRoot attachShadow(ShadowRootInit init);
 *   readonly attribute ShadowRoot? shadowRoot;
 *   Element? closest(DOMString selectors);
 *   boolean matches(DOMString selectors);
 *   boolean webkitMatchesSelector(DOMString selectors); // historical alias of .matches
 *   HTMLCollection getElementsByTagName(DOMString qualifiedName);
 *   HTMLCollection getElementsByTagNameNS(DOMString? namespace, DOMString localName);
 *   HTMLCollection getElementsByClassName(DOMString classNames);
 *   [CEReactions] Element? insertAdjacentElement(DOMString where, Element element); // historical
 *   void insertAdjacentText(DOMString where, DOMString data); // historical
 * };
 */
/**
 * @constructor
 */
let Element = function () {};
Element.prototype = new Node();
Window.prototype.Element = Element;

/**
 * @type {?string}
 * @readonly
 */
Element.prototype.namespaceURI = null;

/**
 * @type {?string}
 * @readonly
 */
Element.prototype.prefix = null;

/**
 * @type {string}
 * @readonly
 */
Element.prototype.localName = "";

/**
 * @type {string}
 * @readonly
 */
Element.prototype.tagName = "";

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @type {string}
 */
Element.prototype.id = "";

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @type {string}
 */
Element.prototype.className = "";

/**
 * [SameObject] -- It will always return the same object
 * [PutForwards=value] -- The value assigned to this attribute will be forwarded to its property "value".
 * @type {DOMTokenList}
 * @readonly
 */
Element.prototype.classList = new DOMTokenList();

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * [Unscopable] -- Implementation won't include this property name with it as its base object.
 * @type {string}
 */
Element.prototype.slot = "";

/**
 * @returns {boolean}
 */
Element.prototype.hasAttributes = function () { return false; };

/**
 * [SameObject] -- It will always return the same object
 * @type {NamedNodeMap}
 * @readonly
 */
Element.prototype.attributes = new NamedNodeMap();

/**
 * @returns {string[]}
 */
Element.prototype.getAttributeNames = function () { return [""]; };

/**
 * @param {string} qualifiedName
 * @returns {?string}
 */
Element.prototype.getAttribute = function (qualifiedName) { return null; };

/**
 * @param {?string} namespace
 * @param {string} localName
 * @returns {?string}
 */
Element.prototype.getAttributeNS = function (namespace, localName) { return null; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {string} qualifiedName
 * @param {string} value
 * @returns {void}
 */
Element.prototype.setAttribute = function (qualifiedName, value) { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {?string} namespace
 * @param {string} qualifiedName
 * @param {string} value
 * @returns {void}
 */
Element.prototype.setAttributeNS = function (namespace, qualifiedName, value) { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {string} qualifiedName
 * @returns {void}
 */
Element.prototype.removeAttribute = function (qualifiedName) { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {?string} namespace
 * @param {string} localName
 * @returns {void}
 */
Element.prototype.removeAttributeNS = function (namespace, localName) { return ; };

/**
 * @param {string} qualifiedName
 * @returns {boolean}
 */
Element.prototype.hasAttribute = function (qualifiedName) { return false; };

/**
 * @param {?string} namespace
 * @param {string} localName
 * @returns {boolean}
 */
Element.prototype.hasAttributeNS = function (namespace, localName) { return false; };

/**
 * @param {string} qualifiedName
 * @returns {?Attr}
 */
Element.prototype.getAttributeNode = function (qualifiedName) { return null; };

/**
 * @param {?string} namespace
 * @param {string} localName
 * @returns {?Attr}
 */
Element.prototype.getAttributeNodeNS = function (namespace, localName) { return null; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Attr} attr
 * @returns {?Attr}
 */
Element.prototype.setAttributeNode = function (attr) { return null; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Attr} attr
 * @returns {?Attr}
 */
Element.prototype.setAttributeNodeNS = function (attr) { return null; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Attr} attr
 * @returns {Attr}
 */
Element.prototype.removeAttributeNode = function (attr) { return new Attr(); };

/**
 * @param {ShadowRootInit} init
 * @returns {ShadowRoot}
 */
Element.prototype.attachShadow = function (init) { return new ShadowRoot(); };

/**
 * @type {?ShadowRoot}
 * @readonly
 */
Element.prototype.shadowRoot = null;

/**
 * @param {string} selectors
 * @returns {?Element}
 */
Element.prototype.closest = function (selectors) { return null; };

/**
 * @param {string} selectors
 * @returns {boolean}
 */
Element.prototype.matches = function (selectors) { return false; };

/**
 * @param {string} selectors
 * @returns {boolean}
 */
Element.prototype.webkitMatchesSelector = function (selectors) { return false; };

/**
 * @param {string} qualifiedName
 * @returns {HTMLCollection}
 */
Element.prototype.getElementsByTagName = function (qualifiedName) { return new HTMLCollection(); };

/**
 * @param {?string} namespace
 * @param {string} localName
 * @returns {HTMLCollection}
 */
Element.prototype.getElementsByTagNameNS = function (namespace, localName) { return new HTMLCollection(); };

/**
 * @param {string} classNames
 * @returns {HTMLCollection}
 */
Element.prototype.getElementsByClassName = function (classNames) { return new HTMLCollection(); };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {string} where
 * @param {Element} element
 * @returns {?Element}
 */
Element.prototype.insertAdjacentElement = function (where, element) { return null; };

/**
 * @param {string} where
 * @param {string} data
 * @returns {void}
 */
Element.prototype.insertAdjacentText = function (where, data) { return ; };


/**
 * dictionary ShadowRootInit {
 *   required ShadowRootMode mode;
 * };
 */
/**
 * @typedef {Object} ShadowRootInit
 * @property {ShadowRootMode} mode
 */


/**
 * [Exposed=Window, LegacyUnenumerableNamedProperties]
 * interface NamedNodeMap {
 *   readonly attribute unsigned long length;
 *   getter Attr? item(unsigned long index);
 *   getter Attr? getNamedItem(DOMString qualifiedName);
 *   Attr? getNamedItemNS(DOMString? namespace, DOMString localName);
 *   [CEReactions] Attr? setNamedItem(Attr attr);
 *   [CEReactions] Attr? setNamedItemNS(Attr attr);
 *   [CEReactions] Attr removeNamedItem(DOMString qualifiedName);
 *   [CEReactions] Attr removeNamedItemNS(DOMString? namespace, DOMString localName);
 * };
 */
/**
 * [LegacyUnenumerableNamedProperties]
 * @constructor
 */
let NamedNodeMap = function () {};
Window.prototype.NamedNodeMap = NamedNodeMap;

/**
 * @type {number}
 * @readonly
 */
NamedNodeMap.prototype.length = 0;

/**
 * @getter
 * @param {number} index
 * @returns {?Attr}
 */
NamedNodeMap.prototype.item = function (index) { return null; };

/**
 * @getter
 * @param {string} qualifiedName
 * @returns {?Attr}
 */
NamedNodeMap.prototype.getNamedItem = function (qualifiedName) { return null; };

/**
 * @param {?string} namespace
 * @param {string} localName
 * @returns {?Attr}
 */
NamedNodeMap.prototype.getNamedItemNS = function (namespace, localName) { return null; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Attr} attr
 * @returns {?Attr}
 */
NamedNodeMap.prototype.setNamedItem = function (attr) { return null; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Attr} attr
 * @returns {?Attr}
 */
NamedNodeMap.prototype.setNamedItemNS = function (attr) { return null; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {string} qualifiedName
 * @returns {Attr}
 */
NamedNodeMap.prototype.removeNamedItem = function (qualifiedName) { return new Attr(); };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {?string} namespace
 * @param {string} localName
 * @returns {Attr}
 */
NamedNodeMap.prototype.removeNamedItemNS = function (namespace, localName) { return new Attr(); };


/**
 * [Exposed=Window]
 * interface Attr : Node {
 *   readonly attribute DOMString? namespaceURI;
 *   readonly attribute DOMString? prefix;
 *   readonly attribute DOMString localName;
 *   readonly attribute DOMString name;
 *   [CEReactions] attribute DOMString value;
 *   readonly attribute Element? ownerElement;
 *   readonly attribute boolean specified; // useless; always returns true
 * };
 */
/**
 * @constructor
 */
let Attr = function () {};
Attr.prototype = new Node();
Window.prototype.Attr = Attr;

/**
 * @type {?string}
 * @readonly
 */
Attr.prototype.namespaceURI = null;

/**
 * @type {?string}
 * @readonly
 */
Attr.prototype.prefix = null;

/**
 * @type {string}
 * @readonly
 */
Attr.prototype.localName = "";

/**
 * @type {string}
 * @readonly
 */
Attr.prototype.name = "";

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @type {string}
 */
Attr.prototype.value = "";

/**
 * @type {?Element}
 * @readonly
 */
Attr.prototype.ownerElement = null;

/**
 * @type {boolean}
 * @readonly
 */
Attr.prototype.specified = false;


/**
 * [Exposed=Window]
 * interface CharacterData : Node {
 *   [TreatNullAs=EmptyString] attribute DOMString data;
 *   readonly attribute unsigned long length;
 *   DOMString substringData(unsigned long offset, unsigned long count);
 *   void appendData(DOMString data);
 *   void insertData(unsigned long offset, DOMString data);
 *   void deleteData(unsigned long offset, unsigned long count);
 *   void replaceData(unsigned long offset, unsigned long count, DOMString data);
 * };
 */
/**
 * @constructor
 */
let CharacterData = function () {};
CharacterData.prototype = new Node();
Window.prototype.CharacterData = CharacterData;

/**
 * [TreatNullAs=EmptyString]
 * @type {string}
 */
CharacterData.prototype.data = "";

/**
 * @type {number}
 * @readonly
 */
CharacterData.prototype.length = 0;

/**
 * @param {number} offset
 * @param {number} count
 * @returns {string}
 */
CharacterData.prototype.substringData = function (offset, count) { return ""; };

/**
 * @param {string} data
 * @returns {void}
 */
CharacterData.prototype.appendData = function (data) { return ; };

/**
 * @param {number} offset
 * @param {string} data
 * @returns {void}
 */
CharacterData.prototype.insertData = function (offset, data) { return ; };

/**
 * @param {number} offset
 * @param {number} count
 * @returns {void}
 */
CharacterData.prototype.deleteData = function (offset, count) { return ; };

/**
 * @param {number} offset
 * @param {number} count
 * @param {string} data
 * @returns {void}
 */
CharacterData.prototype.replaceData = function (offset, count, data) { return ; };


/**
 * [Constructor(optional DOMString data = ""),
 *  Exposed=Window]
 * interface Text : CharacterData {
 *   [NewObject] Text splitText(unsigned long offset);
 *   readonly attribute DOMString wholeText;
 * };
 */
/**
 * @constructor
 * @param {string} [data='']
 */
let Text = function (data) {};
Text.prototype = new CharacterData();
Window.prototype.Text = Text;

/**
 * [NewObject] -- Always returns new object.
 * @param {number} offset
 * @returns {Text}
 */
Text.prototype.splitText = function (offset) { return new Text(); };

/**
 * @type {string}
 * @readonly
 */
Text.prototype.wholeText = "";


/**
 * [Exposed=Window]
 * interface CDATASection : Text {
 * };
 */
/**
 * @constructor
 */
let CDATASection = function () {};
CDATASection.prototype = new Text();
Window.prototype.CDATASection = CDATASection;


/**
 * [Exposed=Window]
 * interface ProcessingInstruction : CharacterData {
 *   readonly attribute DOMString target;
 * };
 */
/**
 * @constructor
 */
let ProcessingInstruction = function () {};
ProcessingInstruction.prototype = new CharacterData();
Window.prototype.ProcessingInstruction = ProcessingInstruction;

/**
 * @type {string}
 * @readonly
 */
ProcessingInstruction.prototype.target = "";


/**
 * [Constructor(optional DOMString data = ""),
 *  Exposed=Window]
 * interface Comment : CharacterData {
 * };
 */
/**
 * @constructor
 * @param {string} [data='']
 */
let Comment = function (data) {};
Comment.prototype = new CharacterData();
Window.prototype.Comment = Comment;


/**
 * [Constructor,
 *  Exposed=Window]
 * interface Range {
 *   readonly attribute Node startContainer;
 *   readonly attribute unsigned long startOffset;
 *   readonly attribute Node endContainer;
 *   readonly attribute unsigned long endOffset;
 *   readonly attribute boolean collapsed;
 *   readonly attribute Node commonAncestorContainer;
 *   void setStart(Node node, unsigned long offset);
 *   void setEnd(Node node, unsigned long offset);
 *   void setStartBefore(Node node);
 *   void setStartAfter(Node node);
 *   void setEndBefore(Node node);
 *   void setEndAfter(Node node);
 *   void collapse(optional boolean toStart = false);
 *   void selectNode(Node node);
 *   void selectNodeContents(Node node);
 *   const unsigned short START_TO_START = 0;
 *   const unsigned short START_TO_END = 1;
 *   const unsigned short END_TO_END = 2;
 *   const unsigned short END_TO_START = 3;
 *   short compareBoundaryPoints(unsigned short how, Range sourceRange);
 *   [CEReactions] void deleteContents();
 *   [CEReactions, NewObject] DocumentFragment extractContents();
 *   [CEReactions, NewObject] DocumentFragment cloneContents();
 *   [CEReactions] void insertNode(Node node);
 *   [CEReactions] void surroundContents(Node newParent);
 *   [NewObject] Range cloneRange();
 *   void detach();
 *   boolean isPointInRange(Node node, unsigned long offset);
 *   short comparePoint(Node node, unsigned long offset);
 *   boolean intersectsNode(Node node);
 *   stringifier;
 * };
 */
/**
 * @constructor
 */
let Range = function () {};
Window.prototype.Range = Range;

/**
 * @type {Node}
 * @readonly
 */
Range.prototype.startContainer = new Node();

/**
 * @type {number}
 * @readonly
 */
Range.prototype.startOffset = 0;

/**
 * @type {Node}
 * @readonly
 */
Range.prototype.endContainer = new Node();

/**
 * @type {number}
 * @readonly
 */
Range.prototype.endOffset = 0;

/**
 * @type {boolean}
 * @readonly
 */
Range.prototype.collapsed = false;

/**
 * @type {Node}
 * @readonly
 */
Range.prototype.commonAncestorContainer = new Node();

/**
 * @param {Node} node
 * @param {number} offset
 * @returns {void}
 */
Range.prototype.setStart = function (node, offset) { return ; };

/**
 * @param {Node} node
 * @param {number} offset
 * @returns {void}
 */
Range.prototype.setEnd = function (node, offset) { return ; };

/**
 * @param {Node} node
 * @returns {void}
 */
Range.prototype.setStartBefore = function (node) { return ; };

/**
 * @param {Node} node
 * @returns {void}
 */
Range.prototype.setStartAfter = function (node) { return ; };

/**
 * @param {Node} node
 * @returns {void}
 */
Range.prototype.setEndBefore = function (node) { return ; };

/**
 * @param {Node} node
 * @returns {void}
 */
Range.prototype.setEndAfter = function (node) { return ; };

/**
 * @param {boolean} [toStart=false]
 * @returns {void}
 */
Range.prototype.collapse = function (toStart) { return ; };

/**
 * @param {Node} node
 * @returns {void}
 */
Range.prototype.selectNode = function (node) { return ; };

/**
 * @param {Node} node
 * @returns {void}
 */
Range.prototype.selectNodeContents = function (node) { return ; };

/**
 * @type {number}
 */
Range.START_TO_START = 0

/**
 * @type {number}
 */
Range.START_TO_END = 1

/**
 * @type {number}
 */
Range.END_TO_END = 2

/**
 * @type {number}
 */
Range.END_TO_START = 3

/**
 * @param {number} how
 * @param {Range} sourceRange
 * @returns {number}
 */
Range.prototype.compareBoundaryPoints = function (how, sourceRange) { return 0; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @returns {void}
 */
Range.prototype.deleteContents = function () { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * [NewObject] -- Always returns new object.
 * @returns {DocumentFragment}
 */
Range.prototype.extractContents = function () { return new DocumentFragment(); };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * [NewObject] -- Always returns new object.
 * @returns {DocumentFragment}
 */
Range.prototype.cloneContents = function () { return new DocumentFragment(); };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Node} node
 * @returns {void}
 */
Range.prototype.insertNode = function (node) { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {Node} newParent
 * @returns {void}
 */
Range.prototype.surroundContents = function (newParent) { return ; };

/**
 * [NewObject] -- Always returns new object.
 * @returns {Range}
 */
Range.prototype.cloneRange = function () { return new Range(); };

/**
 * @returns {void}
 */
Range.prototype.detach = function () { return ; };

/**
 * @param {Node} node
 * @param {number} offset
 * @returns {boolean}
 */
Range.prototype.isPointInRange = function (node, offset) { return false; };

/**
 * @param {Node} node
 * @param {number} offset
 * @returns {number}
 */
Range.prototype.comparePoint = function (node, offset) { return 0; };

/**
 * @param {Node} node
 * @returns {boolean}
 */
Range.prototype.intersectsNode = function (node) { return false; };

/**
 * @returns {string}
 */
Range.prototype.toString = function () { return ""; };


/**
 * [Exposed=Window]
 * interface NodeIterator {
 *   [SameObject] readonly attribute Node root;
 *   readonly attribute Node referenceNode;
 *   readonly attribute boolean pointerBeforeReferenceNode;
 *   readonly attribute unsigned long whatToShow;
 *   readonly attribute NodeFilter? filter;
 *   Node? nextNode();
 *   Node? previousNode();
 *   void detach();
 * };
 */
/**
 * @constructor
 */
let NodeIterator = function () {};
Window.prototype.NodeIterator = NodeIterator;

/**
 * [SameObject] -- It will always return the same object
 * @type {Node}
 * @readonly
 */
NodeIterator.prototype.root = new Node();

/**
 * @type {Node}
 * @readonly
 */
NodeIterator.prototype.referenceNode = new Node();

/**
 * @type {boolean}
 * @readonly
 */
NodeIterator.prototype.pointerBeforeReferenceNode = false;

/**
 * @type {number}
 * @readonly
 */
NodeIterator.prototype.whatToShow = 0;

/**
 * @type {?NodeFilter}
 * @readonly
 */
NodeIterator.prototype.filter = null;

/**
 * @returns {?Node}
 */
NodeIterator.prototype.nextNode = function () { return null; };

/**
 * @returns {?Node}
 */
NodeIterator.prototype.previousNode = function () { return null; };

/**
 * @returns {void}
 */
NodeIterator.prototype.detach = function () { return ; };


/**
 * [Exposed=Window]
 * interface TreeWalker {
 *   [SameObject] readonly attribute Node root;
 *   readonly attribute unsigned long whatToShow;
 *   readonly attribute NodeFilter? filter;
 *            attribute Node currentNode;
 *   Node? parentNode();
 *   Node? firstChild();
 *   Node? lastChild();
 *   Node? previousSibling();
 *   Node? nextSibling();
 *   Node? previousNode();
 *   Node? nextNode();
 * };
 */
/**
 * @constructor
 */
let TreeWalker = function () {};
Window.prototype.TreeWalker = TreeWalker;

/**
 * [SameObject] -- It will always return the same object
 * @type {Node}
 * @readonly
 */
TreeWalker.prototype.root = new Node();

/**
 * @type {number}
 * @readonly
 */
TreeWalker.prototype.whatToShow = 0;

/**
 * @type {?NodeFilter}
 * @readonly
 */
TreeWalker.prototype.filter = null;

/**
 * @type {Node}
 */
TreeWalker.prototype.currentNode = new Node();

/**
 * @returns {?Node}
 */
TreeWalker.prototype.parentNode = function () { return null; };

/**
 * @returns {?Node}
 */
TreeWalker.prototype.firstChild = function () { return null; };

/**
 * @returns {?Node}
 */
TreeWalker.prototype.lastChild = function () { return null; };

/**
 * @returns {?Node}
 */
TreeWalker.prototype.previousSibling = function () { return null; };

/**
 * @returns {?Node}
 */
TreeWalker.prototype.nextSibling = function () { return null; };

/**
 * @returns {?Node}
 */
TreeWalker.prototype.previousNode = function () { return null; };

/**
 * @returns {?Node}
 */
TreeWalker.prototype.nextNode = function () { return null; };


/**
 * [Exposed=Window]
 * callback interface NodeFilter {
 *   // Constants for acceptNode()
 *   const unsigned short FILTER_ACCEPT = 1;
 *   const unsigned short FILTER_REJECT = 2;
 *   const unsigned short FILTER_SKIP = 3;
 *   // Constants for whatToShow
 *   const unsigned long SHOW_ALL = 0xFFFFFFFF;
 *   const unsigned long SHOW_ELEMENT = 0x1;
 *   const unsigned long SHOW_ATTRIBUTE = 0x2;
 *   const unsigned long SHOW_TEXT = 0x4;
 *   const unsigned long SHOW_CDATA_SECTION = 0x8;
 *   const unsigned long SHOW_ENTITY_REFERENCE = 0x10; // historical
 *   const unsigned long SHOW_ENTITY = 0x20; // historical
 *   const unsigned long SHOW_PROCESSING_INSTRUCTION = 0x40;
 *   const unsigned long SHOW_COMMENT = 0x80;
 *   const unsigned long SHOW_DOCUMENT = 0x100;
 *   const unsigned long SHOW_DOCUMENT_TYPE = 0x200;
 *   const unsigned long SHOW_DOCUMENT_FRAGMENT = 0x400;
 *   const unsigned long SHOW_NOTATION = 0x800; // historical
 *   unsigned short acceptNode(Node node);
 * };
 */
/**
 * @constructor
 */
let NodeFilter = function () {};
Window.prototype.NodeFilter = NodeFilter;

/**
 * @type {number}
 */
NodeFilter.FILTER_ACCEPT = 1

/**
 * @type {number}
 */
NodeFilter.FILTER_REJECT = 2

/**
 * @type {number}
 */
NodeFilter.FILTER_SKIP = 3

/**
 * @type {number}
 */
NodeFilter.SHOW_ALL = 4294967295

/**
 * @type {number}
 */
NodeFilter.SHOW_ELEMENT = 1

/**
 * @type {number}
 */
NodeFilter.SHOW_ATTRIBUTE = 2

/**
 * @type {number}
 */
NodeFilter.SHOW_TEXT = 4

/**
 * @type {number}
 */
NodeFilter.SHOW_CDATA_SECTION = 8

/**
 * @type {number}
 */
NodeFilter.SHOW_ENTITY_REFERENCE = 16

/**
 * @type {number}
 */
NodeFilter.SHOW_ENTITY = 32

/**
 * @type {number}
 */
NodeFilter.SHOW_PROCESSING_INSTRUCTION = 64

/**
 * @type {number}
 */
NodeFilter.SHOW_COMMENT = 128

/**
 * @type {number}
 */
NodeFilter.SHOW_DOCUMENT = 256

/**
 * @type {number}
 */
NodeFilter.SHOW_DOCUMENT_TYPE = 512

/**
 * @type {number}
 */
NodeFilter.SHOW_DOCUMENT_FRAGMENT = 1024

/**
 * @type {number}
 */
NodeFilter.SHOW_NOTATION = 2048

/**
 * @param {Node} node
 * @returns {number}
 */
NodeFilter.prototype.acceptNode = function (node) { return 0; };


/**
 * interface DOMTokenList {
 *   readonly attribute unsigned long length;
 *   getter DOMString? item(unsigned long index);
 *   boolean contains(DOMString token);
 *   [CEReactions] void add(DOMString... tokens);
 *   [CEReactions] void remove(DOMString... tokens);
 *   [CEReactions] boolean toggle(DOMString token, optional boolean force);
 *   [CEReactions] void replace(DOMString token, DOMString newToken);
 *   boolean supports(DOMString token);
 *   [CEReactions] stringifier attribute DOMString value;
 *   iterable<DOMString>;
 * };
 */
/**
 * @constructor
 */
let DOMTokenList = function () {};

/**
 * @type {number}
 * @readonly
 */
DOMTokenList.prototype.length = 0;

/**
 * @getter
 * @param {number} index
 * @returns {?string}
 */
DOMTokenList.prototype.item = function (index) { return null; };

/**
 * @param {string} token
 * @returns {boolean}
 */
DOMTokenList.prototype.contains = function (token) { return false; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {...string} tokens
 * @returns {void}
 */
DOMTokenList.prototype.add = function (tokens) { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {...string} tokens
 * @returns {void}
 */
DOMTokenList.prototype.remove = function (tokens) { return ; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {string} token
 * @param {boolean} [force]
 * @returns {boolean}
 */
DOMTokenList.prototype.toggle = function (token, force) { return false; };

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {string} token
 * @param {string} newToken
 * @returns {void}
 */
DOMTokenList.prototype.replace = function (token, newToken) { return ; };

/**
 * @param {string} token
 * @returns {boolean}
 */
DOMTokenList.prototype.supports = function (token) { return false; };

/**
 * [stringifier]
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @type {string}
 */
DOMTokenList.prototype.value = "";

/**
 * @returns {Iterator.<number>}
 */
DOMTokenList.prototype.keys = function* () { yield 0; };

/**
 * @returns {Iterator.<string>}
 */
DOMTokenList.prototype.values = function* () { yield ""; };

/**
 * @returns {Iterator.<number, string>}
 */
DOMTokenList.prototype.entries = function* () { yield [0, ""]; };

/**
 * @returns {Iterator.<number, string>}
 */
DOMTokenList.prototype[Symbol.iterator] = function* () { yield [0, ""]; };


