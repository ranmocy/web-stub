/**
 * interface IDBOpenDBRequest : IDBRequest {
 *                 attribute EventHandler onblocked;
 *                 attribute EventHandler onupgradeneeded;
 * };
 */
/**
 * @constructor
 */
var IDBOpenDBRequest = function () {};
IDBOpenDBRequest.prototype = new IDBRequest();

/**
 * @type {EventHandler}
 */
IDBOpenDBRequest.prototype.onblocked = new EventHandler();

/**
 * @type {EventHandler}
 */
IDBOpenDBRequest.prototype.onupgradeneeded = new EventHandler();

