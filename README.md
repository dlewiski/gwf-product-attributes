## GoodwillFinds product attributes scripts

This repository contains 3 JavaScript files that extract descriptions from HTML
tags and generates and plain JavaScript object with organized tags and their
descriptions.

### Current state of product attributes

The original description data lives in the Salesforce Business Manager under
“Details” (after being entered into and fed from the listing service). See
example below:

Assuming we can get the details as a string of text, we can say the initial
product attributes data will look something like this:

```
const htmlStr =
  "<dl> <dt>Condition</dt><dd>Used, Good</dd> <dt>Height</dt><dd>0.00</dd> <dt>Width</dt><dd>0.00</dd> <dt>Length</dt><dd>0.00</dd> <dt>Size</dt><dd>XL</dd> <dt>Color</dt><dd>Blue</dd> <dd>Red</dd><dt>Closure</dt><dd>Pullover</dd> <dt>Season</dt><dd>All Seasons</dd> <dt>Size Type</dt><dd>Regular</dd> <dt>Department</dt><dd>Women</dd> <dt>Style</dt><dd>Cropped</dd> <dt>Neckline</dt><dd>Round Neck</dd> <dt>Sleeve Length</dt><dd>Long Sleeve</dd> <dt>Pattern</dt><dd>Striped</dd> <dt> Theme</dt> <dd>Modern</dd> <dt>Fit</dt><dd>Regular</dd> <dt>Occasion</dt><dd>Casual</dd> <dt>Features</dt><dd>Comfort</dd> <dt> Type</dt><dd>Blouse</dd> </dl>"
```

### Parsing and organizing product attributes

In the `product-attributes/` folder are three JavaScript files that take a
string similar to the example above and transform it into a JavaScript object
like the example below:

```
const productAttributesObj = {
  condition: ["Used, Good"],
  height: ["0.00"],
  width: ["0.00"],
  length: ["0.00"],
  size: ["XL"],
  color: ["Blue", "Red"],
  closure: ["Pullover"],
  season: ["All Seasons"],
  sizeType: ["Regular"],
  department: ["Women"],
  style: ["Cropped"],
  neckline: ["Round Neck"],
  sleeveLength: ["Long Sleeve"],
  pattern: ["Striped"],
  theme: ["Modern"],
  fit: ["Regular"],
  occasion: ["Casual"],
  features: ["Comfort"],
  type: ["Blouse"],
};
```

Since the original text uses HTML tags, it is most effective to utilize DOM
methods to handle the identification and separation of content based upon the
HTML tags themselves. However, we will likely not have access to the DOM since
we will want to handle this data on the server. Therefore, two of the scripts
are able to organize the data without access to the DOM. The file titled
`productAttributes.js` uses RegEx and the `productAttributesJSDOM.js` uses the
JSDOM dependency to enable the use of DOM methods. Given the uncertainty of the
environment where this logic will need to run, it was pragmatic to have a script
that was pure and requires no dependencies which is the script in
`productAttributes.js`. These scripts assume that the original description data
will be formatted with the `<dl>`, `<dt>`, and `<dd>` tags respectively.

### Using the scripts

Since these are JavaScript scripts, you will need to have Node installed on your
system then you can run the command using

`node [productAttributesFileName].js`

Modify the `htmlstr` variable in the top of the file to test the script on
various descriptions.

### Author and license

Written and prepared by Lewiski Consulting

MIT License
