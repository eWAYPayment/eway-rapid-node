'use strict';

/**
 * Payment Method Enum.
 *
 * @module Rapid/Enum/Shipping
 * @see module:Rapid/Enum/Shipping
 */

/**
 * @readonly
 * @enum {String}
 */
var Shipping = {

  /**
   * @type {String}
   */
  UNKNOWN: 'Unknown',

  /**
   * @type {String}
   */
  LOW_COST: 'LowCost',

  /**
   * @type {String}
   */
  DESIGNATED_BY_CUSTOMER: 'DesignatedByCustomer',

  /**
   * @type {String}
   */
  INTERNATIONAL: 'International',

  /**
   * @type {String}
   */
  MILITARY: 'Military',

  /**
   * @type {String}
   */
  NEXT_DAY: 'NextDay',

  /**
   * @type {String}
   */
  STORE_PICKUP: 'StorePickup',

  /**
   * @type {String}
   */
  TWO_DAY_SERVICE: 'TwoDayService',

  /**
   * @type {String}
   */
  THREE_DAY_SERVICE: 'ThreeDayService',

  /**
   * @type {String}
   */
  OTHER: 'Other'

};

Object.freeze(Shipping);

module.exports = Shipping;
