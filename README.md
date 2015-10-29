# eWAY Rapid Node.js Library

[![Latest version on npm][ico-version]][link-npm]
[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]

A Node.js library to integrate with eWAY's Rapid Payment API.

Sign up with eWAY at:
 - Australia:    https://www.eway.com.au/
 - New Zealand:  https://eway.io/nz/
 - UK:           https://eway.io/uk/
 - Hong Kong:    https://eway.io/hk/
 - Malaysia:     https://eway.io/my/
 - Singapore:    https://eway.io/sg/

For testing, get a free eWAY Partner account: https://www.eway.com.au/developers


## Installation

```bash
$ npm install eway-rapid
```

## Usage

See the [eWAY Rapid API Reference](https://eway.io/api-v3/?javascript) for usage details.

A simple Direct payment example:

```js
var rapid = require('eway-rapid');

var key      = '60CF3Ce97nRS1Z1Wp5m9kMmzHHEh8Rkuj31QCtVxjPWGYA9FymyqsK0Enm1P6mHJf0THbR',
    password = 'API-P4ss',
    endpoint = 'sandbox';

var client = rapid.createClient(key, password, endpoint);

client.createTransaction(rapid.Enum.Method.DIRECT,{
  "Customer": {
    "CardDetails": {
      "Name": "John Smith",
      "Number": "4444333322221111",
      "ExpiryMonth": "12",
      "ExpiryYear": "25",
      "CVN": "123"
    }
  },
  "Payment": {
    "TotalAmount": 1000
  },
  "TransactionType": "Purchase"
}).then(function (response) {
  if (response.get('TransactionStatus')) {
    console.log('Payment successful! ID: ' + response.get('TransactionID'));
  }
});
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

This library can be tested using [npm](https://www.npmjs.com/):

```bash
$ npm install
$ npm test
```

Integration tests can also be run - first copy .env.dist to .env and add your eWAY Sandbox API Key & Password. Then run:

```bash
$ npm run test:integration
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/npm/v/eway-rapid.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/eWAYPayment/eway-rapid-node/master.svg?style=flat-square

[link-npm]: https://www.npmjs.com/package/eway-rapid
[link-travis]: https://travis-ci.org/eWAYPayment/eway-rapid-node
