'use strict';
var rp = require('request-promise'),
  eut = require('express-uri-template'),
  pjson = require('../../package.json');

/**
 * @namespace
 */
var Service = {};

Service.API_ACCESS_CODE = 'AccessCodes';
Service.API_ACCESS_CODE_QUERY = 'AccessCode/:accessCode';
Service.API_ACCESS_CODE_SHARED = 'AccessCodesShared';
Service.API_CANCEL_AUTHORISATION = 'CancelAuthorisation';
Service.API_CAPTURE_PAYMENT = 'CapturePayment';
Service.API_CUSTOMER_QUERY = 'Customer/:tokenCustomerId';
Service.API_TRANSACTION = 'Transaction';
Service.API_TRANSACTION_INVOICE_NUMBER_QUERY = 'Transaction/InvoiceNumber/:invoiceNumber';
Service.API_TRANSACTION_INVOICE_REFERENCE_QUERY = 'Transaction/InvoiceRef/:invoiceReference';
Service.API_TRANSACTION_QUERY = 'Transaction/:reference';
Service.API_TRANSACTION_REFUND = 'Transaction/:transactionId/Refund';
Service.API_SETTLEMENT_SEARCH = "Search/Settlement";

var key, password, baseUrl;

Object.defineProperties(Service, {

  /**
   * @property {String} key API Key
   * @memberOf Service
   */
  key: {
    get: function () {
      return key;
    },
    set: function (newKey) {
      key = newKey;
    }
  },

  /**
   * @property {String} password API Password
   * @memberOf Service
   */
  password: {
    get: function () {
      return password;
    },
    set: function (newPassword) {
      password = newPassword;
    }
  },

  /**
   * @property {String} baseUrl API Base URL
   * @memberOf Service
   */
  baseUrl: {
    get: function () {
      return baseUrl;
    },
    set: function (newBaseUrl) {
      baseUrl = newBaseUrl;
    }
  }
});

// <editor-fold desc="Internal Functions">

function parseUri(uri) {
  if (uri instanceof Array) {
    uri = eut(uri[0], uri[1]);
  }

  return baseUrl + uri;
}

function makeRequest(method, uri, data, qs) {
  var userAgent = 'eWAY SDK NodeJS ' + pjson.version;
  var options = {
    url: parseUri(uri),
    method: method,
    headers: {
      'User-Agent': userAgent
    },
    body: data,
    json: true,
    qs: qs
  };
  if (key && password) {
    options.auth = {
      user: key,
      pass: password
    };
  }
  return rp(options);
}

function requestPost(uri, data, qs) {
  return makeRequest('POST', uri, data, qs);
}

function requestGet(uri, qs) {
  return makeRequest('GET', uri, undefined, qs);
}

// </editor-fold>

/**
 * Send POST request to transaction endpoint
 *
 * @param {Object} transaction Transaction detail
 * @return {(Promise.<Object>|Object)}
 */
Service.postTransaction = function (transaction) {
  return requestPost(Service.API_TRANSACTION, transaction);
};

/**
 * Send POST request to access code shared endpoint
 *
 * @param {Object} transaction Transaction detail
 * @return {(Promise.<Object>|Object)}
 */
Service.postAccessCodeShared = function (transaction) {
  return requestPost(Service.API_ACCESS_CODE_SHARED, transaction);
};

/**
 * Send POST request to access code endpoint
 *
 * @param {Object} transaction Transaction detail
 * @return {(Promise.<Object>|Object)}
 */
Service.postAccessCode = function (transaction) {
  return requestPost(Service.API_ACCESS_CODE, transaction);
};

/**
 * Send POST request to capture payment endpoint
 *
 * @param {Object} transaction Transaction object
 * @return {(Promise.<Object>|Object)}
 */
Service.postCapturePayment = function (transaction) {
  return requestPost(Service.API_CAPTURE_PAYMENT, transaction);
};

/**
 * Send GET request to transaction query endpoint
 *
 * @param {String} reference Transaction reference
 * @return {(Promise.<Object>|Object)}
 */
Service.getTransaction = function (reference) {
  return requestGet([Service.API_TRANSACTION_QUERY, {reference: reference}]);
};

/**
 * Send GET request to transaction invoice number query endpoint
 *
 * @param {String} invoiceNumber Invoice number
 * @return {(Promise.<Object>|Object)}
 */
Service.getTransactionInvoiceNumber = function (invoiceNumber) {
  return requestGet([Service.API_TRANSACTION_INVOICE_NUMBER_QUERY, {invoiceNumber: invoiceNumber}]);
};

/**
 * Send GET request to transaction invoice reference query endpoint
 *
 * @param {String} invoiceReference Invoice number
 * @return {(Promise.<Object>|Object)}
 */
Service.getTransactionInvoiceReference = function (invoiceReference) {
  return requestGet([Service.API_TRANSACTION_INVOICE_REFERENCE_QUERY, {invoiceReference: invoiceReference}]);
};

/**
 * Send GET request to customer query endpoint
 *
 * @param {String} tokenCustomerId Token Customer ID
 * @return {(Promise.<Object>|Object)}
 */
Service.getCustomer = function (tokenCustomerId) {
  return requestGet([Service.API_CUSTOMER_QUERY, {tokenCustomerId: tokenCustomerId}]);
};

/**
 * Send POST request to refund endpoint
 *
 * @param {String} transactionId Transaction ID
 * @param {Object} refund Refund detail
 * @return {(Promise.<Object>|Object)}
 */
Service.postTransactionRefund = function (transactionId, refund) {
  return requestPost([Service.API_TRANSACTION_REFUND, {transactionId: transactionId}], refund);
};

/**
 * Send POST request to cancel authorisation endpoint
 *
 * @param {Object} refund Refund detail
 * @return {(Promise.<Object>|Object)}
 */
Service.postCancelAuthorisation = function (refund) {
  return requestPost(Service.API_CANCEL_AUTHORISATION, refund);
};
/**
 * Send GET request to settlement search endpoint
 *
 * @param {Object} query options { ReportMode, SettlementDate, StartDate, EndDate, CardType, Currency, Page, PageSize }
 * @return {(Promise.<Object>|Object)}
 */
Service.getSettlementSearch = function (query) {
  return requestGet(Service.API_SETTLEMENT_SEARCH, query);
};
module.exports = Service;
