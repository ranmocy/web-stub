/**
 * [SecureContext, Exposed=(Window,Worker)]
 * interface ServiceWorker : EventTarget {
 *   readonly attribute USVString scriptURL;
 *   readonly attribute ServiceWorkerState state;
 *   void postMessage(any message, optional sequence<object> transfer);
 *   // event
 *   attribute EventHandler onstatechange;
 * };
 */
/**
 * [SecureContext]
 * @constructor
 */
let ServiceWorker = function () {};
ServiceWorker.prototype = new EventTarget();
Window.prototype.ServiceWorker = ServiceWorker;
Worker.prototype.ServiceWorker = ServiceWorker;

/**
 * @type {USVString}
 * @readonly
 */
ServiceWorker.prototype.scriptURL = new USVString();

/**
 * @type {ServiceWorkerState}
 * @readonly
 */
ServiceWorker.prototype.state = new ServiceWorkerState();

/**
 * @param {*} message
 * @param {object[]} [transfer]
 * @returns {void}
 */
ServiceWorker.prototype.postMessage = function (message, transfer) { return ; };

/**
 * @type {EventHandler}
 */
ServiceWorker.prototype.onstatechange = new EventHandler();


/**
 * ServiceWorker implements AbstractWorker;
 */
/**
 * @implements {AbstractWorker}
 */
ServiceWorker.prototype = AbstractWorker.prototype;


/**
 * enum ServiceWorkerState {
 *   "installing",
 *   "installed",
 *   "activating",
 *   "activated",
 *   "redundant"
 * };
 */
/**
 * @typedef {"installing"|"installed"|"activating"|"activated"|"redundant"} ServiceWorkerState
 */


/**
 * [SecureContext, Exposed=(Window,Worker)]
 * interface ServiceWorkerRegistration : EventTarget {
 *   readonly attribute ServiceWorker? installing;
 *   readonly attribute ServiceWorker? waiting;
 *   readonly attribute ServiceWorker? active;
 *   readonly attribute USVString scope;
 *   [NewObject] Promise<void> update();
 *   [NewObject] Promise<boolean> unregister();
 *   // event
 *   attribute EventHandler onupdatefound;
 * };
 */
/**
 * [SecureContext]
 * @constructor
 */
let ServiceWorkerRegistration = function () {};
ServiceWorkerRegistration.prototype = new EventTarget();
Window.prototype.ServiceWorkerRegistration = ServiceWorkerRegistration;
Worker.prototype.ServiceWorkerRegistration = ServiceWorkerRegistration;

/**
 * @type {?ServiceWorker}
 * @readonly
 */
ServiceWorkerRegistration.prototype.installing = null;

/**
 * @type {?ServiceWorker}
 * @readonly
 */
ServiceWorkerRegistration.prototype.waiting = null;

/**
 * @type {?ServiceWorker}
 * @readonly
 */
ServiceWorkerRegistration.prototype.active = null;

/**
 * @type {USVString}
 * @readonly
 */
ServiceWorkerRegistration.prototype.scope = new USVString();

/**
 * [NewObject] -- Always returns new object.
 * @returns {Promise.<void>}
 */
ServiceWorkerRegistration.prototype.update = function () { return ; };

/**
 * [NewObject] -- Always returns new object.
 * @returns {Promise.<boolean>}
 */
ServiceWorkerRegistration.prototype.unregister = function () { return false; };

/**
 * @type {EventHandler}
 */
ServiceWorkerRegistration.prototype.onupdatefound = new EventHandler();


/**
 * partial interface Navigator {
 *   [SecureContext, SameObject] readonly attribute ServiceWorkerContainer serviceWorker;
 * };
 */


/**
 * [SecureContext] -- This value requires a secure context.
 * [SameObject] -- It will always return the same object
 * @type {ServiceWorkerContainer}
 * @readonly
 */
Navigator.prototype.serviceWorker = new ServiceWorkerContainer();


/**
 * partial interface WorkerNavigator {
 *   [SecureContext, SameObject] readonly attribute ServiceWorkerContainer serviceWorker;
 * };
 */


/**
 * [SecureContext] -- This value requires a secure context.
 * [SameObject] -- It will always return the same object
 * @type {ServiceWorkerContainer}
 * @readonly
 */
