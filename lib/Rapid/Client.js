'use strict';

/**
 * eWAY Rapid SDK client.
 *
 * @module Rapid/Client
 * @see module:Rapid/Client
 */

var Promise = require('bluebird'),
  ClientError = require('./Enum/ClientError'),
  Method = require('./Enum/Method'),
  Payment = require('./Enum/Payment'),
  TransactionType = require('./Enum/TransactionType'),
  Model = require('./Model'),
  Service = require('./Service'),
  slice = Array.prototype.slice;

// <editor-fold desc="Internal Functions">

var invoke = function (requestPromise) {
  var that = this;

  // this will be bound to Client instance later in the Client constructor
  if (!this.isValid) {
    return Promise.reject(new Model({Errors: this.errors.join(',')}));
  }

  return requestPromise.apply(null, slice.call(arguments, 1))
    .then(function (response) {
      return new Model(response);
    }, function (reason) {
      var errors = that.errors;
      if (reason.statusCode >= 400 && reason.statusCode < 500) {
        errors.push(ClientError.HTTP_CLIENT_ERROR);
      } else if (reason.statusCode >= 500 && reason.statusCode < 600) {
        errors.push(ClientError.HTTP_SERVER_ERROR);
      } else {
        errors.push(ClientError.EXCEPTION);
      }
      return Promise.reject(new Model({Errors: errors.join(',')}));
    });
};

function createTransaction(method, transaction) {
  if (!(transaction instanceof Model)) {
    transaction = new Model(transaction);
  }

  if (!transaction.has('Capture')) {
    transaction.set('Capture', true);
  }

  switch (method) {

    case Method.WALLET:
    case Method.DIRECT:
      if (transaction.has('Capture') && !transaction.get('Capture')) {
        transaction.set('Method', Payment.AUTHORISE);
      } else {
        transaction.set('Method', Payment.PROCESS_PAYMENT);
      }
      return Service.postTransaction(transaction.serialize());

    case Method.RESPONSIVE_SHARED:
      if (transaction.has('Capture') && !transaction.get('Capture')) {
        transaction.set('Method', Payment.AUTHORISE);
      } else {
        if (transaction.has('Customer.TokenCustomerId') ||
             transaction.has('SaveCustomer') && transaction.get('SaveCustomer')) {
          transaction.set('Method', Payment.TOKEN_PAYMENT);
        } else {
          transaction.set('Method', Payment.PROCESS_PAYMENT);
        }
      }
      return Service.postAccessCodeShared(transaction.serialize());

    case Method.TRANSPARENT_REDIRECT:
      if (transaction.has('Capture') && !transaction.get('Capture')) {
        transaction.set('Method', Payment.AUTHORISE);
      } else {
        if (transaction.has('Customer.TokenCustomerId') ||
             transaction.has('SaveCustomer') && transaction.get('SaveCustomer')) {
          transaction.set('Method', Payment.TOKEN_PAYMENT);
        } else {
          transaction.set('Method', Payment.PROCESS_PAYMENT);
        }
      }
      return Service.postAccessCode(transaction.serialize());

    case Method.AUTHORISATION:
      return Service.postCapturePayment(transaction.serialize());

    default:
      return Promise.reject(ClientError.INVALID_ARGUMENT);
  }
}

function queryTransaction(reference) {
  return Service.getTransaction(reference);
}

function queryInvoiceNumber(invoiceNumber) {
  return Service.getTransactionInvoiceNumber(invoiceNumber);
}

function queryInvoiceReference(invoiceReference) {
  return Service.getTransactionInvoiceReference(invoiceReference);
}

function createCustomer(method, customer) {
  if (!(customer instanceof Model)) {
    customer = new Model(customer);
  }

  var transaction = {
    Customer: customer.serialize(),
    Method: Payment.CREATE_TOKEN_CUSTOMER,
    TransactionType: TransactionType.PURCHASE
  };
  if (customer.has('RedirectUrl')) {
    transaction.RedirectUrl = customer.get('RedirectUrl');
  }
  if (customer.has('CancelUrl')) {
    transaction.CancelUrl = customer.get('CancelUrl');
  }
  transaction = new Model(transaction);

  switch (method) {

    case Method.DIRECT:
      return Service.postTransaction(transaction.serialize());

    case Method.RESPONSIVE_SHARED:
      transaction.set('Payment', {TotalAmount: 0});
      return Service.postAccessCodeShared(transaction.serialize());

    case Method.TRANSPARENT_REDIRECT:
      transaction.set('Payment', {TotalAmount: 0});
      return Service.postAccessCode(transaction.serialize());

    default:
      return Promise.reject(ClientError.INVALID_ARGUMENT);
  }
}

