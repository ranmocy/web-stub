/**
 * typedef (sequence<sequence<ByteString>> or record<ByteString, ByteString>) HeadersInit;
 */
/**
 * @typedef {(ByteString[][]|Object.<ByteString, ByteString>)} HeadersInit
 */


/**
 * [Constructor(optional HeadersInit init),
 *  Exposed=(Window,Worker)]
 * interface Headers {
 *   void append(ByteString name, ByteString value);
 *   void delete(ByteString name);
 *   ByteString? get(ByteString name);
 *   boolean has(ByteString name);
 *   void set(ByteString name, ByteString value);
 *   iterable<ByteString, ByteString>;
 * };
 */
/**
 * @constructor
 * @param {HeadersInit} [init]
 */
let Headers = function (init) {};
Window.prototype.Headers = Headers;
Worker.prototype.Headers = Headers;

/**
 * @param {ByteString} name
 * @param {ByteString} value
 * @returns {void}
 */
Headers.prototype.append = function (name, value) { return ; };

/**
 * @param {ByteString} name
 * @returns {void}
 */
Headers.prototype.delete = function (name) { return ; };

/**
 * @param {ByteString} name
 * @returns {?ByteString}
 */
Headers.prototype.get = function (name) { return null; };

/**
 * @param {ByteString} name
 * @returns {boolean}
 */
Headers.prototype.has = function (name) { return false; };

/**
 * @param {ByteString} name
 * @param {ByteString} value
 * @returns {void}
 */
Headers.prototype.set = function (name, value) { return ; };

/**
 * @returns {Iterator.<ByteString>}
 */
Headers.prototype.keys = function* () { yield new ByteString(); };

/**
 * @returns {Iterator.<ByteString>}
 */
Headers.prototype.values = function* () { yield new ByteString(); };

/**
 * @returns {Iterator.<ByteString, ByteString>}
 */
Headers.prototype.entries = function* () { yield [new ByteString(), new ByteString()]; };

/**
 * @returns {Iterator.<ByteString, ByteString>}
 */
Headers.prototype[Symbol.iterator] = function* () { yield [new ByteString(), new ByteString()]; };


/**
 * typedef (Blob or BufferSource or FormData or URLSearchParams or ReadableStream or USVString) BodyInit;
 */
/**
 * @typedef {(Blob|BufferSource|FormData|URLSearchParams|ReadableStream|USVString)} BodyInit
 */


/**
 * [NoInterfaceObject, Exposed=(Window,Worker)]
 * interface Body {
 *   readonly attribute ReadableStream? body;
 *   readonly attribute boolean bodyUsed;
 *   [NewObject] Promise<ArrayBuffer> arrayBuffer();
 *   [NewObject] Promise<Blob> blob();
 *   [NewObject] Promise<FormData> formData();
 *   [NewObject] Promise<any> json();
 *   [NewObject] Promise<USVString> text();
 * };
 */
/**
 * @interface Body
 */
let Body = {};
Window.prototype.Body = Body;
Worker.prototype.Body = Body;

/**
 * @type {?ReadableStream}
 * @readonly
 */
Body.prototype.body = null;

/**
 * @type {boolean}
 * @readonly
 */
Body.prototype.bodyUsed = false;

/**
 * [NewObject]
 * @returns {Promise.<ArrayBuffer>}
 */
Body.prototype.arrayBuffer = function () { return new ArrayBuffer(); };

/**
 * [NewObject]
 * @returns {Promise.<Blob>}
 */
Body.prototype.blob = function () { return new Blob(); };

/**
 * [NewObject]
 * @returns {Promise.<FormData>}
 */
Body.prototype.formData = function () { return new FormData(); };

/**
 * [NewObject]
 * @returns {Promise.<*>}
 */
Body.prototype.json = function () { return {}; };

/**
 * [NewObject]
 * @returns {Promise.<USVString>}
 */
Body.prototype.text = function () { return new USVString(); };


/**
 * typedef (Request or USVString) RequestInfo;
 */
/**
 * @typedef {(Request|USVString)} RequestInfo
 */


