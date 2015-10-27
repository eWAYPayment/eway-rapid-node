'use strict';

var response = {};

response.postTransactionCaptureOn = {
  AuthorisationCode: '944929',
  ResponseCode: '00',
  ResponseMessage: 'A2000',
  TransactionID: 11818347,
  TransactionStatus: true,
  TransactionType: 'Purchase',
  BeagleScore: 0,
  Verification: {
    CVN: 0,
    Address: 0,
    Email: 0,
    Mobile: 0,
    Phone: 0
  },
  Customer: {
    CardDetails: {
      Number: '444433XXXXXX1111',
      Name: 'John Smith',
      ExpiryMonth: '12',
      ExpiryYear: '25',
      StartMonth: null,
      StartYear: null,
      IssueNumber: null
    },
    TokenCustomerID: null,
    Reference: '',
    Title: 'Mr.',
    FirstName: '',
    LastName: '',
    CompanyName: '',
    JobDescription: '',
    Street1: '',
    Street2: '',
    City: '',
    State: '',
    PostalCode: '',
    Country: '',
    Email: '',
    Phone: '',
    Mobile: '',
    Comments: '',
    Fax: '',
    Url: ''
  },
  Payment: {
    TotalAmount: 1000,
    InvoiceNumber: '',
    InvoiceDescription: '',
    InvoiceReference: '',
    CurrencyCode: 'AUD'
  },
  Errors: null
};

response.postTransactionCaptureOff = {
  AuthorisationCode: '109399',
  ResponseCode: '00',
  ResponseMessage: 'A2000',
  TransactionID: 11818346,
  TransactionStatus: true,
  TransactionType: 'Purchase',
  BeagleScore: 0,
  Verification: {
    CVN: 0,
    Address: 0,
    Email: 0,
    Mobile: 0,
    Phone: 0
  },
  Customer: {
    CardDetails: {
      Number: '444433XXXXXX1111',
      Name: 'John Smith',
      ExpiryMonth: '12',
      ExpiryYear: '25',
      StartMonth: null,
      StartYear: null,
      IssueNumber: null
    },
    TokenCustomerID: null,
    Reference: '',
    Title: 'Mr.',
    FirstName: '',
    LastName: '',
    CompanyName: '',
    JobDescription: '',
    Street1: '',
    Street2: '',
    City: '',
    State: '',
    PostalCode: '',
    Country: '',
    Email: '',
    Phone: '',
    Mobile: '',
    Comments: '',
    Fax: '',
    Url: ''
  },
  Payment: {
    TotalAmount: 1000,
    InvoiceNumber: '',
    InvoiceDescription: '',
    InvoiceReference: '',
    CurrencyCode: 'AUD'
  },
  Errors: null
};

response.postTransactionCreateCustomer = {
  "AuthorisationCode": null,
  "ResponseCode": "00",
  "ResponseMessage": "A2000",
  "TransactionID": null,
  "TransactionStatus": false,
  "TransactionType": "Purchase",
  "BeagleScore": null,
  "Verification": {"CVN": 0, "Address": 0, "Email": 0, "Mobile": 0, "Phone": 0},
  "Customer": {
    "CardDetails": {
      "Number": "444433XXXXXX1111",
      "Name": "John Smith",
      "ExpiryMonth": "12",
      "ExpiryYear": "25",
      "StartMonth": null,
      "StartYear": null,
      "IssueNumber": null
    },
    "TokenCustomerID": 123456789012,
    "Reference": "",
    "Title": "Mr.",
    "FirstName": "John",
    "LastName": "Smith",
    "CompanyName": "",
    "JobDescription": "",
    "Street1": "",
    "Street2": "",
    "City": "",
    "State": "",
    "PostalCode": "",
    "Country": "au",
    "Email": "",
    "Phone": "",
    "Mobile": "",
    "Comments": "",
    "Fax": "",
    "Url": ""
  },
  "Payment": {
    "TotalAmount": 0,
    "InvoiceNumber": "",
    "InvoiceDescription": "",
    "InvoiceReference": "",
    "CurrencyCode": "AUD"
  },
  "Errors": ""
};