function updateCustomer(method, customer) {
  if (!(customer instanceof Model)) {
    customer = new Model(customer);
  }

  var transaction = {
    Customer: customer.serialize(),
    Payment: {TotalAmount: 0},
    Method: Payment.UPDATE_TOKEN_CUSTOMER,
    TransactionType: TransactionType.PURCHASE
  };
  if (customer.has('RedirectUrl')) {
    transaction.RedirectUrl = customer.get('RedirectUrl');
  }
  if (customer.has('CancelUrl')) {
    transaction.CancelUrl = customer.get('CancelUrl');
  }
  transaction = new Model(transaction);

  switch (method) {

    case Method.DIRECT:
      return Service.postTransaction(transaction.serialize());

    case Method.RESPONSIVE_SHARED:
      return Service.postAccessCodeShared(transaction.serialize());

    case Method.TRANSPARENT_REDIRECT:
      return Service.postAccessCode(transaction.serialize());

    default:
      return Promise.reject(ClientError.INVALID_ARGUMENT);
  }
}

function queryCustomer(tokenCustomerId) {
  return Service.getCustomer(tokenCustomerId);
}

function refund(refundDetail) {
  if (!(refundDetail instanceof Model)) {
    refundDetail = new Model(refundDetail);
  }
  return Service.postTransactionRefund(refundDetail.get('Refund.TransactionID'), refundDetail.serialize());
}

function cancelTransaction(transactionId) {
  var refund = {
    TransactionID: transactionId
  };
  return Service.postCancelAuthorisation(refund);
}

function settlementSearch(query)
{
  return Service.getSettlementSearch(query);
}


// </editor-fold>

/**
 * Create new Client
 *
 * @constructor
 * @param {String} key API Key
 * @param {String} password API Password
 * @param {String} [endpoint=sandbox] API Endpoint, can be production/sandbox/actual URL
 */
function Client(key, password, endpoint) {
  if (!(this instanceof Client)) {
    return new Client(key, password, endpoint);
  }

  endpoint = typeof endpoint !== 'undefined' ? endpoint : Client.MODE_SANDBOX;

  var _key = key,
    _password = password,
    _endpoint = endpoint,
    _errors = [],
    _isValid = false;

  var emptyErrors = function () {
    _errors = [];
  };

  var addError = function (errorCode) {
    if (_errors.indexOf(errorCode) < 0) {
      _errors.push(errorCode);
    }
    _isValid = false;
  };

  var validate = function () {
    _isValid = true;
    if (!_key || !_password) {
      addError(ClientError.INVALID_CREDENTIAL);
    } else if (!_endpoint) {
      addError(ClientError.INVALID_ENDPOINT);
    }
    if (_errors.length > 0) {
      _isValid = false;
    }
  };

  Object.defineProperties(this, {

    /**
     * @member {String} module:Rapid/Client~Client#key
     */
    key: {
      get: function () {
        return _key;
      },
      set: function (key) {
        emptyErrors();
        _key        = key;
        Service.key = _key;
        validate();
      }
    },

    /**
     * @member {String} module:Rapid/Client~Client#password
     */
    password: {
      get: function () {
        return _password;
      },
      set: function (password) {
        emptyErrors();
        _password        = password;
        Service.password = _password;
        validate();
      }
    },

    /**
     * @member {String} module:Rapid/Client~Client#endpoint
     */
    endpoint: {
      get: function () {
        return _endpoint;
      },
      set: function (endpoint) {
        emptyErrors();
        if (endpoint) {
          switch (endpoint.toLowerCase()) {
            case Client.MODE_SANDBOX:
              _endpoint = Client.ENDPOINT_SANDBOX;
              break;
            case Client.MODE_PRODUCTION:
              _endpoint = Client.ENDPOINT_PRODUCTION;
              break;
            default:
              _endpoint = endpoint;
          }
        } else {
          _endpoint = endpoint;
        }
        Service.baseUrl = _endpoint;
        validate();
      }
    },

    /**
     * @member {Boolean} module:Rapid/Client~Client#isValid
     */
    isValid: {
      get: function () {
        return _isValid;
      }
    },

    /**
     * @member {Array} module:Rapid/Client~Client#errors
     */
    errors: {
      get: function () {
        return _errors;
      }
    }
  });

  this.setCredential(key, password);
  this.endpoint = endpoint;
}

