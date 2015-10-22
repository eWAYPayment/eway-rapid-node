'use strict';

/**
 * eWAY Rapid SDK module.
 *
 * @module Rapid
 * @see module:Rapid
 */

var Client = require('./Rapid/Client'),
  Model = require('./Rapid/Model'),
  locales = {};

// <editor-fold desc="Internal Functions">

function getLocale(lang) {
  lang = lang.toLowerCase();
  if (!locales.hasOwnProperty(lang)) {
    locales[lang] = {};
    try {
      locales[lang] = require('../locale/' + lang);
    } catch (err) {
      if (lang !== 'en') {
        return getLocale('en');
      }
      // This is not reachable, unless someone deletes ../locale/en.json
      throw err;
    }
  }

  return locales[lang];
}

function getMessageFromFile(code, lang) {
  var locale = getLocale(lang);

  if (!locale.hasOwnProperty(code)) {
    return code;
  }

  return locale[code];
}

// </editor-fold>

/**
 * Use this namespace: __`var Rapid = require('eway-rapid');`__
 *
 * @namespace
 */
var Rapid = {};

/**
 * Create client with API Key, Password and (optional) Endpoint
 *
 * @param {String} key API Key
 * @param {String} password API Password
 * @param {String} [endpoint=sandbox] API Endpoint, can be production/sandbox/actual URL
 * @return {module:Rapid/Client~Client} Rapid Client
 */
Rapid.createClient = function (key, password, endpoint) {
  endpoint = typeof endpoint !== 'undefined' ? endpoint : Client.MODE_SANDBOX;
  return new Client(key, password, endpoint);
};

/**
 * Get user friendly message
 *
 * @param {String} code Message code
 * @param {String} [lang=en] Language code
 * @return {String} Message
 */
Rapid.getMessage = function (code, lang) {
  lang = lang || 'en';
  return getMessageFromFile(code, lang);
};

/**
 * Class Client
 *
 * @type {module:Rapid/Client~Client}
 */
Rapid.Client = Client;

/**
 * @namespace
 */
Rapid.Enum = {

  /**
   * Enum API Method
   *
   * @type {module:Rapid/Enum/Method~Method}
   */
  Method: require('./Rapid/Enum/Method'),

  /**
   * Enum Payment Method
   *
   * @type {module:Rapid/Enum/Payment~Payment}
   */
  Payment: require('./Rapid/Enum/Payment'),

  /**
   * Enum Shipping Method
   *
   * @type {module:Rapid/Enum/Shipping~Shipping}
   */
  Shipping: require('./Rapid/Enum/Shipping'),

  /**
   * Enum Transaction Type
   *
   * @type {module:Rapid/Enum/TransactionType~TransactionType}
   */
  TransactionType: require('./Rapid/Enum/TransactionType'),

  /**
   * Enum Settlement Report Mode
   *
   * @type {module:Rapid/Enum/SettlementReportMode~SettlementReportMode}
   */
  SettlementReportMode: require('./Rapid/Enum/SettlementReportMode')
};

/**
 * Class Model
 *
 * @type {module:Rapid/Model~Model}
 */
Rapid.Model = Model;

module.exports = Rapid;
