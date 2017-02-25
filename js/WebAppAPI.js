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