/**
 * [Constructor(RequestInfo input, optional RequestInit init),
 *  Exposed=(Window,Worker)]
 * interface Request {
 *   readonly attribute ByteString method;
 *   readonly attribute USVString url;
 *   [SameObject] readonly attribute Headers headers;
 *   readonly attribute RequestType type;
 *   readonly attribute RequestDestination destination;
 *   readonly attribute USVString referrer;
 *   readonly attribute ReferrerPolicy referrerPolicy;
 *   readonly attribute RequestMode mode;
 *   readonly attribute RequestCredentials credentials;
 *   readonly attribute RequestCache cache;
 *   readonly attribute RequestRedirect redirect;
 *   readonly attribute DOMString integrity;
 *   readonly attribute boolean keepalive;
 *   [NewObject] Request clone();
 * };
 */
/**
 * @constructor
 * @param {RequestInfo} input
 * @param {RequestInit} [init]
 */
let Request = function (input, init) {};
Window.prototype.Request = Request;
Worker.prototype.Request = Request;

/**
 * @type {ByteString}
 * @readonly
 */
Request.prototype.method = new ByteString();

/**
 * @type {USVString}
 * @readonly
 */
Request.prototype.url = new USVString();

/**
 * [SameObject] -- It will always return the same object
 * @type {Headers}
 * @readonly
 */
Request.prototype.headers = new Headers();

/**
 * @type {RequestType}
 * @readonly
 */
Request.prototype.type = new RequestType();

/**
 * @type {RequestDestination}
 * @readonly
 */
Request.prototype.destination = new RequestDestination();

/**
 * @type {USVString}
 * @readonly
 */
Request.prototype.referrer = new USVString();

/**
 * @type {ReferrerPolicy}
 * @readonly
 */
Request.prototype.referrerPolicy = new ReferrerPolicy();

/**
 * @type {RequestMode}
 * @readonly
 */
Request.prototype.mode = new RequestMode();

/**
 * @type {RequestCredentials}
 * @readonly
 */
Request.prototype.credentials = new RequestCredentials();

/**
 * @type {RequestCache}
 * @readonly
 */
Request.prototype.cache = new RequestCache();

/**
 * @type {RequestRedirect}
 * @readonly
 */
Request.prototype.redirect = new RequestRedirect();

/**
 * @type {string}
 * @readonly
 */
Request.prototype.integrity = "";

/**
 * @type {boolean}
 * @readonly
 */
Request.prototype.keepalive = false;

/**
 * [NewObject]
 * @returns {Request}
 */
Request.prototype.clone = function () { return new Request(); };


/**
 * Request implements Body;
 */
/**
 * @implements {Body}
 */
Request.prototype = Body.prototype;


/**
 * dictionary RequestInit {
 *   ByteString method;
 *   HeadersInit headers;
 *   BodyInit? body;
 *   USVString referrer;
 *   ReferrerPolicy referrerPolicy;
 *   RequestMode mode;
 *   RequestCredentials credentials;
 *   RequestCache cache;
 *   RequestRedirect redirect;
 *   DOMString integrity;
 *   boolean keepalive;
 *   any window; // can only be set to null
 * };
 */
/**
 * @typedef {Object} RequestInit
 * @property {ByteString} [method]
 * @property {HeadersInit} [headers]
 * @property {?BodyInit} [body]
 * @property {USVString} [referrer]
 * @property {ReferrerPolicy} [referrerPolicy]
 * @property {RequestMode} [mode]
 * @property {RequestCredentials} [credentials]
 * @property {RequestCache} [cache]
 * @property {RequestRedirect} [redirect]
 * @property {string} [integrity]
 * @property {boolean} [keepalive]
 * @property {*} [window]
 */


/**
 * enum RequestType { "", "audio", "font", "image", "script", "style", "track", "video" };
 */
/**
 * @typedef {""|"audio"|"font"|"image"|"script"|"style"|"track"|"video"} RequestType
 */


/**
 * enum RequestDestination { "", "document", "embed", "font", "image", "manifest", "media", "object", "report", "script", "serviceworker", "sharedworker", "style",  "worker", "xslt" };
 */
/**
 * @typedef {""|"document"|"embed"|"font"|"image"|"manifest"|"media"|"object"|"report"|"script"|"serviceworker"|"sharedworker"|"style"|"worker"|"xslt"} RequestDestination
 */


