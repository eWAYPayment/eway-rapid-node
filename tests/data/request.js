'use strict';

var TransactionType = require('../../lib/Rapid/Enum/TransactionType'),
  Payment = require('../../lib/Rapid/Enum/Payment'),
  SettlementReportMode = require('../../lib/Rapid/Enum/SettlementReportMode'),
  request = {};

request.directTransactionBasic = {
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
  "TransactionType": TransactionType.PURCHASE
};

request.directTransactionCaptureOn = {
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
  "TransactionType": TransactionType.PURCHASE,
  "Capture": true
};

request.serviceDirectTransactionCaptureOn = request.directTransactionCaptureOn;
request.serviceDirectTransactionCaptureOn.Method = Payment.PROCESS_PAYMENT;

request.directTransactionCaptureOff = {
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
  "TransactionType": TransactionType.PURCHASE,
  "Capture": false
};

request.serviceDirectTransactionCaptureOff = request.directTransactionCaptureOff;
request.serviceDirectTransactionCaptureOff.Method = Payment.AUTHORISE;

request.responsiveSharedPageCaptureOnTokenOn = {
  "Customer": {
    "TokenCustomerId": "12345"
  },
  "Payment": {
    "TotalAmount": 100
  },
  "RedirectUrl": "http://www.eway.com.au",
  "CancelUrl": "http://www.eway.com.au",
  "TransactionType": TransactionType.PURCHASE,
  "Capture": true
};

request.serviceResponsiveSharedPageCaptureOnTokenOn = request.responsiveSharedPageCaptureOnTokenOn;
request.serviceResponsiveSharedPageCaptureOnTokenOn.Method = Payment.TOKEN_PAYMENT;

request.responsiveSharedPageCaptureOnTokenOff = {
  "Payment": {
    "TotalAmount": 100
  },
  "RedirectUrl": "http://www.eway.com.au",
  "CancelUrl": "http://www.eway.com.au",
  "TransactionType": TransactionType.PURCHASE,
  "Capture": true
};

request.serviceResponsiveSharedPageCaptureOnTokenOff = request.responsiveSharedPageCaptureOnTokenOff;
request.serviceResponsiveSharedPageCaptureOnTokenOff.Method = Payment.PROCESS_PAYMENT;

request.responsiveSharedPageSaveCustomer = {
  "Payment": {
    "TotalAmount": 100
  },
  "RedirectUrl": "http://www.eway.com.au",
  "CancelUrl": "http://www.eway.com.au",
  "TransactionType": TransactionType.PURCHASE,
  "Capture": true,
  "SaveCustomer": true
};

request.serviceResponsiveSharedPageSaveCustomer = request.responsiveSharedPageSaveCustomer;
request.serviceResponsiveSharedPageSaveCustomer.Method = Payment.TOKEN_PAYMENT;

request.responsiveSharedPageCaptureOff = {
  "Payment": {
    "TotalAmount": 100
  },
  "RedirectUrl": "http://www.eway.com.au",
  "CancelUrl": "http://www.eway.com.au",
  "TransactionType": TransactionType.PURCHASE,
  "Capture": false
};

request.serviceResponsiveSharedPageCaptureOff = request.responsiveSharedPageCaptureOff;
request.serviceResponsiveSharedPageCaptureOff.Method = Payment.AUTHORISE;

request.transparentRedirectCaptureOnTokenOn = {
  "Customer": {
    "TokenCustomerId": "12345"
  },
  "Payment": {
    "TotalAmount": 100
  },
  "RedirectUrl": "http://www.eway.com.au",
  "TransactionType": TransactionType.PURCHASE,
  "Capture": true
};

request.serviceTransparentRedirectCaptureOnTokenOn = request.transparentRedirectCaptureOnTokenOn;
request.serviceTransparentRedirectCaptureOnTokenOn.Method = Payment.TOKEN_PAYMENT;

request.transparentRedirectCaptureOnTokenOff = {
  "Payment": {
    "TotalAmount": 100
  },
  "RedirectUrl": "http://www.eway.com.au",
  "TransactionType": TransactionType.PURCHASE,
  "Capture": true
};

request.serviceTransparentRedirectCaptureOnTokenOff = request.transparentRedirectCaptureOnTokenOff;
request.serviceTransparentRedirectCaptureOnTokenOff.Method = Payment.PROCESS_PAYMENT;

request.transparentRedirectSaveCustomer = {
  "Payment": {
    "TotalAmount": 100
  },
  "RedirectUrl": "http://www.eway.com.au",
  "TransactionType": TransactionType.PURCHASE,
  "Capture": true,
  "SaveCustomer": true
};

request.serviceTransparentRedirectSaveCustomer = request.transparentRedirectSaveCustomer;
request.serviceTransparentRedirectSaveCustomer.Method = Payment.TOKEN_PAYMENT;

request.transparentRedirectCaptureOff = {
  "Payment": {
    "TotalAmount": 100
  },
  "RedirectUrl": "http://www.eway.com.au",
  "TransactionType": TransactionType.PURCHASE,
  "Capture": false
};

request.serviceTransparentRedirectCaptureOff = request.transparentRedirectCaptureOff;
request.serviceTransparentRedirectCaptureOff.Method = Payment.AUTHORISE;

request.authorisation = {
  "Payment": {
    "TotalAmount": 1000,
    "InvoiceNumber": "Inv 4444",
    "InvoiceDescription": "Individual Invoice Description",
    "InvoiceReference": "513456",
    "CurrencyCode": "AUD"
  },
  "TransactionId": 11260833
};

