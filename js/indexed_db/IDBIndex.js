/**
 * interface IDBIndex {
 *     readonly    attribute DOMString      name;
 *     readonly    attribute IDBObjectStore objectStore;
 *     readonly    attribute any            keyPath;
 *     readonly    attribute boolean        multiEntry;
 *     readonly    attribute boolean        unique;
 *     IDBRequest openCursor (optional any range, optional IDBCursorDirection direction = "next");
 *     IDBRequest openKeyCursor (optional any range, optional IDBCursorDirection direction = "next");
 *     IDBRequest get (any key);
 *     IDBRequest getKey (any key);
 *     IDBRequest count (optional any key);
 * };
 */
/**
 * @constructor
 */
var IDBIndex = function () {};

/**
 * @type {string}
 * @readonly
 */
IDBIndex.prototype.name = "";

/**
 * @type {IDBObjectStore}
 * @readonly
 */
IDBIndex.prototype.objectStore = new IDBObjectStore();

/**
 * @type {*}
 * @readonly
 */
IDBIndex.prototype.keyPath = {};

/**
 * @type {boolean}
 * @readonly
 */
IDBIndex.prototype.multiEntry = false;

/**
 * @type {boolean}
 * @readonly
 */
IDBIndex.prototype.unique = false;

/**
 * @param {*} [range]
 * @param {IDBCursorDirection} [direction='next']
 * @returns {IDBRequest}
 */
IDBIndex.prototype.openCursor = function (range, direction) { return new IDBRequest(); };

/**
 * @param {*} [range]
 * @param {IDBCursorDirection} [direction='next']
 * @returns {IDBRequest}
 */
IDBIndex.prototype.openKeyCursor = function (range, direction) { return new IDBRequest(); };

/**
 * @param {*} key
 * @returns {IDBRequest}
 */
IDBIndex.prototype.get = function (key) { return new IDBRequest(); };

/**
 * @param {*} key
 * @returns {IDBRequest}
 */
IDBIndex.prototype.getKey = function (key) { return new IDBRequest(); };

/**
 * @param {*} [key]
 * @returns {IDBRequest}
 */
IDBIndex.prototype.count = function (key) { return new IDBRequest(); };

