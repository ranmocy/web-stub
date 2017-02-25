/**
 * [Constructor(DOMString type, optional ErrorEventInit eventInitDict), Exposed=(Window, Worker)]
 * interface ErrorEvent : Event {
 *   readonly attribute DOMString message;
 *   readonly attribute DOMString filename;
 *   readonly attribute unsigned long lineno;
 *   readonly attribute unsigned long colno;
 *   readonly attribute any error;
 * };
 */
/**
 * @constructor
 * @param {string} type
 * @param {ErrorEventInit} [eventInitDict]
 */
let ErrorEvent = function (type, eventInitDict) {};
ErrorEvent.prototype = new Event();
Window.prototype.ErrorEvent = ErrorEvent;
Worker.prototype.ErrorEvent = ErrorEvent;

/**
 * @type {string}
 * @readonly
 */
ErrorEvent.prototype.message = "";

/**
 * @type {string}
 * @readonly
 */
ErrorEvent.prototype.filename = "";

/**
 * @type {number}
 * @readonly
 */
ErrorEvent.prototype.lineno = 0;

/**
 * @type {number}
 * @readonly
 */
ErrorEvent.prototype.colno = 0;

/**
 * @type {*}
 * @readonly
 */
ErrorEvent.prototype.error = {};


/**
 * dictionary ErrorEventInit : EventInit {
 *   DOMString message = "";
 *   DOMString filename = "";
 *   unsigned long lineno = 0;
 *   unsigned long colno = 0;
 *   any error = null;
 * };
 */
/**
 * @typedef {Object} ErrorEventInit
 * @property {string} [message='']
 * @property {string} [filename='']
 * @property {number} [lineno=0]
 * @property {number} [colno=0]
 * @property {*} [error=null]
 */


/**
 * [Constructor(DOMString type, PromiseRejectionEventInit eventInitDict), Exposed=(Window,Worker)]
 * interface PromiseRejectionEvent : Event {
 *   readonly attribute Promise<any> promise;
 *   readonly attribute any reason;
 * };
 */
/**
 * @constructor
 * @param {string} type
 * @param {PromiseRejectionEventInit} eventInitDict
 */
let PromiseRejectionEvent = function (type, eventInitDict) {};
PromiseRejectionEvent.prototype = new Event();
Window.prototype.PromiseRejectionEvent = PromiseRejectionEvent;
Worker.prototype.PromiseRejectionEvent = PromiseRejectionEvent;

/**
 * @type {Promise.<*>}
 * @readonly
 */
PromiseRejectionEvent.prototype.promise = {};

/**
 * @type {*}
 * @readonly
 */
PromiseRejectionEvent.prototype.reason = {};


/**
 * dictionary PromiseRejectionEventInit : EventInit {
 *   required Promise<any> promise;
 *   any reason;
 * };
 */
/**
 * @typedef {Object} PromiseRejectionEventInit
 * @property {Promise.<*>} promise
 * @property {*} [reason]
 */


/**
 * [TreatNonObjectAsNull]
 * callback EventHandlerNonNull = any (Event event);
 */
/**
 * [TreatNonObjectAsNull]
 * @callback EventHandlerNonNull
 * @param {Event} event
 * @returns {*}
 */
let EventHandlerNonNull = function (event) { return {}; };


/**
 * typedef EventHandlerNonNull? EventHandler;
 */
/**
 * @typedef {?EventHandlerNonNull} EventHandler
 */


/**
 * [TreatNonObjectAsNull]
 * callback OnErrorEventHandlerNonNull = any ((Event or DOMString) event, optional DOMString source, optional unsigned long lineno, optional unsigned long column, optional any error);
 */
/**
 * [TreatNonObjectAsNull]
 * @callback OnErrorEventHandlerNonNull
 * @param {(Event|string)} event
 * @param {string} [source]
 * @param {number} [lineno]
 * @param {number} [column]
 * @param {*} [error]
 * @returns {*}
 */
let OnErrorEventHandlerNonNull = function (event, source, lineno, column, error) { return {}; };


/**
 * typedef OnErrorEventHandlerNonNull? OnErrorEventHandler;
 */
