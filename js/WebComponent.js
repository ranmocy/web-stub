/**
 * interface CustomElementRegistry {
 *   [CEReactions] void define(DOMString name, Function constructor, optional ElementDefinitionOptions options);
 *   any get(DOMString name);
 *   Promise<void> whenDefined(DOMString name);
 * };
 */
/**
 * @constructor
 */
let CustomElementRegistry = function () {};

/**
 * [CEReactions] -- Specify algorithms used in custom elements.
 * @param {string} name
 * @param {Function} constructor
 * @param {ElementDefinitionOptions} [options]
 * @returns {void}
 */
CustomElementRegistry.prototype.define = function (name, constructor, options) { return ; };

/**
 * @param {string} name
 * @returns {*}
 */
CustomElementRegistry.prototype.get = function (name) { return {}; };

/**
 * @param {string} name
 * @returns {Promise.<void>}
 */
CustomElementRegistry.prototype.whenDefined = function (name) { return ; };


/**
 * dictionary ElementDefinitionOptions {
 *   DOMString extends;
 * };
 */
/**
 * @typedef {Object} ElementDefinitionOptions
 * @property {string} [extends]
 */


/**
 * partial interface Window {
 *     readonly attribute CustomElementRegistry customElements;
 * };
 */


/**
 * @type {CustomElementRegistry}
 * @readonly
 */
Window.prototype.customElements = new CustomElementRegistry();


