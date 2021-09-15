const JsBarcode = require('jsbarcode');

JsBarcode("#barcode2", "Hi!", {
    textAlign: "left",
    textPosition: "top",
    font: "cursive",
    fontOptions: "bold",
    fontSize: 40,
    textMargin: 15,
    text: "Special"
  });