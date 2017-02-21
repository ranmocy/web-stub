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
Window.prototype.Headers = [object Object];
Worker.prototype.Headers = [object Object];

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
 * @returns {ByteString[]}
 */
Headers.prototype.keys = function () { return [new ByteString()]; };

/**
 * @returns {ByteString[]}
 */
Headers.prototype.values = function () { return [new ByteString()]; };

Headers.prototype.entries = function () { return new ByteString(); };

Headers.prototype[Symbol.iterator] = function () { return new ByteString(); };


/**
 * typedef (Blob or BufferSource or FormData or URLSearchParams or ReadableStream or USVString) BodyInit;
 */
/**
 * @typedef {(Blob|BufferSource|FormData|URLSearchParams|ReadableStream|USVString)} BodyInit
 */