response.postTransactionUpdateCustomer = {
  "AuthorisationCode": null,
  "ResponseCode": "00",
  "ResponseMessage": "A2000",
  "TransactionID": null,
  "TransactionStatus": false,
  "TransactionType": "Purchase",
  "BeagleScore": null,
  "Verification": {
    "CVN": 0,
    "Address": 0,
    "Email": 0,
    "Mobile": 0,
    "Phone": 0
  },
  "Customer": {
    "CardDetails": {
      "Number": "4444333322221111",
      "Name": "John Smith",
      "ExpiryMonth": "12",
      "ExpiryYear": "25",
      "StartMonth": null,
      "StartYear": null,
      "IssueNumber": null
    },
    "TokenCustomerID": 987654321098,
    "Reference": "",
    "Title": "Mr.",
    "FirstName": "John",
    "LastName": "Smith",
    "CompanyName": "",
    "JobDescription": "",
    "Street1": "",
    "Street2": "",
    "City": "",
    "State": "",
    "PostalCode": "",
    "Country": "au",
    "Email": "",
    "Phone": "",
    "Mobile": "",
    "Comments": "",
    "Fax": "",
    "Url": ""
  },
  "Payment": {
    "TotalAmount": 0,
    "InvoiceNumber": "",
    "InvoiceDescription": "",
    "InvoiceReference": "",
    "CurrencyCode": "AUD"
  },
  "Errors": ""
};

response.postAccessCodeSharedCaptureOnTokenOn = {
  SharedPaymentUrl: 'https://secure-au.sandbox.ewaypayments.com/sharedpage/sharedpayment?AccessCode=44DD77wwTTpVjhA4XG6htAfcLmfm8Ldj6f47UfoW8ylEs-UX5B-gAY1gIrO4kAbmJLl89SZfGSpKZByRiWxo-2Ev8XfFdacu4anFBW2HsjybidXDZQeVZFPqVdhZGpUlUU6-a',
  AccessCode: '44DD77wwTTpVjhA4XG6htAfcLmfm8Ldj6f47UfoW8ylEs-UX5B-gAY1gIrO4kAbmJLl89SZfGSpKZByRiWxo-2Ev8XfFdacu4anFBW2HsjybidXDZQeVZFPqVdhZGpUlUU6-a',
  Customer: {
    CardNumber: '',
    CardStartMonth: '',
    CardStartYear: '',
    CardIssueNumber: '',
    CardName: '',
    CardExpiryMonth: '',
    CardExpiryYear: '',
    IsActive: false,
    TokenCustomerID: null,
    Reference: '',
    Title: 'Mr.',
    FirstName: '',
    LastName: '',
    CompanyName: '',
    JobDescription: '',
    Street1: '',
    Street2: '',
    City: '',
    State: '',
    PostalCode: '',
    Country: '',
    Email: '',
    Phone: '',
    Mobile: '',
    Comments: '',
    Fax: '',
    Url: ''
  },
  Payment: {
    TotalAmount: 100,
    InvoiceNumber: null,
    InvoiceDescription: null,
    InvoiceReference: null,
    CurrencyCode: 'AUD'
  },
  FormActionURL: 'https://secure-au.sandbox.ewaypayments.com/AccessCode/44DD77wwTTpVjhA4XG6htAfcLmfm8Ldj6f47UfoW8ylEs-UX5B-gAY1gIrO4kAbmJLl89SZfGSpKZByRiWxo-2Ev8XfFdacu4anFBW2HsjybidXDZQeVZFPqVdhZGpUlUU6-a',
  CompleteCheckoutURL: null,
  Errors: null
};
response.postAccessCodeSharedCaptureOnTokenOff = {
  SharedPaymentUrl: 'https://secure-au.sandbox.ewaypayments.com/sharedpage/sharedpayment?AccessCode=44DD77wwTTpVjhA4XG6htAfcLmfm8Ldj6f47UfoW8ylEs-UX5B-gAY1gIrO4kAbmJLl89SZfGSpKZByRiWxo-2Ev8XfFdacu4anFBW2HsjybidXDZQeVZFPqVdhZGpUlUU6-a',
  AccessCode: '44DD77wwTTpVjhA4XG6htAfcLmfm8Ldj6f47UfoW8ylEs-UX5B-gAY1gIrO4kAbmJLl89SZfGSpKZByRiWxo-2Ev8XfFdacu4anFBW2HsjybidXDZQeVZFPqVdhZGpUlUU6-a',
  Customer: {
    CardNumber: '',
    CardStartMonth: '',
    CardStartYear: '',
    CardIssueNumber: '',
    CardName: '',
    CardExpiryMonth: '',
    CardExpiryYear: '',
    IsActive: false,
    TokenCustomerID: null,
    Reference: '',
    Title: 'Mr.',
    FirstName: '',
    LastName: '',
    CompanyName: '',
    JobDescription: '',
    Street1: '',
    Street2: '',
    City: '',
    State: '',
    PostalCode: '',
    Country: '',
    Email: '',
    Phone: '',
    Mobile: '',
    Comments: '',
    Fax: '',
    Url: ''
  },
  Payment: {
    TotalAmount: 100,
    InvoiceNumber: null,
    InvoiceDescription: null,
    InvoiceReference: null,
    CurrencyCode: 'AUD'
  },
  FormActionURL: 'https://secure-au.sandbox.ewaypayments.com/AccessCode/44DD77wwTTpVjhA4XG6htAfcLmfm8Ldj6f47UfoW8ylEs-UX5B-gAY1gIrO4kAbmJLl89SZfGSpKZByRiWxo-2Ev8XfFdacu4anFBW2HsjybidXDZQeVZFPqVdhZGpUlUU6-a',
  CompleteCheckoutURL: null,
  Errors: null
};
response.postAccessCodeSharedCaptureOff = {
  SharedPaymentUrl: 'https://secure-au.sandbox.ewaypayments.com/sharedpage/sharedpayment?AccessCode=44DD77wwTTpVjhA4XG6htAfcLmfm8Ldj6f47UfoW8ylEs-UX5B-gAY1gIrO4kAbmJLl89SZfGSpKZByRiWxo-2Ev8XfFdacu4anFBW2HsjybidXDZQeVZFPqVdhZGpUlUU6-a',
  AccessCode: '44DD77wwTTpVjhA4XG6htAfcLmfm8Ldj6f47UfoW8ylEs-UX5B-gAY1gIrO4kAbmJLl89SZfGSpKZByRiWxo-2Ev8XfFdacu4anFBW2HsjybidXDZQeVZFPqVdhZGpUlUU6-a',
  Customer: {
    CardNumber: '',
    CardStartMonth: '',
    CardStartYear: '',
    CardIssueNumber: '',
    CardName: '',
    CardExpiryMonth: '',
    CardExpiryYear: '',
    IsActive: false,
    TokenCustomerID: null,
    Reference: '',
    Title: 'Mr.',
    FirstName: '',
    LastName: '',
    CompanyName: '',
    JobDescription: '',
    Street1: '',
    Street2: '',
    City: '',
    State: '',
    PostalCode: '',
    Country: '',
    Email: '',
    Phone: '',
    Mobile: '',
    Comments: '',
    Fax: '',
    Url: ''
  },
  Payment: {
    TotalAmount: 100,
    InvoiceNumber: null,
    InvoiceDescription: null,
    InvoiceReference: null,
    CurrencyCode: 'AUD'
  },
  FormActionURL: 'https://secure-au.sandbox.ewaypayments.com/AccessCode/44DD77wwTTpVjhA4XG6htAfcLmfm8Ldj6f47UfoW8ylEs-UX5B-gAY1gIrO4kAbmJLl89SZfGSpKZByRiWxo-2Ev8XfFdacu4anFBW2HsjybidXDZQeVZFPqVdhZGpUlUU6-a',
  CompleteCheckoutURL: null,
  Errors: null
};

