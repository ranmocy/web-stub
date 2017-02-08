/**
 * interface IDBCursor {
 *     readonly    attribute (IDBObjectStore or IDBIndex) source;
 *     readonly    attribute IDBCursorDirection           direction;
 *     readonly    attribute any                          key;
 *     readonly    attribute any                          primaryKey;
 *     IDBRequest update (any value);
 *     void       advance ([EnforceRange] unsigned long count);
 *     void       continue (optional any key);
 *     IDBRequest delete ();
 * };
 */
var IDBCursor = function () {};

/**
 * @type {(IDBObjectStore|IDBIndex)}
 * @readonly
 */
IDBCursor.prototype.source = null;

/**
 * @type {IDBCursorDirection}
 * @readonly
 */
IDBCursor.prototype.direction = new IDBCursorDirection();

/**
 * @type {*}
 * @readonly
 */
IDBCursor.prototype.key = {};

/**
 * @type {*}
 * @readonly
 */
IDBCursor.prototype.primaryKey = {};

/**
 * @param {*} value
 * @returns {IDBRequest}
 */
IDBCursor.prototype.update = function (value) { return new IDBRequest(); };

/**
 * @param {number} count - EnforceRange
 * @returns {void}
 */
IDBCursor.prototype.advance = function (count) { return ; };

/**
 * @param {*} [key]
 * @returns {void}
 */
IDBCursor.prototype.continue = function (key) { return ; };

/**
 * @returns {IDBRequest}
 */
IDBCursor.prototype.delete = function () { return new IDBRequest(); };
