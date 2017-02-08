/**
 * interface IDBTransaction : EventTarget {
 *     readonly        attribute IDBTransactionMode mode;
 *     readonly        attribute IDBDatabase        db;
 *     readonly        attribute DOMError           error;
 *     IDBObjectStore  objectStore (DOMString name);
 *     void            abort ();
 *                     attribute EventHandler       onabort;
 *                     attribute EventHandler       oncomplete;
 *                     attribute EventHandler       onerror;
 * };
 */
var IDBTransaction = function () {};
IDBTransaction.prototype = new EventTarget();

/**
 * @type {IDBTransactionMode}
 * @readonly
 */
IDBTransaction.prototype.mode = new IDBTransactionMode();

/**
 * @type {IDBDatabase}
 * @readonly
 */
IDBTransaction.prototype.db = new IDBDatabase();

/**
 * @type {DOMError}
 * @readonly
 */
IDBTransaction.prototype.error = new DOMError();

/**
 * @param {string} name
 * @returns {IDBObjectStore}
 */
IDBTransaction.prototype.objectStore = function (name) { return new IDBObjectStore(); };

/**
 * @returns {void}
 */
IDBTransaction.prototype.abort = function () { return ; };

/**
 * @type {EventHandler}
 */
IDBTransaction.prototype.onabort = new EventHandler();

/**
 * @type {EventHandler}
 */
IDBTransaction.prototype.oncomplete = new EventHandler();

/**
 * @type {EventHandler}
 */
IDBTransaction.prototype.onerror = new EventHandler();