response.postAccessCodeSharedCreateCustomer = {
  "SharedPaymentUrl": "https://secure-au.sandbox.ewaypayments.com/sharedpage/sharedpayment?AccessCode=A1001mNKkLhmciCXSW-52SoNuoGWs4OEq0G88LRzgYhJsE3za9LiOtiCoDeR7BUZKPwBkLXe_ETrYUhOChs05mw23q9iXt2EUlSqj1OpoAaSNk6AjZjDdxwl1Ze4PXI337860",
  "AccessCode": "A1001mNKkLhmciCXSW-52SoNuoGWs4OEq0G88LRzgYhJsE3za9LiOtiCoDeR7BUZKPwBkLXe_ETrYUhOChs05mw23q9iXt2EUlSqj1OpoAaSNk6AjZjDdxwl1Ze4PXI337860",
  "Customer": {
    "CardNumber": "",
    "CardStartMonth": "",
    "CardStartYear": "",
    "CardIssueNumber": "",
    "CardName": "",
    "CardExpiryMonth": "",
    "CardExpiryYear": "",
    "IsActive": false,
    "TokenCustomerID": null,
    "Reference": "",
    "Title": "Mr.",
    "FirstName": "John",
    "LastName": "Smith",
    "CompanyName": "",
    "JobDescription": "",
    "Street1": "",
    "Street2": "",
    "City": "",
    "State": "",
    "PostalCode": "",
    "Country": "au",
    "Email": "",
    "Phone": "",
    "Mobile": "",
    "Comments": "",
    "Fax": "",
    "Url": ""
  },
  "Payment": {
    "TotalAmount": 0,
    "InvoiceNumber": null,
    "InvoiceDescription": null,
    "InvoiceReference": null,
    "CurrencyCode": "AUD"
  },
  "FormActionURL": "https://secure-au.sandbox.ewaypayments.com/AccessCode/A1001mNKkLhmciCXSW-52SoNuoGWs4OEq0G88LRzgYhJsE3za9LiOtiCoDeR7BUZKPwBkLXe_ETrYUhOChs05mw23q9iXt2EUlSqj1OpoAaSNk6AjZjDdxwl1Ze4PXI337860",
  "CompleteCheckoutURL": null,
  "Errors": ""
};

