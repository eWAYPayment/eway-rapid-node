'use strict';

var test = require('blue-tape'),
  Rapid = require('../../lib/Rapid');

test('Rapid', function (t) {
  t.test('.createClient()', function (t) {
    var testCases = [
      {args: ["foo", "bar", "production"]},
      {args: ["foo", "bar", "sandbox"]},
      {args: ["foo", "bar", "http://www.google.com"]}
    ];

    testCases.forEach(function (testCase) {
      t.test('should create valid client', function (t) {
        t.plan(6);
        var client = Rapid.createClient.apply(null, testCase.args);
        t.ok(client instanceof Rapid.Client, 'should be an instance of Client');
        t.ok(client.hasOwnProperty('errors'), 'should have property errors');
        t.ok(client.errors instanceof Array, 'should be an Array');
        t.ok(client.errors.length === 0, 'should be empty');
        t.ok(client.hasOwnProperty('isValid'), 'should have property isValid');
        t.ok(client.isValid);
      });
    });

    var invalidTestCases = [
      {args: ["", ""]},
      {args: ["foo", ""]},
      {args: ["", "bar"]}
    ];

    invalidTestCases.forEach(function (testCase) {
      t.test('should create invalid client', function (t) {
        t.plan(6);
        var client = Rapid.createClient.apply(null, testCase.args);
        t.ok(client instanceof Rapid.Client, 'should be an instance of Client');
        t.ok(client.hasOwnProperty('errors'), 'should have property errors');
        t.ok(client.errors instanceof Array, 'should be an Array');
        t.ok(client.errors.length > 0, 'should not be empty');
        t.ok(client.hasOwnProperty('isValid'), 'should have property isValid');
        t.notOk(client.isValid);
      });
    });
  });

  t.test('.getMessage()', function (t) {
    var testCases = [
      {args: ["A2000"], expected: "Transaction Approved"},
      {args: ["D4401"], expected: "Refer to Issuer"},
      {args: ["F7000"], expected: "Undefined Fraud Error"},
      {args: ["S5000"], expected: "System Error"},
      {args: ["V6000"], expected: "Validation error"},
      {args: ["V6000", ""], expected: "Validation error"},
      {args: ["V6000", "vn"], expected: "Validation error"},
      {args: ["fOo"], expected: "fOo"},
      {args: ["FoO", ""], expected: "FoO"},
      {args: ["Bar", "vn"], expected: "Bar"},
      {args: [""], expected: ""},
      {args: ["", ""], expected: ""},
      {args: ["", "vn"], expected: ""}
    ];

    t.plan(testCases.length);

    testCases.forEach(function (testCase) {
      var message = Rapid.getMessage.apply(null, testCase.args);
      t.equal(message, testCase.expected);
    });
  });
});