WorkerNavigator.prototype.serviceWorker = new ServiceWorkerContainer();


/**
 * [SecureContext, Exposed=(Window,Worker)]
 * interface ServiceWorkerContainer : EventTarget {
 *   readonly attribute ServiceWorker? controller;
 *   [SameObject] readonly attribute Promise<ServiceWorkerRegistration> ready;
 *   [NewObject] Promise<ServiceWorkerRegistration> register(USVString scriptURL, optional RegistrationOptions options);
 *   [NewObject] Promise<any> getRegistration(optional USVString clientURL = "");
 *   [NewObject] Promise<sequence<ServiceWorkerRegistration>> getRegistrations();
 *   void startMessages();
 *   // events
 *   attribute EventHandler oncontrollerchange;
 *   attribute EventHandler onmessage; // event.source of message events is ServiceWorker object
 * };
 */
/**
 * [SecureContext]
 * @constructor
 */
let ServiceWorkerContainer = function () {};
ServiceWorkerContainer.prototype = new EventTarget();
Window.prototype.ServiceWorkerContainer = ServiceWorkerContainer;
Worker.prototype.ServiceWorkerContainer = ServiceWorkerContainer;

/**
 * @type {?ServiceWorker}
 * @readonly
 */
ServiceWorkerContainer.prototype.controller = null;

/**
 * [SameObject] -- It will always return the same object
 * @type {Promise.<ServiceWorkerRegistration>}
 * @readonly
 */
ServiceWorkerContainer.prototype.ready = new ServiceWorkerRegistration();

/**
 * [NewObject] -- Always returns new object.
 * @param {USVString} scriptURL
 * @param {RegistrationOptions} [options]
 * @returns {Promise.<ServiceWorkerRegistration>}
 */
