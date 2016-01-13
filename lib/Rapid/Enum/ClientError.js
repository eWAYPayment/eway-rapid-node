'use strict';

/**
 * Client Error Enum.
 *
 * @module Rapid/Enum/ClientError
 * @see module:Rapid/Enum/ClientError
 */

/**
 * @readonly
 * @enum {String}
 */
var ClientError = {

  /**
   * Invalid JSON data in server's response
   * @type {String}
   */
  INVALID_JSON: 'S9901',

  /**
   * Empty response from server
   * @type {String}
   */
  EMPTY_RESPONSE: 'S9902',

  /**
   * Unexpected case
   * @type {String}
   */
  METHOD_NOT_IMPLEMENTED: 'S9903',

  /**
   * Invalid data provided to model constructor
   * @type {String}
   */
  INVALID_DATA: 'S9904',

  /**
   * Invalid endpoint provided
   * @type {String}
   */
  INVALID_ENDPOINT: 'S9990',

  /**
   * Invalid credential provided
   * @type {String}
   */
  INVALID_CREDENTIAL: 'S9991',

  /**
   * Something wrong happened
   * @type {String}
   */
  EXCEPTION: 'S9992',

  /**
   * Something wrong with the client request. HTTP Status code 4xx returned
   * @type {String}
   */
  HTTP_CLIENT_ERROR: 'S9993',

  /**
   * Invalid argument provided
   * @type {String}
   */
  INVALID_ARGUMENT: 'S9995',

  /**
   * Something wrong with the server response. HTTP Status code 5xx returned
   * @type {String}
   */
  HTTP_SERVER_ERROR: 'S9996'

};

Object.freeze(ClientError);

module.exports = ClientError;
