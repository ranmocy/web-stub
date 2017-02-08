/**
 * interface IDBKeyRange {
 *     readonly    attribute any     lower;
 *     readonly    attribute any     upper;
 *     readonly    attribute boolean lowerOpen;
 *     readonly    attribute boolean upperOpen;
 *     static IDBKeyRange only (any value);
 *     static IDBKeyRange lowerBound (any lower, optional boolean open);
 *     static IDBKeyRange upperBound (any upper, optional boolean open);
 *     static IDBKeyRange bound (any lower, any upper, optional boolean lowerOpen, optional boolean upperOpen);
 * };
 */
var IDBKeyRange = function () {};

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
 * @param {boolean} [open]
 * @returns {IDBKeyRange}
 */
IDBKeyRange.lowerBound = function (lower, open) { return new IDBKeyRange(); };

/**
 * @param {*} upper
 * @param {boolean} [open]
 * @returns {IDBKeyRange}
 */
IDBKeyRange.upperBound = function (upper, open) { return new IDBKeyRange(); };

/**
 * @param {*} lower
 * @param {*} upper
 * @param {boolean} [lowerOpen]
 * @param {boolean} [upperOpen]
 * @returns {IDBKeyRange}
 */
IDBKeyRange.bound = function (lower, upper, lowerOpen, upperOpen) { return new IDBKeyRange(); };