response.postAccessCodeSharedUpdateCustomer = {
  "SharedPaymentUrl": "https://secure-au.sandbox.ewaypayments.com/sharedpage/sharedpayment?AccessCode=F9802-v03wAxeAdj-Er4BcqJcip-Dqz1mk3ajbPkdGqpQxe9BAL01Kk4DX5iEcWLeztKwCEPWuPIY9jlDC6juJNTAdsWy4iYcT-qE3L14KCANlDN0GItsYzmA47G-c_rabblJ",
  "AccessCode": "F9802-v03wAxeAdj-Er4BcqJcip-Dqz1mk3ajbPkdGqpQxe9BAL01Kk4DX5iEcWLeztKwCEPWuPIY9jlDC6juJNTAdsWy4iYcT-qE3L14KCANlDN0GItsYzmA47G-c_rabblJ",
  "Customer": {
    "CardNumber": "444433XXXXXX1111",
    "CardStartMonth": "",
    "CardStartYear": "",
    "CardIssueNumber": "",
    "CardName": "John Doe",
    "CardExpiryMonth": "12",
    "CardExpiryYear": "21",
    "IsActive": true,
    "TokenCustomerID": 987654321098,
    "Reference": "",
    "Title": "Mr.",
    "FirstName": "John",
    "LastName": "Doe",
    "CompanyName": "",
    "JobDescription": "",
    "Street1": "",
    "Street2": "",
    "City": "",
    "State": "",
    "PostalCode": "",
    "Country": "au",
    "Email": "",
    "Phone": "",
    "Mobile": "",
    "Comments": "",
    "Fax": "",
    "Url": ""
  },
  "Payment": {
    "TotalAmount": 0,
    "InvoiceNumber": null,
    "InvoiceDescription": null,
    "InvoiceReference": null,
    "CurrencyCode": "AUD"
  },
  "FormActionURL": "https://secure-au.sandbox.ewaypayments.com/AccessCode/F9802-v03wAxeAdj-Er4BcqJcip-Dqz1mk3ajbPkdGqpQxe9BAL01Kk4DX5iEcWLeztKwCEPWuPIY9jlDC6juJNTAdsWy4iYcT-qE3L14KCANlDN0GItsYzmA47G-c_rabblJ",
  "CompleteCheckoutURL": null,
  "Errors": null
};

response.postAccessCodeCaptureOnTokenOn = {
  AccessCode: 'F98021ShSfbA2H_JGdfM8-IwMHyv6Yb6OqQtu4dlY2eDDSmsGOkwzImSLf607PNTXSHwGBS6lQa-x8odxwlXqClhcHij9D80BRqbBNgdb85HCpiK7Rs2jGrsgSy2Zk1WqY08r',
  Customer: {
    CardNumber: '',
    CardStartMonth: '',
    CardStartYear: '',
    CardIssueNumber: '',
    CardName: '',
    CardExpiryMonth: '',
    CardExpiryYear: '',
    IsActive: false,
    TokenCustomerID: null,
    Reference: '',
    Title: 'Mr.',
    FirstName: '',
    LastName: '',
    CompanyName: '',
    JobDescription: '',
    Street1: '',
    Street2: '',
    City: '',
    State: '',
    PostalCode: '',
    Country: '',
    Email: '',
    Phone: '',
    Mobile: '',
    Comments: '',
    Fax: '',
    Url: ''
  },
  Payment: {
    TotalAmount: 100,
    InvoiceNumber: null,
    InvoiceDescription: null,
    InvoiceReference: null,
    CurrencyCode: 'AUD'
  },
  FormActionURL: 'https://secure-au.sandbox.ewaypayments.com/AccessCode/F98021ShSfbA2H_JGdfM8-IwMHyv6Yb6OqQtu4dlY2eDDSmsGOkwzImSLf607PNTXSHwGBS6lQa-x8odxwlXqClhcHij9D80BRqbBNgdb85HCpiK7Rs2jGrsgSy2Zk1WqY08r',
  CompleteCheckoutURL: null,
  Errors: null
};