/**
 * @typedef {?OnErrorEventHandlerNonNull} OnErrorEventHandler
 */


/**
 * [TreatNonObjectAsNull]
 * callback OnBeforeUnloadEventHandlerNonNull = DOMString? (Event event);
 */
/**
 * [TreatNonObjectAsNull]
 * @callback OnBeforeUnloadEventHandlerNonNull
 * @param {Event} event
 * @returns {?string}
 */
let OnBeforeUnloadEventHandlerNonNull = function (event) { return null; };


/**
 * typedef OnBeforeUnloadEventHandlerNonNull? OnBeforeUnloadEventHandler;
 */
/**
 * @typedef {?OnBeforeUnloadEventHandlerNonNull} OnBeforeUnloadEventHandler
 */


/**
 * [NoInterfaceObject]
 * interface GlobalEventHandlers {
 *   attribute EventHandler onabort;
 *   attribute EventHandler onblur;
 *   attribute EventHandler oncancel;
 *   attribute EventHandler oncanplay;
 *   attribute EventHandler oncanplaythrough;
 *   attribute EventHandler onchange;
 *   attribute EventHandler onclick;
 *   attribute EventHandler onclose;
 *   attribute EventHandler oncontextmenu;
 *   attribute EventHandler oncuechange;
 *   attribute EventHandler ondblclick;
 *   attribute EventHandler ondrag;
 *   attribute EventHandler ondragend;
 *   attribute EventHandler ondragenter;
 *   attribute EventHandler ondragexit;
 *   attribute EventHandler ondragleave;
 *   attribute EventHandler ondragover;
 *   attribute EventHandler ondragstart;
 *   attribute EventHandler ondrop;
 *   attribute EventHandler ondurationchange;
 *   attribute EventHandler onemptied;
 *   attribute EventHandler onended;
 *   attribute OnErrorEventHandler onerror;
 *   attribute EventHandler onfocus;
 *   attribute EventHandler oninput;
 *   attribute EventHandler oninvalid;
 *   attribute EventHandler onkeydown;
 *   attribute EventHandler onkeypress;
 *   attribute EventHandler onkeyup;
 *   attribute EventHandler onload;
 *   attribute EventHandler onloadeddata;
 *   attribute EventHandler onloadedmetadata;
 *   attribute EventHandler onloadstart;
 *   attribute EventHandler onmousedown;
 *   [LenientThis] attribute EventHandler onmouseenter;
 *   [LenientThis] attribute EventHandler onmouseleave;
 *   attribute EventHandler onmousemove;
 *   attribute EventHandler onmouseout;
 *   attribute EventHandler onmouseover;
 *   attribute EventHandler onmouseup;
 *   attribute EventHandler onwheel;
 *   attribute EventHandler onpause;
 *   attribute EventHandler onplay;
 *   attribute EventHandler onplaying;
 *   attribute EventHandler onprogress;
 *   attribute EventHandler onratechange;
 *   attribute EventHandler onreset;
 *   attribute EventHandler onresize;
 *   attribute EventHandler onscroll;
 *   attribute EventHandler onseeked;
 *   attribute EventHandler onseeking;
 *   attribute EventHandler onselect;
 *   attribute EventHandler onshow;
 *   attribute EventHandler onstalled;
 *   attribute EventHandler onsubmit;
 *   attribute EventHandler onsuspend;
 *   attribute EventHandler ontimeupdate;
 *   attribute EventHandler ontoggle;
 *   attribute EventHandler onvolumechange;
 *   attribute EventHandler onwaiting;
 * };
 */
/**
 * @interface GlobalEventHandlers
 */
let GlobalEventHandlers = {};

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onabort = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onblur = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.oncancel = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.oncanplay = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.oncanplaythrough = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onchange = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onclick = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onclose = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.oncontextmenu = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.oncuechange = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ondblclick = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ondrag = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ondragend = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ondragenter = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ondragexit = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ondragleave = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ondragover = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ondragstart = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ondrop = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ondurationchange = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onemptied = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onended = new EventHandler();

/**
 * @type {OnErrorEventHandler}
 */
