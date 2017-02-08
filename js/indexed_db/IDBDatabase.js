/**
 * interface IDBDatabase : EventTarget {
 *     readonly        attribute DOMString          name;
 *     readonly        attribute unsigned long long version;
 *     readonly        attribute DOMStringList      objectStoreNames;
 *     IDBObjectStore  createObjectStore (DOMString name, optional IDBObjectStoreParameters optionalParameters);
 *     void            deleteObjectStore (DOMString name);
 *     IDBTransaction  transaction ((DOMString or sequence<DOMString>) storeNames, optional IDBTransactionMode mode = "readonly");
 *     void            close ();
 *                     attribute EventHandler       onabort;
 *                     attribute EventHandler       onerror;
 *                     attribute EventHandler       onversionchange;
 * };
 */
var IDBDatabase = function () {};
IDBDatabase.prototype = new EventTarget();

/**
 * @type {string}
 * @readonly
 */
IDBDatabase.prototype.name = "";

/**
 * @type {number}
 * @readonly
 */
IDBDatabase.prototype.version = 0;

/**
 * @type {DOMStringList}
 * @readonly
 */
IDBDatabase.prototype.objectStoreNames = new DOMStringList();

/**
 * @param {string} name
 * @param {IDBObjectStoreParameters} [optionalParameters]
 * @returns {IDBObjectStore}
 */
IDBDatabase.prototype.createObjectStore = function (name, optionalParameters) { return new IDBObjectStore(); };

/**
 * @param {string} name
 * @returns {void}
 */
IDBDatabase.prototype.deleteObjectStore = function (name) { return ; };

/**
 * @param {string|string[]} storeNames
 * @param {IDBTransactionMode} [mode='readonly']
 * @returns {IDBTransaction}
 */
IDBDatabase.prototype.transaction = function (storeNames, mode) { return new IDBTransaction(); };

/**
 * @returns {void}
 */
IDBDatabase.prototype.close = function () { return ; };

/**
 * @type {EventHandler}
 */
IDBDatabase.prototype.onabort = new EventHandler();

/**
 * @type {EventHandler}
 */
IDBDatabase.prototype.onerror = new EventHandler();

/**
 * @type {EventHandler}
 */
IDBDatabase.prototype.onversionchange = new EventHandler();