response.postAccessCodeCaptureOnTokenOff = {
  AccessCode: 'F98021ShSfbA2H_JGdfM8-IwMHyv6Yb6OqQtu4dlY2eDDSmsGOkwzImSLf607PNTXSHwGBS6lQa-x8odxwlXqClhcHij9D80BRqbBNgdb85HCpiK7Rs2jGrsgSy2Zk1WqY08r',
  Customer: {
    CardNumber: '',
    CardStartMonth: '',
    CardStartYear: '',
    CardIssueNumber: '',
    CardName: '',
    CardExpiryMonth: '',
    CardExpiryYear: '',
    IsActive: false,
    TokenCustomerID: null,
    Reference: '',
    Title: 'Mr.',
    FirstName: '',
    LastName: '',
    CompanyName: '',
    JobDescription: '',
    Street1: '',
    Street2: '',
    City: '',
    State: '',
    PostalCode: '',
    Country: '',
    Email: '',
    Phone: '',
    Mobile: '',
    Comments: '',
    Fax: '',
    Url: ''
  },
  Payment: {
    TotalAmount: 100,
    InvoiceNumber: null,
    InvoiceDescription: null,
    InvoiceReference: null,
    CurrencyCode: 'AUD'
  },
  FormActionURL: 'https://secure-au.sandbox.ewaypayments.com/AccessCode/F98021ShSfbA2H_JGdfM8-IwMHyv6Yb6OqQtu4dlY2eDDSmsGOkwzImSLf607PNTXSHwGBS6lQa-x8odxwlXqClhcHij9D80BRqbBNgdb85HCpiK7Rs2jGrsgSy2Zk1WqY08r',
  CompleteCheckoutURL: null,
  Errors: null
};

response.postAccessCodeCaptureOff = {
  AccessCode: 'F98021ShSfbA2H_JGdfM8-IwMHyv6Yb6OqQtu4dlY2eDDSmsGOkwzImSLf607PNTXSHwGBS6lQa-x8odxwlXqClhcHij9D80BRqbBNgdb85HCpiK7Rs2jGrsgSy2Zk1WqY08r',
  Customer: {
    CardNumber: '',
    CardStartMonth: '',
    CardStartYear: '',
    CardIssueNumber: '',
    CardName: '',
    CardExpiryMonth: '',
    CardExpiryYear: '',
    IsActive: false,
    TokenCustomerID: null,
    Reference: '',
    Title: 'Mr.',
    FirstName: '',
    LastName: '',
    CompanyName: '',
    JobDescription: '',
    Street1: '',
    Street2: '',
    City: '',
    State: '',
    PostalCode: '',
    Country: '',
    Email: '',
    Phone: '',
    Mobile: '',
    Comments: '',
    Fax: '',
    Url: ''
  },
  Payment: {
    TotalAmount: 100,
    InvoiceNumber: null,
    InvoiceDescription: null,
    InvoiceReference: null,
    CurrencyCode: 'AUD'
  },
  FormActionURL: 'https://secure-au.sandbox.ewaypayments.com/AccessCode/F98021ShSfbA2H_JGdfM8-IwMHyv6Yb6OqQtu4dlY2eDDSmsGOkwzImSLf607PNTXSHwGBS6lQa-x8odxwlXqClhcHij9D80BRqbBNgdb85HCpiK7Rs2jGrsgSy2Zk1WqY08r',
  CompleteCheckoutURL: null,
  Errors: null
};

response.postAccessCodeCreateCustomer = {
  "AccessCode": "44DD7HSnuWszo4FHAYyV2hOoUPKfGvK2J6jSEcNJarBBSu7H6Jne994F9P9Kdko2iJfqXzwt-Eld7y2vOadjc0b6XvX_pwYRPhqaU2MiM1LeKGacHGXZoF_KMJGmYGg4qnVS7",
  "Customer": {
    "CardNumber": "",
    "CardStartMonth": "",
    "CardStartYear": "",
    "CardIssueNumber": "",
    "CardName": "",
    "CardExpiryMonth": "",
    "CardExpiryYear": "",
    "IsActive": false,
    "TokenCustomerID": null,
    "Reference": "",
    "Title": "Mr.",
    "FirstName": "John",
    "LastName": "Smith",
    "CompanyName": "",
    "JobDescription": "",
    "Street1": "",
    "Street2": "",
    "City": "",
    "State": "",
    "PostalCode": "",
    "Country": "au",
    "Email": "",
    "Phone": "",
    "Mobile": "",
    "Comments": "",
    "Fax": "",
    "Url": ""
  },
  "Payment": {
    "TotalAmount": 0,
    "InvoiceNumber": null,
    "InvoiceDescription": null,
    "InvoiceReference": null,
    "CurrencyCode": "AUD"
  },
  "FormActionURL": "https://secure-au.sandbox.ewaypayments.com/AccessCode/44DD7HSnuWszo4FHAYyV2hOoUPKfGvK2J6jSEcNJarBBSu7H6Jne994F9P9Kdko2iJfqXzwt-Eld7y2vOadjc0b6XvX_pwYRPhqaU2MiM1LeKGacHGXZoF_KMJGmYGg4qnVS7",
  "CompleteCheckoutURL": null,
  "Errors": ""
};

