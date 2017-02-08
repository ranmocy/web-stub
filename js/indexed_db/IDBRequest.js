/**
 * interface IDBRequest : EventTarget {
 *     readonly    attribute any                                        result;
 *     readonly    attribute DOMError                                   error;
 *     readonly    attribute (IDBObjectStore or IDBIndex or IDBCursor)? source;
 *     readonly    attribute IDBTransaction                             transaction;
 *     readonly    attribute IDBRequestReadyState                       readyState;
 *                 attribute EventHandler                               onsuccess;
 *                 attribute EventHandler                               onerror;
 * };
 */
/**
 * @constructor
 */
var IDBRequest = function () {};
IDBRequest.prototype = new EventTarget();

/**
 * @type {*}
 * @readonly
 */
IDBRequest.prototype.result = {};

/**
 * @type {DOMError}
 * @readonly
 */
IDBRequest.prototype.error = new DOMError();

/**
 * @type {?(IDBObjectStore|IDBIndex|IDBCursor)}
 * @readonly
 */
IDBRequest.prototype.source = null;

/**
 * @type {IDBTransaction}
 * @readonly
 */
IDBRequest.prototype.transaction = new IDBTransaction();

/**
 * @type {IDBRequestReadyState}
 * @readonly
 */
IDBRequest.prototype.readyState = new IDBRequestReadyState();

/**
 * @type {EventHandler}
 */
IDBRequest.prototype.onsuccess = new EventHandler();

/**
 * @type {EventHandler}
 */
IDBRequest.prototype.onerror = new EventHandler();