/**
 * Client name
 *
 * @constant
 * @type {String}
 * @default
 */
Client.NAME = 'Rapid NodeJS SDK';

/**
 * Client version
 *
 * @constant
 * @type {String}
 * @default
 */
Client.VERSION = '1.0.0';

/**
 * Mode sandbox
 *
 * @constant
 * @type {String}
 * @default
 */
Client.MODE_SANDBOX = 'sandbox';

/**
 * Mode production
 *
 * @constant
 * @type {String}
 * @default
 */
Client.MODE_PRODUCTION = 'production';

/**
 * Sandbox endpoint
 *
 * @constant
 * @type {String}
 * @default
 */
Client.ENDPOINT_SANDBOX = 'https://api.sandbox.ewaypayments.com/';

/**
 * Production endpoint
 *
 * @constant
 * @type {String}
 * @default
 */
Client.ENDPOINT_PRODUCTION = 'https://api.ewaypayments.com/';

/**
 * Set credentials for HTTP requests
 *
 * @param {String} key API Key
 * @param {String} password API Password
 */
Client.prototype.setCredential = function (key, password) {
  this.key = key;
  this.password = password;
};

/**
 * Create new transaction
 *
 * @param {String} method Enum value for API [Method]{@link module:Rapid/Enum~Method}
 * @param {Object} transaction Transaction detail
 * @return {(Promise.<Object>|Object)}
 */
Client.prototype.createTransaction = function (method, transaction) {
  return invoke.call(this, createTransaction, method, transaction);
};

/**
 * Query transaction detail by Transaction ID or Access Code
 *
 * @param {String} reference Access Code or Transaction ID
 * @return {(Promise.<Object>|Object)}
 */
Client.prototype.queryTransaction = function (reference) {
  return invoke.call(this, queryTransaction, reference);
};

/**
 * Query transaction detail by Invoice Number
 *
 * @param {String} invoiceNumber Invoice Number
 * @return {(Promise.<Object>|Object)}
 */
Client.prototype.queryInvoiceNumber = function (invoiceNumber) {
  return invoke.call(this, queryInvoiceNumber, invoiceNumber);
};

/**
 * Query transaction detail by Invoice Reference
 *
 * @param {String} invoiceReference Invoice Reference
 * @return {(Promise.<Object>|Object)}
 */
Client.prototype.queryInvoiceReference = function (invoiceReference) {
  return invoke.call(this, queryInvoiceReference, invoiceReference);
};

/**
 * Create new customer
 *
 * @param {String} method Enum value for API [Method]{@link module:Rapid/Enum~Method}
 * @param {Object} customer Customer detail
 * @return {(Promise.<Object>|Object)}
 */
Client.prototype.createCustomer = function (method, customer) {
  return invoke.call(this, createCustomer, method, customer);
};

/**
 * Update customer info
 *
 * @param {String} method Enum value for API [Method]{@link module:Rapid/Enum~Method}
 * @param {Object} customer Customer detail
 * @return {(Promise.<Object>|Object)}
 */
Client.prototype.updateCustomer = function (method, customer) {
  return invoke.call(this, updateCustomer, method, customer);
};

/**
 * Query customer detail by Token Customer ID
 *
 * @param {String} tokenCustomerId Token Customer ID
 * @return {(Promise.<Object>|Object)}
 */
Client.prototype.queryCustomer = function (tokenCustomerId) {
  return invoke.call(this, queryCustomer, tokenCustomerId);
};

/**
 * Refund captured transaction
 *
 * @param {Object} refundDetail Refund detail
 * @return {(Promise.<Object>|Object)}
 */
Client.prototype.refund = function (refundDetail) {
  return invoke.call(this, refund, refundDetail);
};

/**
 * Cancel authorized transaction
 *
 * @param {String} transactionId Transaction ID
 * @return {(Promise.<Object>|Object)}
 */
Client.prototype.cancelTransaction = function (transactionId) {
  return invoke.call(this, cancelTransaction, transactionId);
};
/**
 * Search Settlements
 *
 * @param {Object} query Options { ReportMode, SettlementDate, StartDate, EndDate, CardType, Currency, Page, PageSize }
 * @return {(Promise.<Object>|Object)}
 */
Client.prototype.settlementSearch = function (query) {
  return invoke.call(this, settlementSearch, query);
};


module.exports = Client;