ServiceWorkerContainer.prototype.register = function (scriptURL, options) { return new ServiceWorkerRegistration(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {USVString} [clientURL='']
 * @returns {Promise.<*>}
 */
ServiceWorkerContainer.prototype.getRegistration = function (clientURL) { return {}; };

/**
 * [NewObject] -- Always returns new object.
 * @returns {Promise.<ServiceWorkerRegistration[]>}
 */
ServiceWorkerContainer.prototype.getRegistrations = function () { return [new ServiceWorkerRegistration()]; };

/**
 * @returns {void}
 */
ServiceWorkerContainer.prototype.startMessages = function () { return ; };

/**
 * @type {EventHandler}
 */
ServiceWorkerContainer.prototype.oncontrollerchange = new EventHandler();

/**
 * @type {EventHandler}
 */
ServiceWorkerContainer.prototype.onmessage = new EventHandler();


/**
 * dictionary RegistrationOptions {
 *   USVString scope;
 *   WorkerType type = "classic";
 * };
 */
/**
 * @typedef {Object} RegistrationOptions
 * @property {USVString} [scope]
 * @property {WorkerType} [type='classic']
 */


/**
 * [Constructor(DOMString type, optional ServiceWorkerMessageEventInit eventInitDict), Exposed=(Window,Worker)]
 * interface ServiceWorkerMessageEvent : Event {
 *   readonly attribute any data;
 *   readonly attribute DOMString origin;
 *   readonly attribute DOMString lastEventId;
 *   [SameObject] readonly attribute (ServiceWorker or MessagePort)? source;
 *   readonly attribute FrozenArray<MessagePort>? ports;
 * };
 */
/**
 * @constructor
 * @param {string} type
 * @param {ServiceWorkerMessageEventInit} [eventInitDict]
 */
let ServiceWorkerMessageEvent = function (type, eventInitDict) {};
ServiceWorkerMessageEvent.prototype = new Event();
Window.prototype.ServiceWorkerMessageEvent = ServiceWorkerMessageEvent;
Worker.prototype.ServiceWorkerMessageEvent = ServiceWorkerMessageEvent;

/**
 * @type {*}
 * @readonly
 */
ServiceWorkerMessageEvent.prototype.data = {};

/**
 * @type {string}
 * @readonly
 */
ServiceWorkerMessageEvent.prototype.origin = "";

/**
 * @type {string}
 * @readonly
 */
ServiceWorkerMessageEvent.prototype.lastEventId = "";

/**
 * [SameObject] -- It will always return the same object
 * @type {?(ServiceWorker|MessagePort)}
 * @readonly
 */
ServiceWorkerMessageEvent.prototype.source = null;

/**
 * @type {?MessagePort[]}
 * @readonly
 */
ServiceWorkerMessageEvent.prototype.ports = null;


/**
 * dictionary ServiceWorkerMessageEventInit : EventInit {
 *   any data;
 *   DOMString origin;
 *   DOMString lastEventId;
 *   (ServiceWorker or MessagePort)? source;
 *   sequence<MessagePort>? ports;
 * };
 */
/**
 * @typedef {Object} ServiceWorkerMessageEventInit
 * @property {*} [data]
 * @property {string} [origin]
 * @property {string} [lastEventId]
 * @property {?(ServiceWorker|MessagePort)} [source]
 * @property {?MessagePort[]} [ports]
 */


/**
 * [Global=(Worker,ServiceWorker), Exposed=ServiceWorker]
 * interface ServiceWorkerGlobalScope : WorkerGlobalScope {
 *   // A container for a list of Client objects that correspond to
 *   // browsing contexts (or shared workers) that are on the origin of this SW
 *   [SameObject] readonly attribute Clients clients;
 *   [SameObject] readonly attribute ServiceWorkerRegistration registration;
 *   [NewObject] Promise<void> skipWaiting();
 *   attribute EventHandler oninstall;
 *   attribute EventHandler onactivate;
 *   attribute EventHandler onfetch;
 *   // event
 *   attribute EventHandler onmessage; // event.source of the message events is Client object
 * };
 */
/**
 * [Global] it indicates that objects implementing this interface can be used as the global object in an ECMAScript environment, and that the structure of the prototype chain and how properties corresponding to interface members will be reflected on the prototype objects will be different from other interfaces.
 * @constructor
 */
let ServiceWorkerGlobalScope = function () {};
ServiceWorkerGlobalScope.prototype = new WorkerGlobalScope();
ServiceWorker.prototype.ServiceWorkerGlobalScope = ServiceWorkerGlobalScope;

/**
 * [SameObject] -- It will always return the same object
 * @type {Clients}
 * @readonly
 */
ServiceWorkerGlobalScope.prototype.clients = new Clients();

/**
 * [SameObject] -- It will always return the same object
 * @type {ServiceWorkerRegistration}
 * @readonly
 */
ServiceWorkerGlobalScope.prototype.registration = new ServiceWorkerRegistration();

/**
 * [NewObject] -- Always returns new object.
 * @returns {Promise.<void>}
 */
ServiceWorkerGlobalScope.prototype.skipWaiting = function () { return ; };

/**
 * @type {EventHandler}
 */
ServiceWorkerGlobalScope.prototype.oninstall = new EventHandler();

/**
 * @type {EventHandler}
 */
ServiceWorkerGlobalScope.prototype.onactivate = new EventHandler();

/**
 * @type {EventHandler}
 */
ServiceWorkerGlobalScope.prototype.onfetch = new EventHandler();

/**
 * @type {EventHandler}
 */
ServiceWorkerGlobalScope.prototype.onmessage = new EventHandler();


/**
 * [Exposed=ServiceWorker]
 * interface Client {
 *   readonly attribute USVString url;
 *   readonly attribute FrameType frameType;
 *   readonly attribute DOMString id;
 *   void postMessage(any message, optional sequence<object> transfer);
 * };
 */
/**
 * @constructor
 */
let Client = function () {};
ServiceWorker.prototype.Client = Client;

/**
 * @type {USVString}
 * @readonly
 */
Client.prototype.url = new USVString();

/**
 * @type {FrameType}
 * @readonly
 */
Client.prototype.frameType = new FrameType();

/**
 * @type {string}
 * @readonly
 */
Client.prototype.id = "";

/**
 * @param {*} message
 * @param {object[]} [transfer]
 * @returns {void}
 */
Client.prototype.postMessage = function (message, transfer) { return ; };


/**
 * [Exposed=ServiceWorker]
 * interface WindowClient : Client {
 *   readonly attribute VisibilityState visibilityState;
 *   readonly attribute boolean focused;
 *   [NewObject] Promise<WindowClient> focus();
 *   [NewObject] Promise<WindowClient> navigate(USVString url);
 * };
 */
/**
 * @constructor
 */
let WindowClient = function () {};
WindowClient.prototype = new Client();
ServiceWorker.prototype.WindowClient = WindowClient;

/**
 * @type {VisibilityState}
 * @readonly
 */
WindowClient.prototype.visibilityState = new VisibilityState();

/**
 * @type {boolean}
 * @readonly
 */
WindowClient.prototype.focused = false;

/**
 * [NewObject] -- Always returns new object.
 * @returns {Promise.<WindowClient>}
 */
WindowClient.prototype.focus = function () { return new WindowClient(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {USVString} url
 * @returns {Promise.<WindowClient>}
 */
WindowClient.prototype.navigate = function (url) { return new WindowClient(); };


/**
 * enum FrameType {
 *   "auxiliary",
 *   "top-level",
 *   "nested",
 *   "none"
 * };
 */
/**
 * @typedef {"auxiliary"|"top-level"|"nested"|"none"} FrameType
 */


/**
 * [Exposed=ServiceWorker]
 * interface Clients {
 *   // The objects returned will be new instances every time
 *   [NewObject] Promise<any> get(DOMString id);
 *   [NewObject] Promise<sequence<Client>> matchAll(optional ClientQueryOptions options);
 *   [NewObject] Promise<WindowClient?> openWindow(USVString url);
 *   [NewObject] Promise<void> claim();
 * };
 */
/**
 * @constructor
 */
let Clients = function () {};
ServiceWorker.prototype.Clients = Clients;

/**
 * [NewObject] -- Always returns new object.
 * @param {string} id
 * @returns {Promise.<*>}
 */
Clients.prototype.get = function (id) { return {}; };

/**
 * [NewObject] -- Always returns new object.
 * @param {ClientQueryOptions} [options]
 * @returns {Promise.<Client[]>}
 */
Clients.prototype.matchAll = function (options) { return [new Client()]; };

/**
 * [NewObject] -- Always returns new object.
 * @param {USVString} url
 * @returns {Promise.<?WindowClient>}
 */
Clients.prototype.openWindow = function (url) { return null; };

/**
 * [NewObject] -- Always returns new object.
 * @returns {Promise.<void>}
 */
Clients.prototype.claim = function () { return ; };


/**
 * dictionary ClientQueryOptions {
 *   boolean includeUncontrolled = false;
 *   ClientType type = "window";
 * };
 */
/**
 * @typedef {Object} ClientQueryOptions
 * @property {boolean} [includeUncontrolled=false]
 * @property {ClientType} [type='window']
 */


/**
 * enum ClientType {
 *   "window",
 *   "worker",
 *   "sharedworker",
 *   "all"
 * };
 */
/**
 * @typedef {"window"|"worker"|"sharedworker"|"all"} ClientType
 */


/**
 * [Constructor(DOMString type, optional ExtendableEventInit eventInitDict), Exposed=ServiceWorker]
 * interface ExtendableEvent : Event {
 *   void waitUntil(Promise<any> f);
 * };
 */
/**
 * @constructor
 * @param {string} type
 * @param {ExtendableEventInit} [eventInitDict]
 */
let ExtendableEvent = function (type, eventInitDict) {};
ExtendableEvent.prototype = new Event();
ServiceWorker.prototype.ExtendableEvent = ExtendableEvent;

/**
 * @param {Promise.<*>} f
 * @returns {void}
 */
ExtendableEvent.prototype.waitUntil = function (f) { return ; };


/**
 * dictionary ExtendableEventInit : EventInit {
 *   // Defined for the forward compatibility across the derived events
 * };
 */
/**
 * @typedef {Object} ExtendableEventInit
 */


/**
 * [Constructor(DOMString type, FetchEventInit eventInitDict), Exposed=ServiceWorker]
 * interface FetchEvent : ExtendableEvent {
 *   [SameObject] readonly attribute Request request;
 *   readonly attribute DOMString? clientId;
 *   readonly attribute boolean isReload;
 *   void respondWith(Promise<Response> r);
 * };
 */
/**
 * @constructor
 * @param {string} type
 * @param {FetchEventInit} eventInitDict
 */
let FetchEvent = function (type, eventInitDict) {};
FetchEvent.prototype = new ExtendableEvent();
ServiceWorker.prototype.FetchEvent = FetchEvent;

/**
 * [SameObject] -- It will always return the same object
 * @type {Request}
 * @readonly
 */
FetchEvent.prototype.request = new Request();

/**
 * @type {?string}
 * @readonly
 */
FetchEvent.prototype.clientId = null;

/**
 * @type {boolean}
 * @readonly
 */
FetchEvent.prototype.isReload = false;

/**
 * @param {Promise.<Response>} r
 * @returns {void}
 */
FetchEvent.prototype.respondWith = function (r) { return ; };


/**
 * dictionary FetchEventInit : ExtendableEventInit {
 *   required Request request;
 *   DOMString? clientId = null;
 *   boolean isReload = false;
 * };
 */
/**
 * @typedef {Object} FetchEventInit
 * @property {Request} request
 * @property {?string} [clientId=null]
 * @property {boolean} [isReload=false]
 */


/**
 * [Constructor(DOMString type, optional ExtendableMessageEventInit eventInitDict), Exposed=ServiceWorker]
 * interface ExtendableMessageEvent : ExtendableEvent {
 *   readonly attribute any data;
 *   readonly attribute DOMString origin;
 *   readonly attribute DOMString lastEventId;
 *   [SameObject] readonly attribute (Client or ServiceWorker or MessagePort)? source;
 *   readonly attribute FrozenArray<MessagePort>? ports;
 * };
 */
/**
 * @constructor
 * @param {string} type
 * @param {ExtendableMessageEventInit} [eventInitDict]
 */
let ExtendableMessageEvent = function (type, eventInitDict) {};
ExtendableMessageEvent.prototype = new ExtendableEvent();
ServiceWorker.prototype.ExtendableMessageEvent = ExtendableMessageEvent;

/**
 * @type {*}
 * @readonly
 */
ExtendableMessageEvent.prototype.data = {};

/**
 * @type {string}
 * @readonly
 */
ExtendableMessageEvent.prototype.origin = "";

/**
 * @type {string}
 * @readonly
 */
ExtendableMessageEvent.prototype.lastEventId = "";

/**
 * [SameObject] -- It will always return the same object
 * @type {?(Client|ServiceWorker|MessagePort)}
 * @readonly
 */
ExtendableMessageEvent.prototype.source = null;

/**
 * @type {?MessagePort[]}
 * @readonly
 */
ExtendableMessageEvent.prototype.ports = null;


/**
 * dictionary ExtendableMessageEventInit : ExtendableEventInit {
 *   any data;
 *   DOMString origin;
 *   DOMString lastEventId;
 *   (Client or ServiceWorker or MessagePort)? source;
 *   sequence<MessagePort>? ports;
 * };
 */
/**
 * @typedef {Object} ExtendableMessageEventInit
 * @property {*} [data]
 * @property {string} [origin]
 * @property {string} [lastEventId]
 * @property {?(Client|ServiceWorker|MessagePort)} [source]
 * @property {?MessagePort[]} [ports]
 */


/**
 * partial interface WindowOrWorkerGlobalScope {
 *   [SecureContext, SameObject] readonly attribute CacheStorage caches;
 * };
 */


/**
 * [SecureContext] -- This value requires a secure context.
 * [SameObject] -- It will always return the same object
 * @type {CacheStorage}
 * @readonly
 */
WindowOrWorkerGlobalScope.prototype.caches = new CacheStorage();


/**
 * [SecureContext, Exposed=(Window,Worker)]
 * interface Cache {
 *   [NewObject] Promise<any> match(RequestInfo request, optional CacheQueryOptions options);
 *   [NewObject] Promise<sequence<Response>> matchAll(optional RequestInfo request, optional CacheQueryOptions options);
 *   [NewObject] Promise<void> add(RequestInfo request);
 *   [NewObject] Promise<void> addAll(sequence<RequestInfo> requests);
 *   [NewObject] Promise<void> put(RequestInfo request, Response response);
 *   [NewObject] Promise<boolean> delete(RequestInfo request, optional CacheQueryOptions options);
 *   [NewObject] Promise<sequence<Request>> keys(optional RequestInfo request, optional CacheQueryOptions options);
 * };
 */
/**
 * [SecureContext]
 * @constructor
 */
let Cache = function () {};
Window.prototype.Cache = Cache;
Worker.prototype.Cache = Cache;

/**
 * [NewObject] -- Always returns new object.
 * @param {RequestInfo} request
 * @param {CacheQueryOptions} [options]
 * @returns {Promise.<*>}
 */
Cache.prototype.match = function (request, options) { return {}; };

/**
 * [NewObject] -- Always returns new object.
 * @param {RequestInfo} [request]
 * @param {CacheQueryOptions} [options]
 * @returns {Promise.<Response[]>}
 */
Cache.prototype.matchAll = function (request, options) { return [new Response()]; };

/**
 * [NewObject] -- Always returns new object.
 * @param {RequestInfo} request
 * @returns {Promise.<void>}
 */
Cache.prototype.add = function (request) { return ; };

/**
 * [NewObject] -- Always returns new object.
 * @param {RequestInfo[]} requests
 * @returns {Promise.<void>}
 */
Cache.prototype.addAll = function (requests) { return ; };

/**
 * [NewObject] -- Always returns new object.
 * @param {RequestInfo} request
 * @param {Response} response
 * @returns {Promise.<void>}
 */
Cache.prototype.put = function (request, response) { return ; };

/**
 * [NewObject] -- Always returns new object.
 * @param {RequestInfo} request
 * @param {CacheQueryOptions} [options]
 * @returns {Promise.<boolean>}
 */
Cache.prototype.delete = function (request, options) { return false; };

/**
 * [NewObject] -- Always returns new object.
 * @param {RequestInfo} [request]
 * @param {CacheQueryOptions} [options]
 * @returns {Promise.<Request[]>}
 */
Cache.prototype.keys = function (request, options) { return [new Request()]; };


/**
 * dictionary CacheQueryOptions {
 *   boolean ignoreSearch = false;
 *   boolean ignoreMethod = false;
 *   boolean ignoreVary = false;
 *   DOMString cacheName;
 * };
 */
/**
 * @typedef {Object} CacheQueryOptions
 * @property {boolean} [ignoreSearch=false]
 * @property {boolean} [ignoreMethod=false]
 * @property {boolean} [ignoreVary=false]
 * @property {string} [cacheName]
 */


/**
 * dictionary CacheBatchOperation {
 *   DOMString type;
 *   Request request;
 *   Response response;
 *   CacheQueryOptions options;
 * };
 */
/**
 * @typedef {Object} CacheBatchOperation
 * @property {string} [type]
 * @property {Request} [request]
 * @property {Response} [response]
 * @property {CacheQueryOptions} [options]
 */


/**
 * [SecureContext, Exposed=(Window,Worker)]
 * interface CacheStorage {
 *   [NewObject] Promise<any> match(RequestInfo request, optional CacheQueryOptions options);
 *   [NewObject] Promise<boolean> has(DOMString cacheName);
 *   [NewObject] Promise<Cache> open(DOMString cacheName);
 *   [NewObject] Promise<boolean> delete(DOMString cacheName);
 *   [NewObject] Promise<sequence<DOMString>> keys();
 * };
 */
/**
 * [SecureContext]
 * @constructor
 */
let CacheStorage = function () {};
Window.prototype.CacheStorage = CacheStorage;
Worker.prototype.CacheStorage = CacheStorage;

/**
 * [NewObject] -- Always returns new object.
 * @param {RequestInfo} request
 * @param {CacheQueryOptions} [options]
 * @returns {Promise.<*>}
 */
CacheStorage.prototype.match = function (request, options) { return {}; };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} cacheName
 * @returns {Promise.<boolean>}
 */
CacheStorage.prototype.has = function (cacheName) { return false; };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} cacheName
 * @returns {Promise.<Cache>}
 */
CacheStorage.prototype.open = function (cacheName) { return new Cache(); };

/**
 * [NewObject] -- Always returns new object.
 * @param {string} cacheName
 * @returns {Promise.<boolean>}
 */
CacheStorage.prototype.delete = function (cacheName) { return false; };

/**
 * [NewObject] -- Always returns new object.
 * @returns {Promise.<string[]>}
 */
CacheStorage.prototype.keys = function () { return [""]; };


