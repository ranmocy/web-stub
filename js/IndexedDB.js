/**
 * enum IDBTransactionMode {
 *     "readonly",
 *     "readwrite",
 *     "versionchange"
 * };
 */
/**
 * @enum
 * @readonly
 */
const IDBTransactionMode = {
  readonly: "readonly",
  readwrite: "readwrite",
  versionchange: "versionchange",
};


/**
 * enum IDBRequestReadyState {
 *     "pending",
 *     "done"
 * };
 */
/**
 * @enum
 * @readonly
 */
const IDBRequestReadyState = {
  pending: "pending",
  done: "done",
};


/**
 * interface IDBKeyRange {
 *     readonly    attribute any     lower;
 *     readonly    attribute any     upper;
 *     readonly    attribute boolean lowerOpen;
 *     readonly    attribute boolean upperOpen;
 *     static IDBKeyRange only (any value);
 *     static IDBKeyRange lowerBound (any lower, optional boolean open = false);
 *     static IDBKeyRange upperBound (any upper, optional boolean open = false);
 *     static IDBKeyRange bound (any lower, any upper, optional boolean lowerOpen = false, optional boolean upperOpen = false);
 * };
 */
/**
 * @constructor
 */

let IDBKeyRange = function () {};

/**
 * @type {*}
 * @readonly
 */
IDBKeyRange.prototype.lower = {};

/**
 * @type {*}
 * @readonly
 */
IDBKeyRange.prototype.upper = {};

/**
 * @type {boolean}
 * @readonly
 */
IDBKeyRange.prototype.lowerOpen = false;

/**
 * @type {boolean}
 * @readonly
 */
IDBKeyRange.prototype.upperOpen = false;

/**
 * @param {*} value
 * @returns {IDBKeyRange}
 */
IDBKeyRange.only = function (value) { return new IDBKeyRange(); };

/**
 * @param {*} lower
 * @param {boolean} [open=false]
 * @returns {IDBKeyRange}
 */
IDBKeyRange.lowerBound = function (lower, open) { return new IDBKeyRange(); };

/**
 * @param {*} upper
 * @param {boolean} [open=false]
 * @returns {IDBKeyRange}
 */
IDBKeyRange.upperBound = function (upper, open) { return new IDBKeyRange(); };

/**
 * @param {*} lower
 * @param {*} upper
 * @param {boolean} [lowerOpen=false]
 * @param {boolean} [upperOpen=false]
 * @returns {IDBKeyRange}
 */
IDBKeyRange.bound = function (lower, upper, lowerOpen, upperOpen) { return new IDBKeyRange(); };


/**
 * enum IDBCursorDirection {
 *     "next",
 *     "nextunique",
 *     "prev",
 *     "prevunique"
 * };
 */
/**
 * @enum
 * @readonly
 */
const IDBCursorDirection = {
  next: "next",
  nextunique: "nextunique",
  prev: "prev",
  prevunique: "prevunique",
};


/**
 * dictionary IDBObjectStoreParameters {
 *     (DOMString or sequence<DOMString>)? keyPath = null;
 *     boolean                             autoIncrement = false;
 * };
 */
/**
 * @typedef {Object} IDBObjectStoreParameters
 * @property {?(string|string[])} [keyPath=null]
 * @property {boolean} [autoIncrement=false]
 */
let IDBObjectStoreParameters = {};
IDBObjectStoreParameters.keyPath = null;
IDBObjectStoreParameters.autoIncrement = false;


/**
 * dictionary IDBIndexParameters {
 *     boolean unique = false;
 *     boolean multiEntry = false;
 * };
 */
/**
 * @typedef {Object} IDBIndexParameters
 * @property {boolean} [unique=false]
 * @property {boolean} [multiEntry=false]
 */
let IDBIndexParameters = {};
IDBIndexParameters.unique = false;
IDBIndexParameters.multiEntry = false;


/**
 * dictionary IDBVersionChangeEventInit : EventInit {
 *     unsigned long long  oldVersion = 0;
 *     unsigned long long? newVersion = null;
 * };
 */
/**
 * @typedef {Object} IDBVersionChangeEventInit
 * @property {number} [oldVersion=0]
 * @property {?number} [newVersion=null]
 */
