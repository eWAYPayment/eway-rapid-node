'use strict';

/**
 * Settlement Report Mode Enum.
 *
 * @module Rapid/Enum/SettlementReportMode
 * @see module:Rapid/Enum/SettlementReportMode
 */

/**
 * @readonly
 * @enum {String}
 */
var SettlementReportMode = {

  /**
   * Return Both Summary and Transactions
   * @type {String}
   */
  BOTH: 'Both',

  /**
   * Returns only the summary
   * @type {String}
   */
  SUMMARYONLY: 'SummaryOnly',

  /**
   * returns only transactions
   * @type {String}
   */
  TRANSACTIONONLY: 'TransactionOnly'

};

Object.freeze(SettlementReportMode);

module.exports = SettlementReportMode;