request.serviceAuthorisation = request.authorisation;
request.serviceAuthorisation.Capture = true;

request.walletCaptureOn = {
  "Payment": {
    "TotalAmount": 100
  },
  "TransactionType": TransactionType.PURCHASE,
  "ThirdPartyWalletID": "VCOCallID:123456",
  "Capture": true
};

request.serviceWalletOn = request.walletCaptureOn;
request.serviceWalletOn.Method = Payment.PROCESS_PAYMENT;

request.walletCaptureOff = {
  "Payment": {
    "TotalAmount": 100
  },
  "TransactionType": TransactionType.PURCHASE,
  "ThirdPartyWalletID": "VCOCallID:123456",
  "Capture": false
};

request.serviceWalletOff = request.walletCaptureOff;
request.serviceWalletOff.Method = Payment.AUTHORISE;

request.transactionId = 12345678;

request.transactionInvoiceNumber = 'invoice_number_1234567890';

request.transactionInvoiceReference = '1234567890';

request.createCustomerDirectTransaction = {
  "Title": "Mr.",
  "FirstName": "John",
  "LastName": "Smith",
  "Country": "au",
  "CardDetails": {
    "Name": "John Smith",
    "Number": "4444333322221111",
    "ExpiryMonth": "12",
    "ExpiryYear": "25",
    "CVN": "123"
  }
};

request.serviceCreateCustomerDirectTransaction = {
  Customer: request.createCustomerDirectTransaction,
  Method: Payment.CREATE_TOKEN_CUSTOMER,
  TransactionType: TransactionType.PURCHASE
};

request.createCustomerResponsiveShared = {
  "Title": "Mr.",
  "FirstName": "John",
  "LastName": "Smith",
  "Country": "au",
  "CardDetails": {
    "Name": "John Smith",
    "Number": "4444333322221111",
    "ExpiryMonth": "12",
    "ExpiryYear": "25",
    "CVN": "123"
  },
  "RedirectUrl": "http://www.eway.com.au",
  "CancelUrl": "http://www.eway.com.au"
};

request.serviceCreateCustomerResponsiveShared = {
  Customer: request.createCustomerResponsiveShared,
  Method: Payment.CREATE_TOKEN_CUSTOMER,
  TransactionType: TransactionType.PURCHASE,
  RedirectUrl: request.createCustomerResponsiveShared.RedirectUrl,
  CancelUrl: request.createCustomerResponsiveShared.CancelUrl,
  Payment: {TotalAmount: 0}
};

request.createCustomerTransparentRedirect = {
  "Title": "Mr.",
  "FirstName": "John",
  "LastName": "Smith",
  "Country": "au",
  "CardDetails": {
    "Name": "John Smith",
    "Number": "4444333322221111",
    "ExpiryMonth": "12",
    "ExpiryYear": "25",
    "CVN": "123"
  },
  "RedirectUrl": "http://www.eway.com.au"
};

request.serviceCreateCustomerTransparentRedirect = {
  Customer: request.createCustomerTransparentRedirect,
  Method: Payment.CREATE_TOKEN_CUSTOMER,
  TransactionType: TransactionType.PURCHASE,
  RedirectUrl: request.createCustomerTransparentRedirect.RedirectUrl,
  Payment: {TotalAmount: 0}
};

request.tokenCustomerId = 987654321098;

request.updateCustomerDirectTransaction = {
  "TokenCustomerID": request.tokenCustomerId,
  "Title": "Mr.",
  "FirstName": "John",
  "LastName": "Smith",
  "Country": "au",
  "CardDetails": {
    "Name": "John Smith",
    "Number": "4444333322221111",
    "ExpiryMonth": "12",
    "ExpiryYear": "25",
    "CVN": "123"
  }
};

request.serviceUpdateCustomerDirectTransaction = {
  Customer: request.updateCustomerDirectTransaction,
  Payment: {TotalAmount: 0},
  Method: Payment.UPDATE_TOKEN_CUSTOMER,
  TransactionType: TransactionType.PURCHASE
};

request.updateCustomerResponsiveShared = {
  "TokenCustomerID": 987654321098,
  "RedirectUrl": "http://www.eway.com.au"
};

request.serviceUpdateCustomerResponsiveShared = {
  "Customer": {
    "TokenCustomerID": 987654321098,
    "RedirectUrl": "http://www.eway.com.au"
  },
  "Payment": {
    "TotalAmount": 0
  },
  "Method": "UpdateTokenCustomer",
  "TransactionType": "Purchase",
  "RedirectUrl": "http://www.eway.com.au"
};

request.updateCustomerTransparentRedirect = {
  "TokenCustomerID": 987654321098,
  "Title": "Mr.",
  "FirstName": "John",
  "LastName": "Smith",
  "Country": "au",
  "RedirectUrl": "http://www.eway.com.au"
};

request.serviceUpdateCustomerTransparentRedirect = {
  "Customer": {
    "TokenCustomerID": 987654321098,
    "Title": "Mr.",
    "FirstName": "John",
    "LastName": "Smith",
    "Country": "au",
    "RedirectUrl": "http://www.eway.com.au"
  },
  "Method": "UpdateTokenCustomer",
  "TransactionType": "Purchase",
  "RedirectUrl": "http://www.eway.com.au",
  "Payment": {
    "TotalAmount": 0
  }
};

request.refund = {"Refund": {"TransactionID": request.transactionId, "TotalAmount": 1000}};

request.cancel = {TransactionID: request.transactionId};


request.settlementSearchQueryBasic = {
  "ReportMode": SettlementReportMode.BOTH,
  "SettlementDate": "2015-10-01"
};

module.exports = request;
