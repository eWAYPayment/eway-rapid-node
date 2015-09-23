'use strict';

/**
 * Transaction Type Enum.
 *
 * @module Rapid/Enum/TransactionType
 * @see module:Rapid/Enum/TransactionType
 */

/**
 * @readonly
 * @enum {String}
 */
var TransactionType = {


  /**
   * Purchase transaction
   * @type {String}
   */
  PURCHASE: 'Purchase',

  /**
   * Recurring transaction
   * @type {String}
   */
  RECURRING: 'Recurring',

  /**
   * Mail order/Telephone order
   * @type {String}
   */
  MOTO: 'MOTO'

};

Object.freeze(TransactionType);

module.exports = TransactionType;
