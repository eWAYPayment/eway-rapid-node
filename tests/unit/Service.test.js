'use strict';

var test = require('blue-tape'),
  nock = require('nock'),
  Service = require('../../lib/Rapid/Service'),
  request = require('./../data/request'),
  response = require('./../data/response'),
  baseUrl = 'http://rapid.eway.local';

nock.disableNetConnect();

function checkFulfilledResponse(t, expected) {
  return function (response) {
    t.plan(1);
    t.deepEqual(response, expected);
    return response;
  };
}


test('Service', function (t) {


  t.test('.key', function (t) {
    var keys = [
      null,
      '',
      'foo'
    ];

    t.plan(keys.length);

    keys.forEach(function (key) {
      Service.key = key;
      t.equal(Service.key, key);
    });
  });


  t.test('.password', function (t) {
    var passwords = [
      null,
      '',
      'bar'
    ];

    t.plan(passwords.length);

    passwords.forEach(function (password) {
      Service.password = password;
      t.equal(Service.password, password);
    });
  });


  t.test('.baseUrl', function (t) {
    var baseUrls = [
      null,
      '',
      'http://www.google.com'
    ];

    t.plan(baseUrls.length);

    baseUrls.forEach(function (baseUrl) {
      Service.baseUrl = baseUrl;
      t.equal(Service.baseUrl, baseUrl);
    });
  });


  t.test('.postTransaction', function (t) {

    var testCases = [
      {
        args: [request.serviceDirectTransactionCaptureOn],
        expected: response.postTransactionCaptureOn
      }
    ];

    testCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        Service.baseUrl = baseUrl + '/';
        nock(baseUrl)
          .post('/Transaction', testCase.args[0])
          .reply(200, testCase.expected);
        return Service.postTransaction.apply(null, testCase.args)
          .then(checkFulfilledResponse(t, testCase.expected));
      });
    });
  });


  t.test('.postAccessCodeShared', function (t) {

    var testCases = [
      {
        args: [request.serviceResponsiveSharedPageCaptureOnTokenOff],
        expected: response.postAccessCodeSharedCaptureOnTokenOff
      }
    ];

    testCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        Service.baseUrl = baseUrl + '/';
        nock(baseUrl)
          .post('/AccessCodesShared', testCase.args[0])
          .reply(200, testCase.expected);
        return Service.postAccessCodeShared.apply(null, testCase.args)
          .then(checkFulfilledResponse(t, testCase.expected));
      });
    });
  });


  t.test('.postAccessCode', function (t) {

    var testCases = [
      {
        args: [request.serviceTransparentRedirectCaptureOnTokenOff],
        expected: response.postAccessCodeCaptureOnTokenOff
      }
    ];

    testCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        Service.baseUrl = baseUrl + '/';
        nock(baseUrl)
          .post('/AccessCodes', testCase.args[0])
          .reply(200, testCase.expected);
        return Service.postAccessCode.apply(null, testCase.args)
          .then(checkFulfilledResponse(t, testCase.expected));
      });
    });
  });


  t.test('.postCapturePayment', function (t) {

    var testCases = [
      {
        args: [request.serviceAuthorisation],
        expected: response.postCapturePayment
      }
    ];

    testCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        Service.baseUrl = baseUrl + '/';
        nock(baseUrl)
          .post('/CapturePayment', testCase.args[0])
          .reply(200, testCase.expected);
        return Service.postCapturePayment.apply(null, testCase.args)
          .then(checkFulfilledResponse(t, testCase.expected));
      });
    });
  });


  t.test('.getTransaction', function (t) {

    var testCases = [
      {
        args: [request.transactionId],
        expected: response.getTransaction
      }
    ];

    testCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        Service.baseUrl = baseUrl + '/';
        nock(baseUrl)
          .get('/Transaction/' + testCase.args[0])
          .reply(200, testCase.expected);
        return Service.getTransaction.apply(null, testCase.args)
          .then(checkFulfilledResponse(t, testCase.expected));
      });
    });
  });


  t.test('.getTransactionInvoiceNumber', function (t) {

    var testCases = [
      {
        args: [request.transactionInvoiceNumber],
        expected: response.getTransactionInvoiceNumber
      }
    ];

    testCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        Service.baseUrl = baseUrl + '/';
        nock(baseUrl)
          .get('/Transaction/InvoiceNumber/' + testCase.args[0])
          .reply(200, testCase.expected);
        return Service.getTransactionInvoiceNumber.apply(null, testCase.args)
          .then(checkFulfilledResponse(t, testCase.expected));
      });
    });
  });


  t.test('.getTransactionInvoiceReference', function (t) {

    var testCases = [
      {
        args: [request.transactionInvoiceReference],
        expected: response.getTransactionInvoiceReference
      }
    ];

    testCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        Service.baseUrl = baseUrl + '/';
        nock(baseUrl)
          .get('/Transaction/InvoiceRef/' + testCase.args[0])
          .reply(200, testCase.expected);
        return Service.getTransactionInvoiceReference.apply(null, testCase.args)
          .then(checkFulfilledResponse(t, testCase.expected));
      });
    });
  });

  t.test('.getCustomer', function (t) {

    var testCases = [
      {
        args: [request.tokenCustomerId],
        expected: response.getCustomer
      }
    ];

    testCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        Service.baseUrl = baseUrl + '/';
        nock(baseUrl)
          .get('/Customer/' + testCase.args[0])
          .reply(200, testCase.expected);
        return Service.getCustomer.apply(null, testCase.args)
          .then(checkFulfilledResponse(t, testCase.expected));
      });
    });
  });

  t.test('.postTransactionRefund', function (t) {

    var testCases = [
      {
        args: [request.transactionId, request.refund],
        expected: response.postTransactionRefund
      }
    ];

    testCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        Service.baseUrl = baseUrl + '/';
        nock(baseUrl)
          .post('/Transaction/' + testCase.args[0] + '/Refund', testCase.args[1])
          .reply(200, testCase.expected);
        return Service.postTransactionRefund.apply(null, testCase.args)
          .then(checkFulfilledResponse(t, testCase.expected));
      });
    });
  });

  t.test('.postCancelAuthorisation', function (t) {

    var testCases = [
      {
        args: [request.cancel],
        expected: response.postCancelAuthorisation
      }
    ];

    testCases.forEach(function (testCase) {
      t.test('should return a fulfilled promise', function (t) {
        Service.baseUrl = baseUrl + '/';
        nock(baseUrl)
          .post('/CancelAuthorisation', testCase.args[0])
          .reply(200, testCase.expected);
        return Service.postCancelAuthorisation.apply(null, testCase.args)
          .then(checkFulfilledResponse(t, testCase.expected));
      });
    });
  });


});
