'use strict';

require('dotenv').config({silent: true});

var test = require('blue-tape'),
  _ = require('lodash');

test('Client', function (t) {

  var Rapid = require('../../lib/Rapid'),
    Model = Rapid.Model,
    Method = Rapid.Enum.Method,
    request = require('./../data/request'),
    apiKey = process.env.API_KEY || '60CF3Ce97nRS1Z1Wp5m9kMmzHHEh8Rkuj31QCtVxjPWGYA9FymyqsK0Enm1P6mHJf0THbR',
    apiPassword = process.env.API_PASSWORD || 'API-P4ss';

  var convertToDot = function (object) {

    var result = {};

    var convertRecursively = function (object, current) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          var value = object[key];
          var newKey = current ? current + "." + key : key;
          if (value && typeof value === 'object') {
            convertRecursively(value, newKey);
          } else {
            result[newKey] = value;
          }
        }
      }
    };
    convertRecursively(object);

    return result;
  };

  var assertResponseBasic = function (test, response) {
    test.ok(response instanceof Model, 'should be an instance of Model');
    test.ok(typeof response.getErrors === 'function', 'should have method getErrors');
    test.ok(response.getErrors() instanceof Array, 'should be an Array');
    test.ok(response.getErrors().length === 0, 'should be empty');
  };

  var assertResponseError = function (test, response) {
    test.ok(response instanceof Model, 'should be an instance of Model');
    test.ok(typeof response.getErrors === 'function', 'should have method getErrors');
    test.ok(response.getErrors() instanceof Array, 'should be an Array');
    test.ok(response.getErrors().length > 0, 'should not be empty');
  };

  var assertResponseContains = function (test, expected, actual) {
    var flattenedExpectation = convertToDot(expected);

    var skipKeys = [
      'Method',
      'Capture',
      'Customer.CardDetails.Number',
      'Customer.CardDetails.CVN',
      'RedirectUrl',
      'CancelUrl',
      'TransactionType'
    ];

    for (var key in flattenedExpectation) {
      if (skipKeys.indexOf(key) >= 0) {
        continue;
      }
      if (flattenedExpectation.hasOwnProperty(key)) {
        test.equals(_.get(actual, key), flattenedExpectation[key]);
      }
    }
  };

  var assertResponseHasAttribute = function (test, response, attribute) {
    test.ok(response.has(attribute), 'should have attribute ' + attribute);
    test.ok(response.get(attribute), 'attribute ' + attribute + ' should not be empty');
  };

  t.test('#setCredential()', function (t) {
    [
      [],
      [null],
      [null, null],
      ['foo'],
      ['foo', null],
      [null, 'bar'],
      ['foo', 'bar']
    ].forEach(function (testCase) {
        t.test('invalid credential should return rejected promise', function (t) {
          return Rapid.createClient.apply(null, testCase)
            .createTransaction(Method.DIRECT, request.directTransactionBasic)
            .catch(function (reason) {
              assertResponseError(t, reason);
              return reason;
            });
        });
      });
  });

  t.test('#createTransaction()', function (t) {
    var client = Rapid.createClient(apiKey, apiPassword);

    /*
     Direct Transaction
     */
    [
      [Method.DIRECT, request.directTransactionBasic],
      [Method.DIRECT, request.directTransactionCaptureOn],
      [Method.DIRECT, request.directTransactionCaptureOff]
    ].forEach(function (testCase) {
        t.test('create direct connection transaction should return a fulfilled promise', function (t) {
          return client.createTransaction.apply(client, testCase)
            .then(function (response) {
              assertResponseBasic(t, response);
              assertResponseContains(t, testCase[1], response.attributes);
              assertResponseHasAttribute(t, response, 'AuthorisationCode');
              assertResponseHasAttribute(t, response, 'TransactionID');
              assertResponseHasAttribute(t, response, 'TransactionStatus');
              return response;
            });
        });
      });

    /*
     Responsive Shared
     */
    // We cannot create responsive shared token via script
    [
      [Method.RESPONSIVE_SHARED, request.responsiveSharedPageCaptureOnTokenOff],
      [Method.RESPONSIVE_SHARED, request.responsiveSharedPageCaptureOff]
    ].forEach(function (testCase) {
        t.test('create responsive shared transaction should return a fulfilled promise', function (t) {
          return client.createTransaction.apply(client, testCase)
            .then(function (response) {
              assertResponseBasic(t, response);
              assertResponseContains(t, testCase[1], response.attributes);
              assertResponseHasAttribute(t, response, 'SharedPaymentUrl');
              assertResponseHasAttribute(t, response, 'AccessCode');
              assertResponseHasAttribute(t, response, 'FormActionURL');
              return response;
            });
        });
      });

    /*
     Transparent Redirect
     */
    // We cannot create transparent redirect token via script
    [
      [Method.TRANSPARENT_REDIRECT, request.transparentRedirectCaptureOnTokenOff],
      [Method.TRANSPARENT_REDIRECT, request.transparentRedirectCaptureOff]
    ].forEach(function (testCase) {
        t.test('create responsive shared transaction should return a fulfilled promise', function (t) {
          return client.createTransaction.apply(client, testCase)
            .then(function (response) {
              assertResponseBasic(t, response);
              assertResponseContains(t, testCase[1], response.attributes);
              assertResponseHasAttribute(t, response, 'AccessCode');
              assertResponseHasAttribute(t, response, 'FormActionURL');
              return response;
            });
        });
      });

    /*
     Authorisation
     */
    t.test('create authorisation transaction should return a fulfilled promise', function (t) {
      return client.createTransaction(Method.DIRECT, request.directTransactionCaptureOff)
        .then(function (response) {
          return client.createTransaction(Method.AUTHORISATION, {
            'Payment': {
              'TotalAmount': 1000
            },
            'TransactionId': response.get('TransactionID')
          });
        })
        .then(function (response) {
          assertResponseBasic(t, response);
          assertResponseHasAttribute(t, response, 'ResponseCode');
          assertResponseHasAttribute(t, response, 'ResponseMessage');
          assertResponseHasAttribute(t, response, 'TransactionID');
          assertResponseHasAttribute(t, response, 'TransactionStatus');
          return response;
        });
    });

    /*
     Wallet
     */
    // We cannot create wallet id from test script

    /*
     Invalid
     */
    t.test('create invalid transaction should return a rejected promise', function (t) {
      var response = client.createTransaction('invalid method', {});
      return response.catch(function (reason) {
        assertResponseError(t, reason);
      });
    });
  });
  /* Settlement Search */
  t.test('#settlementSearch()', function (t) {
    var client = Rapid.createClient(apiKey, apiPassword);
    [
      [request.settlementSearchQueryBasic]
    ].forEach(function (testCase) {
      t.test('settlement search should return a fulfilled promise', function (t) {
        return client.settlementSearch.apply(client, testCase)
          .then(function (response){
            assertResponseBasic(t, response);
            assertResponseHasAttribute(t, response, 'SettlementSummaries');
            assertResponseHasAttribute(t, response, 'SettlementTransactions');
            return response;
          });
      });
    });
  });
});
