'use strict';

/**
 * Payment Method Enum.
 *
 * @module Rapid/Enum/Payment
 * @see module:Rapid/Enum/Payment
 */

/**
 * @readonly
 * @enum {String}
 */
var Payment = {

  /**
   * Normal payment method
   *
   * @type {String}
   */
  PROCESS_PAYMENT: 'ProcessPayment',

  /**
   * Create new customer token
   *
   * @type {String}
   */
  CREATE_TOKEN_CUSTOMER: 'CreateTokenCustomer',

  /**
   * Update customer token
   *
   * @type {String}
   */
  UPDATE_TOKEN_CUSTOMER: 'UpdateTokenCustomer',

  /**
   * Pay using customer token
   *
   * @type {String}
   */
  TOKEN_PAYMENT: 'TokenPayment',

  /**
   * Authorise payment
   *
   * @type {String}
   */
  AUTHORISE: 'Authorise'

};

Object.freeze(Payment);

module.exports = Payment;