let IDBVersionChangeEventInit = {};
IDBVersionChangeEventInit.prototype = new EventInit();
IDBVersionChangeEventInit.oldVersion = 0;
IDBVersionChangeEventInit.newVersion = null;


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

let IDBRequest = function () {};
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


/**
 * interface IDBOpenDBRequest : IDBRequest {
 *                 attribute EventHandler onblocked;
 *                 attribute EventHandler onupgradeneeded;
 * };
 */
/**
 * @constructor
 */

let IDBOpenDBRequest = function () {};
IDBOpenDBRequest.prototype = new IDBRequest();

/**
 * @type {EventHandler}
 */
IDBOpenDBRequest.prototype.onblocked = new EventHandler();

/**
 * @type {EventHandler}
 */
IDBOpenDBRequest.prototype.onupgradeneeded = new EventHandler();


/**
 * [Constructor(DOMString type, optional IDBVersionChangeEventInit eventInitDict)]
 * interface IDBVersionChangeEvent : Event {
 *     readonly    attribute unsigned long long  oldVersion;
 *     readonly    attribute unsigned long long? newVersion;
 * };
 */
/**
 * @constructor
 * @param {string} type
 * @param {IDBVersionChangeEventInit} [eventInitDict]
 */

let IDBVersionChangeEvent = function (type, eventInitDict) {};
IDBVersionChangeEvent.prototype = new Event();

/**
 * @type {number}
 * @readonly
 */
IDBVersionChangeEvent.prototype.oldVersion = 0;

/**
 * @type {?number}
 * @readonly
 */
IDBVersionChangeEvent.prototype.newVersion = null;


/**
 * Window implements IDBEnvironment;
 */
Window.prototype = new IDBEnvironment();


/**
 * WorkerUtils implements IDBEnvironment;
 */
WorkerUtils.prototype = new IDBEnvironment();


/**
 * [NoInterfaceObject]
 * interface IDBEnvironment {
 *     readonly    attribute IDBFactory indexedDB;
 * };
 */
/**
 * @type {IDBFactory}
 * @readonly
 */
indexedDB = new IDBFactory();


/**
 * interface IDBFactory {
 *     IDBOpenDBRequest open (DOMString name, [EnforceRange] optional unsigned long long version);
 *     IDBOpenDBRequest deleteDatabase (DOMString name);
 *     short            cmp (any first, any second);
 * };
 */
/**
 * @constructor
 */

let IDBFactory = function () {};

/**
 * @param {string} name
 * @param {number} [version] -- EnforceRange
 * @returns {IDBOpenDBRequest}
 */
IDBFactory.prototype.open = function (name, version) { return new IDBOpenDBRequest(); };

/**
 * @param {string} name
 * @returns {IDBOpenDBRequest}
 */
IDBFactory.prototype.deleteDatabase = function (name) { return new IDBOpenDBRequest(); };

/**
 * @param {*} first
 * @param {*} second
 * @returns {number}
 */
IDBFactory.prototype.cmp = function (first, second) { return 0; };


/**
 * interface IDBDatabase : EventTarget {
 *     readonly    attribute DOMString          name;
 *     readonly    attribute unsigned long long version;
 *     readonly    attribute DOMStringList      objectStoreNames;
 *     IDBObjectStore createObjectStore (DOMString name, optional IDBObjectStoreParameters optionalParameters);
 *     void           deleteObjectStore (DOMString name);
 *     IDBTransaction transaction ((DOMString or sequence<DOMString>) storeNames, optional IDBTransactionMode mode = "readonly");
 *     void           close ();
 *                 attribute EventHandler       onabort;
 *                 attribute EventHandler       onerror;
 *                 attribute EventHandler       onversionchange;
 * };
 */
/**
 * @constructor
 */

let IDBDatabase = function () {};
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
 * @param {(string|string[])} storeNames
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