GlobalEventHandlers.prototype.onerror = new OnErrorEventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onfocus = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.oninput = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.oninvalid = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onkeydown = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onkeypress = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onkeyup = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onload = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onloadeddata = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onloadedmetadata = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onloadstart = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onmousedown = new EventHandler();

/**
 * [LenientThis] -- This method is only accessible on object that implements this interface. Not on its prototype.
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onmouseenter = new EventHandler();

/**
 * [LenientThis] -- This method is only accessible on object that implements this interface. Not on its prototype.
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onmouseleave = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onmousemove = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onmouseout = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onmouseover = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onmouseup = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onwheel = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onpause = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onplay = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onplaying = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onprogress = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onratechange = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onreset = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onresize = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onscroll = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onseeked = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onseeking = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onselect = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onshow = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onstalled = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onsubmit = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onsuspend = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ontimeupdate = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.ontoggle = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onvolumechange = new EventHandler();

/**
 * @type {EventHandler}
 */
GlobalEventHandlers.prototype.onwaiting = new EventHandler();


/**
 * [NoInterfaceObject]
 * interface WindowEventHandlers {
 *   attribute EventHandler onafterprint;
 *   attribute EventHandler onbeforeprint;
 *   attribute OnBeforeUnloadEventHandler onbeforeunload;
 *   attribute EventHandler onhashchange;
 *   attribute EventHandler onlanguagechange;
 *   attribute EventHandler onmessage;
 *   attribute EventHandler onoffline;
 *   attribute EventHandler ononline;
 *   attribute EventHandler onpagehide;
 *   attribute EventHandler onpageshow;
 *   attribute EventHandler onrejectionhandled;
 *   attribute EventHandler onpopstate;
 *   attribute EventHandler onstorage;
 *   attribute EventHandler onunhandledrejection;
 *   attribute EventHandler onunload;
 * };
 */
/**
 * @interface WindowEventHandlers
 */
let WindowEventHandlers = {};

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onafterprint = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onbeforeprint = new EventHandler();

/**
 * @type {OnBeforeUnloadEventHandler}
 */
WindowEventHandlers.prototype.onbeforeunload = new OnBeforeUnloadEventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onhashchange = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onlanguagechange = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onmessage = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onoffline = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.ononline = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onpagehide = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onpageshow = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onrejectionhandled = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onpopstate = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onstorage = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onunhandledrejection = new EventHandler();

/**
 * @type {EventHandler}
 */
WindowEventHandlers.prototype.onunload = new EventHandler();


/**
 * [NoInterfaceObject]
 * interface DocumentAndElementEventHandlers {
 *   attribute EventHandler oncopy;
 *   attribute EventHandler oncut;
 *   attribute EventHandler onpaste;
 * };
 */
/**
 * @interface DocumentAndElementEventHandlers
 */
let DocumentAndElementEventHandlers = {};

/**
 * @type {EventHandler}
 */
DocumentAndElementEventHandlers.prototype.oncopy = new EventHandler();

/**
 * @type {EventHandler}
 */
DocumentAndElementEventHandlers.prototype.oncut = new EventHandler();

/**
 * @type {EventHandler}
 */
DocumentAndElementEventHandlers.prototype.onpaste = new EventHandler();


/**
 * [NoInterfaceObject, Exposed=(Window, Worker)]
 * interface WindowBase64 {
 *   DOMString btoa(DOMString btoa);
 *   DOMString atob(DOMString atob);
 * };
 */
/**
 * @interface WindowBase64
 */
let WindowBase64 = {};
Window.prototype.WindowBase64 = WindowBase64;
Worker.prototype.WindowBase64 = WindowBase64;

/**
 * @param {string} btoa
 * @returns {string}
 */
WindowBase64.prototype.btoa = function (btoa) { return ""; };

/**
 * @param {string} atob
 * @returns {string}
 */
WindowBase64.prototype.atob = function (atob) { return ""; };


/**
 * Window implements WindowBase64;
 */
/**
 * @implements {WindowBase64}
 */
Window.prototype = WindowBase64.prototype;


/**
 * WorkerGlobalScope implements WindowBase64;
 */
/**
 * @implements {WindowBase64}
 */
WorkerGlobalScope.prototype = WindowBase64.prototype;


