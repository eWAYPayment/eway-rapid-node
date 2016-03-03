'use strict';

var test = require('blue-tape'),
  sinon = require('sinon'),
  rewire = require('rewire'),
  Promise = require('bluebird');


test('Client', function (t) {


  var Client = require('../../lib/Rapid/Client'),
    Model = require('../../lib/Rapid/Model'),
    Method = require('../../lib/Rapid/Enum/Method'),
    request = require('./../data/request'),
    response = require('./../data/response'),
    key = '60CF3Ce97nRS1Z1Wp5m9kMmzHHEh8Rkuj31QCtVxjPWGYA9FymyqsK0Enm1P6mHJf0THbR',
    password = 'API-P4ss';

  var setup = function () {
    var MockedClient = rewire('../../lib/Rapid/Client'),
      ServiceMock = {};

    /*
     * Mock service's methods
     */
    var postTransactionStub = sinon.stub();
    postTransactionStub.withArgs(request.serviceDirectTransactionCaptureOn).returns(Promise.resolve(response.postTransactionCaptureOn));
    postTransactionStub.withArgs(request.serviceDirectTransactionCaptureOff).returns(Promise.resolve(response.postTransactionCaptureOff));
    postTransactionStub.withArgs(request.serviceWalletOn).returns(Promise.resolve(response.postTransactionWalletOn));
    postTransactionStub.withArgs(request.serviceWalletOff).returns(Promise.resolve(response.postTransactionWalletOff));
    postTransactionStub.withArgs(request.serviceCreateCustomerDirectTransaction).returns(Promise.resolve(response.postTransactionCreateCustomer));
    postTransactionStub.withArgs(request.serviceUpdateCustomerDirectTransaction).returns(Promise.resolve(response.postTransactionUpdateCustomer));
    ServiceMock.postTransaction = postTransactionStub;

    var postAccessCodeSharedStub = sinon.stub();
    postAccessCodeSharedStub.withArgs(request.serviceResponsiveSharedPageCaptureOnTokenOn).returns(Promise.resolve(response.postAccessCodeSharedCaptureOnTokenOn));
    postAccessCodeSharedStub.withArgs(request.serviceResponsiveSharedPageCaptureOnTokenOff).returns(Promise.resolve(response.postAccessCodeSharedCaptureOnTokenOff));
    postAccessCodeSharedStub.withArgs(request.serviceResponsiveSharedPageSaveCustomer).returns(Promise.resolve(response.postAccessCodeSharedCaptureOnTokenOff));
    postAccessCodeSharedStub.withArgs(request.serviceResponsiveSharedPageCaptureOff).returns(Promise.resolve(response.postAccessCodeSharedCaptureOff));
    postAccessCodeSharedStub.withArgs(request.serviceCreateCustomerResponsiveShared).returns(Promise.resolve(response.postAccessCodeSharedCreateCustomer));
    postAccessCodeSharedStub.withArgs(request.serviceUpdateCustomerResponsiveShared).returns(Promise.resolve(response.postAccessCodeSharedUpdateCustomer));
    ServiceMock.postAccessCodeShared = postAccessCodeSharedStub;

    var postAccessCodeStub = sinon.stub();
    postAccessCodeStub.withArgs(request.serviceTransparentRedirectCaptureOnTokenOn).returns(Promise.resolve(response.postAccessCodeCaptureOnTokenOn));
    postAccessCodeStub.withArgs(request.serviceTransparentRedirectCaptureOnTokenOff).returns(Promise.resolve(response.postAccessCodeCaptureOnTokenOff));
    postAccessCodeStub.withArgs(request.serviceTransparentRedirectSaveCustomer).returns(Promise.resolve(response.postAccessCodeCaptureOnTokenOff));
    postAccessCodeStub.withArgs(request.serviceTransparentRedirectCaptureOff).returns(Promise.resolve(response.postAccessCodeCaptureOff));
    postAccessCodeStub.withArgs(request.serviceCreateCustomerTransparentRedirect).returns(Promise.resolve(response.postAccessCodeCreateCustomer));
    postAccessCodeStub.withArgs(request.serviceUpdateCustomerTransparentRedirect).returns(Promise.resolve(response.postAccessCodeUpdateCustomer));
    ServiceMock.postAccessCode = postAccessCodeStub;

    ServiceMock.postCapturePayment = sinon.stub().withArgs(request.serviceAuthorisation).returns(Promise.resolve(response.postCapturePayment));

    ServiceMock.getTransaction = sinon.stub().withArgs(request.transactionId).returns(Promise.resolve(response.getTransaction));

    ServiceMock.getTransactionInvoiceNumber = sinon.stub().withArgs(request.transactionInvoiceNumber).returns(Promise.resolve(response.getTransactionInvoiceNumber));

    ServiceMock.getTransactionInvoiceReference = sinon.stub().withArgs(request.transactionInvoiceReference).returns(Promise.resolve(response.getTransactionInvoiceReference));

    ServiceMock.getCustomer = sinon.stub().withArgs(request.tokenCustomerId).returns(Promise.resolve(response.getCustomer));

    ServiceMock.postTransactionRefund = sinon.stub().withArgs(request.transactionId, request.refund).returns(Promise.resolve(response.postTransactionRefund));

    ServiceMock.postCancelAuthorisation = sinon.stub().withArgs(request.transactionId).returns(Promise.resolve(response.postCancelAuthorisation));

    ServiceMock.getSettlementSearch = sinon.stub().withArgs(request.settlementSearchQueryBasic).returns(Promise.resolve(response.getSettlementSearchBasic));
    /*
     * Inject mocked service
     */
    MockedClient.__set__({
      Service: ServiceMock
    });

    /*
     * Instantiate new client with mocked service
     */
    return new MockedClient(key, password);
  };

  t.test('#key', function (t) {
    var client;
    var keys = [null, '', 'foo'];

    t.plan(keys.length * 2);

    keys.forEach(function (key) {
      client = new Client(key, '');
      t.equal(client.key, key);
    });

    client = new Client();

    keys.forEach(function (key) {
      client.key = key;
      t.equal(client.key, key);
    });
  });


  t.test('#password', function (t) {
    var client;
    var passwords = [null, '', 'foo'];

    t.plan(passwords.length * 2);

    passwords.forEach(function (password) {
      client = new Client('', password);
      t.equal(client.password, password);
    });

    client = new Client();

    passwords.forEach(function (password) {
      client.password = password;
      t.equal(client.password, password);
    });
  });


  t.test('#endpoint', function (t) {
    var client;
    var testCases = [
      {endpoint: null, expected: null},
      {endpoint: '', expected: ''},
      {endpoint: 'sandbox', expected: Client.ENDPOINT_SANDBOX},
      {endpoint: 'production', expected: Client.ENDPOINT_PRODUCTION},
      {endpoint: 'SaNdBoX', expected: Client.ENDPOINT_SANDBOX},
      {endpoint: 'pRoDuCtIoN', expected: Client.ENDPOINT_PRODUCTION},
      {endpoint: Client.MODE_SANDBOX, expected: Client.ENDPOINT_SANDBOX},
      {endpoint: Client.MODE_PRODUCTION, expected: Client.ENDPOINT_PRODUCTION},
      {endpoint: 'http://www.google.com', expected: 'http://www.google.com'}
    ];

    t.plan(testCases.length * 2 + 1);

    client = new Client('', '');
    t.equal(client.endpoint, Client.ENDPOINT_SANDBOX);

    testCases.forEach(function (testCase) {
      client = new Client('', '', testCase.endpoint);
      t.equal(client.endpoint, testCase.expected);
    });

    client = new Client();

    testCases.forEach(function (testCase) {
      client.endpoint = testCase.endpoint;
      t.equal(client.endpoint, testCase.expected);
    });
  });


  t.test('#isValid', function (t) {
    var client;
    var validTestCases = [
      {args: ['foo', 'bar']},
      {args: ['foo', 'bar', 'sandbox']},
      {args: ['foo', 'bar', 'http://www.google.com']}
    ];

    var invalidTestCases = [
      {args: []},
      {args: ['']},
      {args: ['', '']},
      {args: ['', '', '']},
      {args: ['', 'bar', 'sandbox']},
      {args: ['foo', '', 'sandbox']},
      {args: ['foo', 'bar', '']}
    ];

    t.plan(validTestCases.length * 4 + invalidTestCases.length * 4);

    validTestCases.forEach(function (testCase) {
      client = Client.apply(null, testCase.args);
      t.ok(client.hasOwnProperty('isValid'), 'should have property isValid');
      t.ok(client.isValid, 'should be valid');
      t.equal(client.key, testCase.args[0]);
      t.equal(client.password, testCase.args[1]);
    });

    invalidTestCases.forEach(function (testCase) {
      client = Client.apply(null, testCase.args);
      t.ok(client.hasOwnProperty('isValid'), 'should have property isValid');
      t.notOk(client.isValid, 'should not be valid');
      t.equal(client.key, testCase.args[0]);
      t.equal(client.password, testCase.args[1]);
    });
  });


  t.test('#setCredential', function (t) {
    var client = new Client();
    var testCases = [
      {args: []},
      {args: ['']},
      {args: ['', '']},
      {args: ['foo', '']},
      {args: ['', 'bar']},
      {args: ['foo', 'bar']}
    ];

    t.plan(testCases.length * 2);

    testCases.forEach(function (testCase) {
      client.setCredential.apply(client, testCase.args);
      t.equal(client.key, testCase.args[0]);
      t.equal(client.password, testCase.args[1]);
    });
  });


  t.test('#createTransaction()', function (t) {
    var client = setup();

    var fulfilledTestCases = [
      {
        args: [Method.DIRECT, request.directTransactionCaptureOn],
        expected: response.postTransactionCaptureOn
      },
      {
        args: [Method.DIRECT, request.directTransactionCaptureOff],
        expected: response.postTransactionCaptureOff
      },
      {
        args: [Method.RESPONSIVE_SHARED, request.responsiveSharedPageCaptureOnTokenOn],
        expected: response.postAccessCodeSharedCaptureOnTokenOn
      },
      {
        args: [Method.RESPONSIVE_SHARED, request.responsiveSharedPageCaptureOnTokenOff],
        expected: response.postAccessCodeSharedCaptureOnTokenOff
      },
      {
        args: [Method.RESPONSIVE_SHARED, request.responsiveSharedPageSaveCustomer],
        expected: response.postAccessCodeSharedCaptureOnTokenOff
      },
      {
        args: [Method.RESPONSIVE_SHARED, request.responsiveSharedPageCaptureOff],
        expected: response.postAccessCodeSharedCaptureOff
      },
      {
        args: [Method.TRANSPARENT_REDIRECT, request.transparentRedirectCaptureOnTokenOn],
        expected: response.postAccessCodeCaptureOnTokenOn
      },
      {
        args: [Method.TRANSPARENT_REDIRECT, request.transparentRedirectCaptureOnTokenOff],
        expected: response.postAccessCodeCaptureOnTokenOff
      },
      {
        args: [Method.TRANSPARENT_REDIRECT, request.transparentRedirectSaveCustomer],
        expected: response.postAccessCodeCaptureOnTokenOff
      },
      {
        args: [Method.TRANSPARENT_REDIRECT, request.transparentRedirectCaptureOff],
        expected: response.postAccessCodeCaptureOff
      },
      {
        args: [Method.AUTHORISATION, request.authorisation],
        expected: response.postCapturePayment
      },
      {
        args: [Method.WALLET, request.walletCaptureOn],
        expected: response.postTransactionWalletOn
      },
      {
        args: [Method.WALLET, request.walletCaptureOff],
        expected: response.postTransactionWalletOff
      }
    ];


    fulfilledTestCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        return client.createTransaction.apply(client, testCase.args)
          .then(function (response) {
            t.plan(5);
            t.ok(response instanceof Model, 'should be an instance of Model');
            t.ok(typeof response.getErrors === 'function', 'should have method getErrors');
            t.ok(response.getErrors() instanceof Array, 'should be an Array');
            t.ok(response.getErrors().length === 0, 'should be empty');
            t.deepEqual(response.attributes, testCase.expected);
            return response;
          })
          ;
      });
    });


    t.test('should return a rejected promise', function (t) {
      var response = client.createTransaction('invalid method', {});
      return response.catch(function () {
        t.plan(1);
        t.pass('should be a rejected promise');
      });
    });
  });


  t.test('#queryTransaction()', function (t) {
    var client = setup();

    var fulfilledTestCases = [
      {
        args: [request.transactionId],
        expected: response.getTransaction
      }
    ];

    fulfilledTestCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        return client.queryTransaction.apply(client, testCase.args)
          .then(function (response) {
            t.plan(8);
            t.ok(response instanceof Model, 'should be an instance of Model');
            t.ok(typeof response.getErrors === 'function', 'should has method getErrors');
            t.ok(response.getErrors() instanceof Array, 'should be an Array');
            t.ok(response.getErrors().length === 0, 'should be empty');
            var transactions = response.get('Transactions');
            t.ok(transactions instanceof Array, 'should be an Array');
            t.notOk(transactions.length === 0, 'should not be empty');
            t.equal(testCase.args[0], transactions[0].TransactionID);
            t.deepEqual(response.attributes, testCase.expected);
            return response;
          })
          ;
      });
    });
  });


  t.test('#queryInvoiceNumber()', function (t) {
    var client = setup();

    var fulfilledTestCases = [
      {
        args: [request.transactionInvoiceNumber],
        expected: response.getTransactionInvoiceNumber
      }
    ];

    fulfilledTestCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        return client.queryInvoiceNumber.apply(client, testCase.args)
          .then(function (response) {
            t.plan(8);
            t.ok(response instanceof Model, 'should be an instance of Model');
            t.ok(typeof response.getErrors === 'function', 'should has method getErrors');
            t.ok(response.getErrors() instanceof Array, 'should be an Array');
            t.ok(response.getErrors().length === 0, 'should be empty');
            var transactions = response.get('Transactions');
            t.ok(transactions instanceof Array, 'should be an Array');
            t.notOk(transactions.length === 0, 'should not be empty');
            t.equal(testCase.args[0], transactions[0].InvoiceNumber);
            t.deepEqual(response.attributes, testCase.expected);
            return response;
          })
          ;
      });
    });
  });


  t.test('#queryInvoiceReference()', function (t) {
    var client = setup();

    var fulfilledTestCases = [
      {
        args: [request.transactionInvoiceReference],
        expected: response.getTransactionInvoiceReference
      }
    ];

    fulfilledTestCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        return client.queryInvoiceReference.apply(client, testCase.args)
          .then(function (response) {
            t.plan(8);
            t.ok(response instanceof Model, 'should be an instance of Model');
            t.ok(typeof response.getErrors === 'function', 'should has method getErrors');
            t.ok(response.getErrors() instanceof Array, 'should be an Array');
            t.ok(response.getErrors().length === 0, 'should be empty');
            var transactions = response.get('Transactions');
            t.ok(transactions instanceof Array, 'should be an Array');
            t.notOk(transactions.length === 0, 'should not be empty');
            t.equal(testCase.args[0], transactions[0].InvoiceReference);
            t.deepEqual(response.attributes, testCase.expected);
            return response;
          })
          ;
      });
    });
  });

  t.test('#createCustomer()', function (t) {
    var client = setup();

    var fulfilledTestCases = [
      {
        args: [Method.DIRECT, request.createCustomerDirectTransaction],
        expected: response.postTransactionCreateCustomer
      },
      {
        args: [Method.RESPONSIVE_SHARED, request.createCustomerResponsiveShared],
        expected: response.postAccessCodeSharedCreateCustomer
      },
      {
        args: [Method.TRANSPARENT_REDIRECT, request.createCustomerTransparentRedirect],
        expected: response.postAccessCodeCreateCustomer
      }
    ];

    fulfilledTestCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        return client.createCustomer.apply(client, testCase.args)
          .then(function (response) {
            t.plan(5);
            t.ok(response instanceof Model, 'should be an instance of Model');
            t.ok(typeof response.getErrors === 'function', 'should has method getErrors');
            t.ok(response.getErrors() instanceof Array, 'should be an Array');
            t.ok(response.getErrors().length === 0, 'should be empty');
            t.deepEqual(response.attributes, testCase.expected);
            return response;
          })
          ;
      });
    });


    t.test('should return a rejected promise', function (t) {
      var response = client.createCustomer('invalid method', {});
      return response.catch(function () {
        t.plan(1);
        t.pass('should be a rejected promise');
      });
    });
  });

  t.test('#updateCustomer()', function (t) {
    var client = setup();

    var fulfilledTestCases = [
      {
        args: [Method.DIRECT, request.updateCustomerDirectTransaction],
        expected: response.postTransactionUpdateCustomer
      },
      {
        args: [Method.RESPONSIVE_SHARED, request.updateCustomerResponsiveShared],
        expected: response.postAccessCodeSharedUpdateCustomer
      },
      {
        args: [Method.TRANSPARENT_REDIRECT, request.updateCustomerTransparentRedirect],
        expected: response.postAccessCodeUpdateCustomer
      }
    ];


    fulfilledTestCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        return client.updateCustomer.apply(client, testCase.args)
          .then(function (response) {
            t.plan(5);
            t.ok(response instanceof Model, 'should be an instance of Model');
            t.ok(typeof response.getErrors === 'function', 'should has method getErrors');
            t.ok(response.getErrors() instanceof Array, 'should be an Array');
            t.ok(response.getErrors().length === 0, 'should be empty');
            t.deepEqual(response.attributes, testCase.expected);
            return response;
          });
      });
    });


    t.test('should return a rejected promise', function (t) {
      var response = client.updateCustomer('invalid method', {});
      return response.catch(function () {
        t.plan(1);
        t.pass('should be a rejected promise');
      });
    });
  });

  t.test('#queryCustomer()', function (t) {
    var client = setup();

    var fulfilledTestCases = [
      {
        args: [request.tokenCustomerId],
        expected: response.getCustomer
      }
    ];

    fulfilledTestCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        return client.queryCustomer.apply(client, testCase.args)
          .then(function (response) {
            t.plan(8);
            t.ok(response instanceof Model, 'should be an instance of Model');
            t.ok(typeof response.getErrors === 'function', 'should has method getErrors');
            t.ok(response.getErrors() instanceof Array, 'should be an Array');
            t.ok(response.getErrors().length === 0, 'should be empty');
            var customers = response.get('Customers');
            t.ok(customers instanceof Array, 'should be an Array');
            t.notOk(customers.length === 0, 'should not be empty');
            t.equal(testCase.args[0], customers[0].TokenCustomerID);
            t.deepEqual(response.attributes, testCase.expected);
            return response;
          })
          ;
      });
    });
  });

  t.test('#refund()', function (t) {
    var client = setup();

    var fulfilledTestCases = [
      {
        args: [request.refund],
        expected: response.postTransactionRefund
      }
    ];

    fulfilledTestCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        return client.refund.apply(client, testCase.args)
          .then(function (response) {
            t.plan(5);
            t.ok(response instanceof Model, 'should be an instance of Model');
            t.ok(typeof response.getErrors === 'function', 'should has method getErrors');
            t.ok(response.getErrors() instanceof Array, 'should be an Array');
            t.ok(response.getErrors().length === 0, 'should be empty');
            t.deepEqual(response.attributes, testCase.expected);
            return response;
          })
          ;
      });
    });
  });

  t.test('#cancelTransaction()', function (t) {
    var client = setup();

    var fulfilledTestCases = [
      {
        args: [request.transactionId],
        expected: response.postCancelAuthorisation
      }
    ];

    fulfilledTestCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        return client.cancelTransaction.apply(client, testCase.args)
          .then(function (response) {
            t.plan(5);
            t.ok(response instanceof Model, 'should be an instance of Model');
            t.ok(typeof response.getErrors === 'function', 'should has method getErrors');
            t.ok(response.getErrors() instanceof Array, 'should be an Array');
            t.ok(response.getErrors().length === 0, 'should be empty');
            t.deepEqual(response.attributes, testCase.expected);
            return response;
          })
          ;
      });
    });
  });
  t.test('#settlementSearch', function (t) {
    var client = setup();
    var fulfilledTestCases = [
      {
        args: [request.settlementSearchQueryBasic],
        expected: response.getSettlementSearchBasic
      }
    ];

    fulfilledTestCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        return client.settlementSearch.apply(client, testCase.args)
          .then(function (response) {
            t.plan(5);
            t.ok(response instanceof Model, 'should be an instance of Model');
            t.ok(typeof response.getErrors === 'function', 'should has method getErrors');
            t.ok(response.getErrors() instanceof Array, 'should be an Array');
            t.ok(response.getErrors().length === 0, 'should be empty');
            t.deepEqual(response.attributes, testCase.expected);
            return response;
          })
          ;
      });
    });
  });

});