/**
 * interface IDBObjectStore {
 *     readonly    attribute DOMString      name;
 *     readonly    attribute any            keyPath;
 *     readonly    attribute DOMStringList  indexNames;
 *     readonly    attribute IDBTransaction transaction;
 *     readonly    attribute boolean        autoIncrement;
 *     IDBRequest put (any value, optional any key);
 *     IDBRequest add (any value, optional any key);
 *     IDBRequest delete (any key);
 *     IDBRequest get (any key);
 *     IDBRequest clear ();
 *     IDBRequest openCursor (optional any range, optional IDBCursorDirection direction = "next");
 *     IDBIndex   createIndex (DOMString name, (DOMString or sequence<DOMString>) keyPath, optional IDBIndexParameters optionalParameters);
 *     IDBIndex   index (DOMString name);
 *     void       deleteIndex (DOMString indexName);
 *     IDBRequest count (optional any key);
 * };
 */
/**
 * @constructor
 */

let IDBObjectStore = function () {};

/**
 * @type {string}
 * @readonly
 */
IDBObjectStore.prototype.name = "";

/**
 * @type {*}
 * @readonly
 */
IDBObjectStore.prototype.keyPath = {};

/**
 * @type {DOMStringList}
 * @readonly
 */
IDBObjectStore.prototype.indexNames = new DOMStringList();

/**
 * @type {IDBTransaction}
 * @readonly
 */
IDBObjectStore.prototype.transaction = new IDBTransaction();

/**
 * @type {boolean}
 * @readonly
 */
IDBObjectStore.prototype.autoIncrement = false;

/**
 * @param {*} value
 * @param {*} [key]
 * @returns {IDBRequest}
 */
IDBObjectStore.prototype.put = function (value, key) { return new IDBRequest(); };

/**
 * @param {*} value
 * @param {*} [key]
 * @returns {IDBRequest}
 */
IDBObjectStore.prototype.add = function (value, key) { return new IDBRequest(); };

/**
 * @param {*} key
 * @returns {IDBRequest}
 */
IDBObjectStore.prototype.delete = function (key) { return new IDBRequest(); };

/**
 * @param {*} key
 * @returns {IDBRequest}
 */
IDBObjectStore.prototype.get = function (key) { return new IDBRequest(); };

/**
 * @returns {IDBRequest}
 */
IDBObjectStore.prototype.clear = function () { return new IDBRequest(); };

/**
 * @param {*} [range]
 * @param {IDBCursorDirection} [direction='next']
 * @returns {IDBRequest}
 */
IDBObjectStore.prototype.openCursor = function (range, direction) { return new IDBRequest(); };

/**
 * @param {string} name
 * @param {(string|string[])} keyPath
 * @param {IDBIndexParameters} [optionalParameters]
 * @returns {IDBIndex}
 */
IDBObjectStore.prototype.createIndex = function (name, keyPath, optionalParameters) { return new IDBIndex(); };

/**
 * @param {string} name
 * @returns {IDBIndex}
 */
IDBObjectStore.prototype.index = function (name) { return new IDBIndex(); };

/**
 * @param {string} indexName
 * @returns {void}
 */
IDBObjectStore.prototype.deleteIndex = function (indexName) { return ; };

/**
 * @param {*} [key]
 * @returns {IDBRequest}
 */
IDBObjectStore.prototype.count = function (key) { return new IDBRequest(); };


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

let IDBIndex = function () {};

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
/**
 * @constructor
 */

let IDBCursor = function () {};

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
 * @param {number} count -- EnforceRange
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


/**
 * interface IDBCursorWithValue : IDBCursor {
 *     readonly    attribute any value;
 * };
 */
/**
 * @constructor
 */

let IDBCursorWithValue = function () {};
IDBCursorWithValue.prototype = new IDBCursor();

/**
 * @type {*}
 * @readonly
 */
IDBCursorWithValue.prototype.value = {};


/**
 * interface IDBTransaction : EventTarget {
 *     readonly    attribute IDBTransactionMode mode;
 *     readonly    attribute IDBDatabase        db;
 *     readonly    attribute DOMError           error;
 *     IDBObjectStore objectStore (DOMString name);
 *     void           abort ();
 *                 attribute EventHandler       onabort;
 *                 attribute EventHandler       oncomplete;
 *                 attribute EventHandler       onerror;
 * };
 */
/**
 * @constructor
 */

let IDBTransaction = function () {};
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