response.postAccessCodeUpdateCustomer = {
  "AccessCode": "60CF3YnOMi2x3PhqOKMzj8iRqsDcqEzWO7L6L-ROWPQ6jhlN4eqbYBaPkFGE8pCvI-6rERsoL1XRa_Xw7bCHx_YE3oyruET9HMTf281pOLelDuBJguwTqdE9tG_2TK-C1UDXZ",
  "Customer": {
    "CardNumber": "444433XXXXXX1111",
    "CardStartMonth": "",
    "CardStartYear": "",
    "CardIssueNumber": "",
    "CardName": "John Smith",
    "CardExpiryMonth": "12",
    "CardExpiryYear": "21",
    "IsActive": true,
    "TokenCustomerID": 987654321098,
    "Reference": "",
    "Title": "Mr.",
    "FirstName": "John",
    "LastName": "Smith",
    "CompanyName": "",
    "JobDescription": "",
    "Street1": "",
    "Street2": "",
    "City": "",
    "State": "",
    "PostalCode": "",
    "Country": "au",
    "Email": "",
    "Phone": "",
    "Mobile": "",
    "Comments": "",
    "Fax": "",
    "Url": ""
  },
  "Payment": {
    "TotalAmount": 0,
    "InvoiceNumber": null,
    "InvoiceDescription": null,
    "InvoiceReference": null,
    "CurrencyCode": "AUD"
  },
  "FormActionURL": "https://secure-au.sandbox.ewaypayments.com/AccessCode/60CF3YnOMi2x3PhqOKMzj8iRqsDcqEzWO7L6L-ROWPQ6jhlN4eqbYBaPkFGE8pCvI-6rERsoL1XRa_Xw7bCHx_YE3oyruET9HMTf281pOLelDuBJguwTqdE9tG_2TK-C1UDXZ",
  "CompleteCheckoutURL": null,
  "Errors": null
};

response.postCapturePayment = {
  "ResponseCode": "399854",
  "ResponseMessage": "399854",
  "TransactionID": 11260840,
  "TransactionStatus": true,
  "Errors": null
};

response.postTransactionWalletOn = {
  "AuthorisationCode": "876586",
  "ResponseCode": "00",
  "ResponseMessage": "A2000",
  "TransactionID": 11818105,
  "TransactionStatus": true,
  "TransactionType": "Recurring",
  "BeagleScore": 0,
  "Verification": {
    "CVN": 0,
    "Address": 0,
    "Email": 0,
    "Mobile": 0,
    "Phone": 0
  },
  "Customer": {
    "CardDetails": {
      "Number": "444433XXXXXX1111",
      "Name": "Tung Ha",
      "ExpiryMonth": "12",
      "ExpiryYear": "21",
      "StartMonth": null,
      "StartYear": null,
      "IssueNumber": null
    },
    "TokenCustomerID": null,
    "Reference": "",
    "Title": "Mr.",
    "FirstName": "John",
    "LastName": "Doe",
    "CompanyName": "",
    "JobDescription": "",
    "Street1": "",
    "Street2": "",
    "City": "",
    "State": "",
    "PostalCode": "",
    "Country": "au",
    "Email": "",
    "Phone": "",
    "Mobile": "",
    "Comments": "",
    "Fax": "",
    "Url": ""
  },
  "Payment": {
    "TotalAmount": 1000,
    "InvoiceNumber": "",
    "InvoiceDescription": "",
    "InvoiceReference": "",
    "CurrencyCode": "AUD"
  },
  "Errors": ""
};

response.postTransactionWalletOff = {
  "AuthorisationCode": "876586",
  "ResponseCode": "00",
  "ResponseMessage": "A2000",
  "TransactionID": 11818106,
  "TransactionStatus": true,
  "TransactionType": "Recurring",
  "BeagleScore": 0,
  "Verification": {
    "CVN": 0,
    "Address": 0,
    "Email": 0,
    "Mobile": 0,
    "Phone": 0
  },
  "Customer": {
    "CardDetails": {
      "Number": "444433XXXXXX1111",
      "Name": "Tung Ha",
      "ExpiryMonth": "12",
      "ExpiryYear": "21",
      "StartMonth": null,
      "StartYear": null,
      "IssueNumber": null
    },
    "TokenCustomerID": null,
    "Reference": "",
    "Title": "Mr.",
    "FirstName": "John",
    "LastName": "Doe",
    "CompanyName": "",
    "JobDescription": "",
    "Street1": "",
    "Street2": "",
    "City": "",
    "State": "",
    "PostalCode": "",
    "Country": "au",
    "Email": "",
    "Phone": "",
    "Mobile": "",
    "Comments": "",
    "Fax": "",
    "Url": ""
  },
  "Payment": {
    "TotalAmount": 1000,
    "InvoiceNumber": "",
    "InvoiceDescription": "",
    "InvoiceReference": "",
    "CurrencyCode": "AUD"
  },
  "Errors": ""
};

