/**
 * typedef double DOMHighResTimeStamp;
 */
/**
 * @typedef {double} DOMHighResTimeStamp
 */


/**
 * [Exposed=(Window,Worker)]
 * interface Performance : EventTarget {
 *     DOMHighResTimeStamp now();
 *     serializer = {attribute};
 * };
 */
/**
 * @constructor
 */
let Performance = function () {};
Performance.prototype = new EventTarget();
Window.prototype.Performance = Performance;
Worker.prototype.Performance = Performance;

/**
 * @returns {DOMHighResTimeStamp}
 */
Performance.prototype.now = function () { return new DOMHighResTimeStamp(); };

/**
 * @return {string}
 */
Performance.prototype.toString = function () { return ""; };


/**
 * [NoInterfaceObject,
 *  Exposed=(Window,Worker)]
 * interface GlobalPerformance {
 *     [Replaceable]
 *     readonly attribute Performance performance;
 * };
 */
/**
 * @interface GlobalPerformance
 */
let GlobalPerformance = {};
Window.prototype.GlobalPerformance = GlobalPerformance;
Worker.prototype.GlobalPerformance = GlobalPerformance;

/**
 * [Replaceable] -- This readonly value is a property of prototype. But assign to it can create this object's own property.
 * @type {Performance}
 * @readonly
 */
GlobalPerformance.prototype.performance = new Performance();


/**
 * Window implements GlobalPerformance;
 */
/**
 * @implements {GlobalPerformance}
 */
Window.prototype = GlobalPerformance.prototype;


/**
 * WorkerGlobalScope implements GlobalPerformance;
 */
/**
 * @implements {GlobalPerformance}
 */
WorkerGlobalScope.prototype = GlobalPerformance.prototype;


