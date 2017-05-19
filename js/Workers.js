/**
 * [Exposed=Worker] 
 * interface WorkerGlobalScope : EventTarget {
 *   readonly attribute WorkerGlobalScope self;
 *   readonly attribute WorkerLocation location;
 *   readonly attribute WorkerNavigator navigator;
 *   void importScripts(USVString... urls);
 *   attribute OnErrorEventHandler onerror;
 *   attribute EventHandler onlanguagechange;
 *   attribute EventHandler onoffline;
 *   attribute EventHandler ononline;
 *   attribute EventHandler onrejectionhandled;
 *   attribute EventHandler onunhandledrejection;
 * };
 */
/**
 * @constructor
 */
let WorkerGlobalScope = function () {};
WorkerGlobalScope.prototype = new EventTarget();
Worker.prototype.WorkerGlobalScope = WorkerGlobalScope;

/**
 * @type {WorkerGlobalScope}
 * @readonly
 */
WorkerGlobalScope.prototype.self = new WorkerGlobalScope();

/**
 * @type {WorkerLocation}
 * @readonly
 */
WorkerGlobalScope.prototype.location = new WorkerLocation();

/**
 * @type {WorkerNavigator}
 * @readonly
 */
WorkerGlobalScope.prototype.navigator = new WorkerNavigator();

/**
 * @param {...string} urls
 * @returns {void}
 */
WorkerGlobalScope.prototype.importScripts = function (urls) { return ; };

/**
 * @type {OnErrorEventHandler}
 */
WorkerGlobalScope.prototype.onerror = new OnErrorEventHandler();

/**
 * @type {EventHandler}
 */
WorkerGlobalScope.prototype.onlanguagechange = new EventHandler();

/**
 * @type {EventHandler}
 */
WorkerGlobalScope.prototype.onoffline = new EventHandler();

/**
 * @type {EventHandler}
 */
WorkerGlobalScope.prototype.ononline = new EventHandler();

/**
 * @type {EventHandler}
 */
WorkerGlobalScope.prototype.onrejectionhandled = new EventHandler();

/**
 * @type {EventHandler}
 */
WorkerGlobalScope.prototype.onunhandledrejection = new EventHandler();


/**
 * [Global=(Worker,DedicatedWorker),Exposed=DedicatedWorker]
 * interface DedicatedWorkerGlobalScope : WorkerGlobalScope {
 *   readonly attribute DOMString name;
 *   void postMessage(any message, optional sequence<object> transfer = []);
 *   void close();
 *   attribute EventHandler onmessage;
 *   attribute EventHandler onmessageerror;
 * };
 */
/**
 * [Global] it indicates that objects implementing this interface can be used as the global object in an ECMAScript environment, and that the structure of the prototype chain and how properties corresponding to interface members will be reflected on the prototype objects will be different from other interfaces.
 * @constructor
 */
let DedicatedWorkerGlobalScope = function () {};
DedicatedWorkerGlobalScope.prototype = new WorkerGlobalScope();
DedicatedWorker.prototype.DedicatedWorkerGlobalScope = DedicatedWorkerGlobalScope;

/**
 * @type {string}
 * @readonly
 */
DedicatedWorkerGlobalScope.prototype.name = "";

/**
 * @param {*} message
 * @param {object[]} [transfer=]
 * @returns {void}
 */
DedicatedWorkerGlobalScope.prototype.postMessage = function (message, transfer) { return ; };

/**
 * @returns {void}
 */
DedicatedWorkerGlobalScope.prototype.close = function () { return ; };

/**
 * @type {EventHandler}
 */
DedicatedWorkerGlobalScope.prototype.onmessage = new EventHandler();

/**
 * @type {EventHandler}
 */
DedicatedWorkerGlobalScope.prototype.onmessageerror = new EventHandler();


/**
 * [Global=(Worker,SharedWorker),Exposed=SharedWorker]
 * interface SharedWorkerGlobalScope : WorkerGlobalScope {
 *   readonly attribute DOMString name;
 *   void close();
 *   attribute EventHandler onconnect;
 * };
 */
/**
 * [Global] it indicates that objects implementing this interface can be used as the global object in an ECMAScript environment, and that the structure of the prototype chain and how properties corresponding to interface members will be reflected on the prototype objects will be different from other interfaces.
 * @constructor
 */
let SharedWorkerGlobalScope = function () {};
SharedWorkerGlobalScope.prototype = new WorkerGlobalScope();
SharedWorker.prototype.SharedWorkerGlobalScope = SharedWorkerGlobalScope;

/**
 * @type {string}
 * @readonly
 */
SharedWorkerGlobalScope.prototype.name = "";

/**
 * @returns {void}
 */
SharedWorkerGlobalScope.prototype.close = function () { return ; };

/**
 * @type {EventHandler}
 */
SharedWorkerGlobalScope.prototype.onconnect = new EventHandler();


/**
 * [NoInterfaceObject, Exposed=(Window,Worker)]
 * interface AbstractWorker {
 *   attribute EventHandler onerror;
 * };
 */
/**
 * @interface AbstractWorker
 */
let AbstractWorker = {};
Window.prototype.AbstractWorker = AbstractWorker;
Worker.prototype.AbstractWorker = AbstractWorker;

/**
 * @type {EventHandler}
 */
AbstractWorker.prototype.onerror = new EventHandler();


/**
 * [Constructor(USVString scriptURL, optional WorkerOptions options), Exposed=(Window,Worker)]
 * interface Worker : EventTarget {
 *   void terminate();
 *   void postMessage(any message, optional sequence<object> transfer = []);
 *   attribute EventHandler onmessage;
 *   attribute EventHandler onmessageerror;
 * };
 */