/**
 * enum RequestMode { "navigate", "same-origin", "no-cors", "cors" };
 */
/**
 * @typedef {"navigate"|"same-origin"|"no-cors"|"cors"} RequestMode
 */


/**
 * enum RequestCredentials { "omit", "same-origin", "include" };
 */
/**
 * @typedef {"omit"|"same-origin"|"include"} RequestCredentials
 */


/**
 * enum RequestCache { "default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached" };
 */
/**
 * @typedef {"default"|"no-store"|"reload"|"no-cache"|"force-cache"|"only-if-cached"} RequestCache
 */


/**
 * enum RequestRedirect { "follow", "error", "manual" };
 */
/**
 * @typedef {"follow"|"error"|"manual"} RequestRedirect
 */


/**
 * [Constructor(optional BodyInit? body = null, optional ResponseInit init), Exposed=(Window,Worker)]
 * interface Response {
 *   [NewObject] static Response error();
 *   [NewObject] static Response redirect(USVString url, optional unsigned short status = 302);
 *   readonly attribute ResponseType type;
 *   readonly attribute USVString url;
 *   readonly attribute boolean redirected;
 *   readonly attribute unsigned short status;
 *   readonly attribute boolean ok;
 *   readonly attribute ByteString statusText;
 *   [SameObject] readonly attribute Headers headers;
 *   [SameObject] readonly attribute Promise<Headers> trailer;
 *   [NewObject] Response clone();
 * };
 */
/**
 * @constructor
 * @param {?BodyInit} [body=null]
 * @param {ResponseInit} [init]
 */
let Response = function (body, init) {};
Window.prototype.Response = Response;
Worker.prototype.Response = Response;

/**
 * [NewObject]
 * @returns {Response}
 */
Response.error = function () { return new Response(); };

/**
 * [NewObject]
 * @param {USVString} url
 * @param {unsigned short} [status=302]
 * @returns {Response}
 */
Response.redirect = function (url, status) { return new Response(); };

/**
 * @type {ResponseType}
 * @readonly
 */
Response.prototype.type = new ResponseType();

/**
 * @type {USVString}
 * @readonly
 */
Response.prototype.url = new USVString();

/**
 * @type {boolean}
 * @readonly
 */
Response.prototype.redirected = false;

/**
 * @type {unsigned short}
 * @readonly
 */
Response.prototype.status = 0;

/**
 * @type {boolean}
 * @readonly
 */
Response.prototype.ok = false;

/**
 * @type {ByteString}
 * @readonly
 */
Response.prototype.statusText = new ByteString();

/**
 * [SameObject] -- It will always return the same object
 * @type {Headers}
 * @readonly
 */
Response.prototype.headers = new Headers();

/**
 * [SameObject] -- It will always return the same object
 * @type {Promise.<Headers>}
 * @readonly
 */
Response.prototype.trailer = new Headers();

/**
 * [NewObject]
 * @returns {Response}
 */
Response.prototype.clone = function () { return new Response(); };


/**
 * Response implements Body;
 */
/**
 * @implements {Body}
 */
Response.prototype = Body.prototype;


/**
 * dictionary ResponseInit {
 *   unsigned short status = 200;
 *   ByteString statusText = "OK";
 *   HeadersInit headers;
 * };
 */
/**
 * @typedef {Object} ResponseInit
 * @property {unsigned short} [status=200]
 * @property {ByteString} [statusText='OK']
 * @property {HeadersInit} [headers]
 */


/**
 * enum ResponseType { "basic", "cors", "default", "error", "opaque", "opaqueredirect" };
 */
/**
 * @typedef {"basic"|"cors"|"default"|"error"|"opaque"|"opaqueredirect"} ResponseType
 */


/**
 * partial interface WindowOrWorkerGlobalScope {
 *   [NewObject] Promise<Response> fetch(RequestInfo input, optional RequestInit init);
 * };
 */


/**
 * [NewObject]
 * @param {RequestInfo} input
 * @param {RequestInit} [init]
 * @returns {Promise.<Response>}
 */
WindowOrWorkerGlobalScope.prototype.fetch = function (input, init) { return new Response(); };


