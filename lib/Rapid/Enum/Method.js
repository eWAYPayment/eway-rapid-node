'use strict';

/**
 * API Method Enum.
 *
 * @module Rapid/Enum/Method
 * @see module:Rapid/Enum/Method
 */

/**
 * @readonly
 * @enum {String}
 */
var Method = {

  /**
   * Use Direct Connection method
   * @type {String}
   */
  DIRECT: 'Direct',

  /**
   * Use Responsive Shared method
   * @type {String}
   */
  RESPONSIVE_SHARED: 'ResponsiveShared',

  /**
   * Use Transparent Redirect method
   * @type {String}
   */
  TRANSPARENT_REDIRECT: 'TransparentRedirect',

  /**
   * Use Wallet method
   * @type {String}
   */
  WALLET: 'Wallet',

  /**
   * Use Authorisation method
   * @type {String}
   */
  AUTHORISATION: 'Authorisation'

};

Object.freeze(Method);

module.exports = Method;