response.getTransaction = {
  "Transactions": [{
    "AuthorisationCode": "123456",
    "ResponseCode": "00",
    "ResponseMessage": "A2000",
    "InvoiceNumber": "",
    "InvoiceReference": "",
    "TotalAmount": 1000,
    "TransactionID": 12345678,
    "TransactionStatus": true,
    "TokenCustomerID": null,
    "BeagleScore": 0,
    "Options": [],
    "Verification": {"CVN": 0, "Address": 0, "Email": 0, "Mobile": 0, "Phone": 0},
    "BeagleVerification": {"Email": 0, "Phone": 0},
    "Customer": {
      "TokenCustomerID": null,
      "Reference": null,
      "Title": null,
      "FirstName": "",
      "LastName": "",
      "CompanyName": null,
      "JobDescription": null,
      "Street1": "",
      "Street2": "",
      "City": "",
      "State": "",
      "PostalCode": "",
      "Country": "",
      "Email": "",
      "Phone": "",
      "Mobile": null,
      "Comments": null,
      "Fax": null,
      "Url": null
    },
    "CustomerNote": null,
    "ShippingAddress": {
      "ShippingMethod": "Unknown",
      "FirstName": "",
      "LastName": "",
      "Street1": "",
      "Street2": "",
      "City": "",
      "State": "",
      "Country": "",
      "PostalCode": "",
      "Email": "",
      "Phone": "",
      "Fax": null
    }
  }], "Errors": ""
};

response.getTransactionInvoiceNumber = {
  "Transactions": [{
    "AuthorisationCode": "123456",
    "ResponseCode": "00",
    "ResponseMessage": "A2000",
    "InvoiceNumber": "invoice_number_1234567890",
    "InvoiceReference": "",
    "TotalAmount": 1000,
    "TransactionID": 12345678,
    "TransactionStatus": true,
    "TokenCustomerID": null,
    "BeagleScore": 0,
    "Options": [],
    "Verification": {"CVN": 0, "Address": 0, "Email": 0, "Mobile": 0, "Phone": 0},
    "BeagleVerification": {"Email": 0, "Phone": 0},
    "Customer": {
      "TokenCustomerID": null,
      "Reference": null,
      "Title": null,
      "FirstName": "",
      "LastName": "",
      "CompanyName": null,
      "JobDescription": null,
      "Street1": "",
      "Street2": "",
      "City": "",
      "State": "",
      "PostalCode": "",
      "Country": "",
      "Email": "",
      "Phone": "",
      "Mobile": null,
      "Comments": null,
      "Fax": null,
      "Url": null
    },
    "CustomerNote": null,
    "ShippingAddress": {
      "ShippingMethod": "Unknown",
      "FirstName": "",
      "LastName": "",
      "Street1": "",
      "Street2": "",
      "City": "",
      "State": "",
      "Country": "",
      "PostalCode": "",
      "Email": "",
      "Phone": "",
      "Fax": null
    }
  }], "Errors": ""
};

response.getTransactionInvoiceReference = {
  "Transactions": [{
    "AuthorisationCode": "123456",
    "ResponseCode": "00",
    "ResponseMessage": "A2000",
    "InvoiceNumber": "",
    "InvoiceReference": "1234567890",
    "TotalAmount": 1000,
    "TransactionID": 12345678,
    "TransactionStatus": true,
    "TokenCustomerID": null,
    "BeagleScore": 0,
    "Options": [],
    "Verification": {"CVN": 0, "Address": 0, "Email": 0, "Mobile": 0, "Phone": 0},
    "BeagleVerification": {"Email": 0, "Phone": 0},
    "Customer": {
      "TokenCustomerID": null,
      "Reference": null,
      "Title": null,
      "FirstName": "",
      "LastName": "",
      "CompanyName": null,
      "JobDescription": null,
      "Street1": "",
      "Street2": "",
      "City": "",
      "State": "",
      "PostalCode": "",
      "Country": "",
      "Email": "",
      "Phone": "",
      "Mobile": null,
      "Comments": null,
      "Fax": null,
      "Url": null
    },
    "CustomerNote": null,
    "ShippingAddress": {
      "ShippingMethod": "Unknown",
      "FirstName": "",
      "LastName": "",
      "Street1": "",
      "Street2": "",
      "City": "",
      "State": "",
      "Country": "",
      "PostalCode": "",
      "Email": "",
      "Phone": "",
      "Fax": null
    }
  }], "Errors": ""
};