/**
 * @constructor
 * @param {string} scriptURL
 * @param {WorkerOptions} [options]
 */
let Worker = function (scriptURL, options) {};
Worker.prototype = new EventTarget();
Window.prototype.Worker = Worker;
Worker.prototype.Worker = Worker;

/**
 * @returns {void}
 */
Worker.prototype.terminate = function () { return ; };

/**
 * @param {*} message
 * @param {object[]} [transfer=]
 * @returns {void}
 */
Worker.prototype.postMessage = function (message, transfer) { return ; };

/**
 * @type {EventHandler}
 */
Worker.prototype.onmessage = new EventHandler();

/**
 * @type {EventHandler}
 */
Worker.prototype.onmessageerror = new EventHandler();


/**
 * dictionary WorkerOptions {
 *   WorkerType type = "classic";
 *   RequestCredentials credentials = "omit"; // credentials is only used if type is "module"
 *   DOMString name = "";
 * };
 */
/**
 * @typedef {Object} WorkerOptions
 * @property {WorkerType} [type='classic']
 * @property {RequestCredentials} [credentials='omit']
 * @property {string} [name='']
 */


/**
 * enum WorkerType { "classic", "module" };
 */
/**
 * @typedef {"classic"|"module"} WorkerType
 */


/**
 * Worker implements AbstractWorker;
 */
/**
 * @implements {AbstractWorker}
 */
Worker.prototype = AbstractWorker.prototype;


/**
 * [Constructor(USVString scriptURL, optional (DOMString or WorkerOptions) options),
 *  Exposed=(Window,Worker)]
 * interface SharedWorker : EventTarget {
 *   readonly attribute MessagePort port;
 * };
 */
/**
 * @constructor
 * @param {string} scriptURL
 * @param {(string|WorkerOptions)} [options]
 */
let SharedWorker = function (scriptURL, options) {};
SharedWorker.prototype = new EventTarget();
Window.prototype.SharedWorker = SharedWorker;
Worker.prototype.SharedWorker = SharedWorker;

/**
 * @type {MessagePort}
 * @readonly
 */
SharedWorker.prototype.port = new MessagePort();


/**
 * SharedWorker implements AbstractWorker;
 */
/**
 * @implements {AbstractWorker}
 */
SharedWorker.prototype = AbstractWorker.prototype;


/**
 * [NoInterfaceObject, Exposed=(Window,Worker)]
 * interface NavigatorConcurrentHardware {
 *   readonly attribute unsigned long long hardwareConcurrency;
 * };
 */
/**
 * @interface NavigatorConcurrentHardware
 */
let NavigatorConcurrentHardware = {};
Window.prototype.NavigatorConcurrentHardware = NavigatorConcurrentHardware;
Worker.prototype.NavigatorConcurrentHardware = NavigatorConcurrentHardware;

/**
 * @type {number}
 * @readonly
 */
NavigatorConcurrentHardware.prototype.hardwareConcurrency = 0;


/**
 * [Exposed=Worker]
 * interface WorkerNavigator {};
 */
/**
 * @constructor
 */
let WorkerNavigator = function () {};
Worker.prototype.WorkerNavigator = WorkerNavigator;


/**
 * WorkerNavigator implements NavigatorID;
 */
/**
 * @implements {NavigatorID}
 */
WorkerNavigator.prototype = NavigatorID.prototype;


/**
 * WorkerNavigator implements NavigatorLanguage;
 */
/**
 * @implements {NavigatorLanguage}
 */
WorkerNavigator.prototype = NavigatorLanguage.prototype;


/**
 * WorkerNavigator implements NavigatorOnLine;
 */
/**
 * @implements {NavigatorOnLine}
 */
WorkerNavigator.prototype = NavigatorOnLine.prototype;


/**
 * WorkerNavigator implements NavigatorConcurrentHardware;
 */
/**
 * @implements {NavigatorConcurrentHardware}
 */
WorkerNavigator.prototype = NavigatorConcurrentHardware.prototype;


/**
 * [Exposed=Worker]
 * interface WorkerLocation {
 *   stringifier readonly attribute USVString href;
 *   readonly attribute USVString origin;
 *   readonly attribute USVString protocol;
 *   readonly attribute USVString host;
 *   readonly attribute USVString hostname;
 *   readonly attribute USVString port;
 *   readonly attribute USVString pathname;
 *   readonly attribute USVString search;
 *   readonly attribute USVString hash;
 * };
 */
/**
 * @constructor
 */
let WorkerLocation = function () {};
Worker.prototype.WorkerLocation = WorkerLocation;

/**
 * [stringifier]
 * @type {string}
 * @readonly
 */
WorkerLocation.prototype.href = "";

/**
 * @type {string}
 * @readonly
 */
WorkerLocation.prototype.origin = "";

/**
 * @type {string}
 * @readonly
 */
WorkerLocation.prototype.protocol = "";

/**
 * @type {string}
 * @readonly
 */
WorkerLocation.prototype.host = "";

/**
 * @type {string}
 * @readonly
 */
WorkerLocation.prototype.hostname = "";

/**
 * @type {string}
 * @readonly
 */
WorkerLocation.prototype.port = "";

/**
 * @type {string}
 * @readonly
 */
WorkerLocation.prototype.pathname = "";

/**
 * @type {string}
 * @readonly
 */
WorkerLocation.prototype.search = "";

/**
 * @type {string}
 * @readonly
 */
WorkerLocation.prototype.hash = "";


