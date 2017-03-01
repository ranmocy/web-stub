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