response.getCustomer = {
  "Customers": [{
    "CardDetails": {
      "Number": "444433XXXXXX1111",
      "Name": "John Smith4",
      "ExpiryMonth": "12",
      "ExpiryYear": "25",
      "StartMonth": "",
      "StartYear": "",
      "IssueNumber": ""
    },
    "TokenCustomerID": 987654321098,
    "Reference": "",
    "Title": "Mr.",
    "FirstName": "John4",
    "LastName": "Smith4",
    "CompanyName": "",
    "JobDescription": "",
    "Street1": "",
    "Street2": null,
    "City": "",
    "State": "",
    "PostalCode": "",
    "Country": "au",
    "Email": "",
    "Phone": "",
    "Mobile": "",
    "Comments": "",
    "Fax": "",
    "Url": ""
  }], "Errors": ""
};

response.postTransactionRefund = {
  "AuthorisationCode": "123456",
  "ResponseCode": null,
  "ResponseMessage": "A2000",
  "TransactionID": 12345679,
  "TransactionStatus": true,
  "Verification": null,
  "Customer": {
    "CardDetails": {
      "Number": null,
      "Name": null,
      "ExpiryMonth": null,
      "ExpiryYear": null,
      "StartMonth": null,
      "StartYear": null,
      "IssueNumber": null
    },
    "TokenCustomerID": null,
    "Reference": null,
    "Title": null,
    "FirstName": "",
    "LastName": "",
    "CompanyName": null,
    "JobDescription": null,
    "Street1": "",
    "Street2": null,
    "City": "",
    "State": "",
    "PostalCode": "",
    "Country": "",
    "Email": "",
    "Phone": "",
    "Mobile": null,
    "Comments": null,
    "Fax": null,
    "Url": null
  },
  "Refund": {
    "TransactionID": 12345678,
    "TotalAmount": 1000,
    "InvoiceNumber": null,
    "InvoiceDescription": "",
    "InvoiceReference": "",
    "CurrencyCode": null
  },
  "Errors": ""
};

response.postCancelAuthorisation = {
  "ResponseCode": "123456",
  "ResponseMessage": "234567",
  "TransactionID": 12345679,
  "TransactionStatus": true,
  "Errors": ""
};

response.getSettlementSearchBasic = {
    "SettlementSummaries": [{
        "SettlementID": "53e78b14-ac2c-4b1b-a099-a12c6d5f30bc",
        "Currency": "36",
        "CurrencyCode": "AUD",
        "TotalCredit": 97100,
        "TotalDebit": 320,
        "TotalBalance": 96780,
        "BalancePerCardType": [{
            "CardType": "VI",
            "NumberOfTransactions": 14,
            "Credit": 97100,
            "Debit": 320,
            "Balance": 96780
        }]
    }],
    "SettlementTransactions": [{
        "SettlementID": "53e78b14-ac2c-4b1b-a099-a12c6d5f30bc",
        "eWAYCustomerID": 87654321,
        "Currency": "36",
        "CurrencyCode": "AUD",
        "TransactionID": 11258912,
        "TxnReference": "0000000011258912",
        "CardType": "VI",
        "Amount": 100,
        "TransactionType": "1",
        "TransactionDateTime": "\/Date(1422795600000)\/",
        "SettlementDateTime": "\/Date(1422795600000)\/"
    }, {
        "SettlementID": "53e78b14-ac2c-4b1b-a099-a12c6d5f30bc",
        "eWAYCustomerID": 87654321,
        "Currency": "36",
        "CurrencyCode": "AUD",
        "TransactionID": 11259196,
        "TxnReference": "0000000011259196",
        "CardType": "VI",
        "Amount": 1000,
        "TransactionType": "1",
        "TransactionDateTime": "\/Date(1422795600000)\/",
        "SettlementDateTime": "\/Date(1422795600000)\/"
    }, {
        "SettlementID": "53e78b14-ac2c-4b1b-a099-a12c6d5f30bc",
        "eWAYCustomerID": 87654321,
        "Currency": "36",
        "CurrencyCode": "AUD",
        "TransactionID": 11260888,
        "TxnReference": "0000000011260888",
        "CardType": "VI",
        "Amount": 1000,
        "TransactionType": "8",
        "TransactionDateTime": "\/Date(1422795600000)\/",
        "SettlementDateTime": "\/Date(1422795600000)\/"
    }],
    "Errors": ""
};

module.exports = response;
