## How to Use the GoodwillFinds Product Description Scripts

Welcome! This folder has 3 JavaScript (JS) files. These files help us collect
details about different products from their HTML descriptions and organize them
in a simpler way.

### What is this about?

Every product has details listed in the Salesforce Business Manager, like its
condition, size, color, etc. These details are put in something called 'HTML
tags.' Imagine these tags as labels on different parts of the description.

Here's an example of how these product details look in HTML tags:

```JavaScript
const htmlStr =
  "<dl> <dt>Condition</dt><dd>Used, Good</dd> <dt>Height</dt><dd>0.00</dd> <dt>Width</dt><dd>0.00</dd> <dt>Length</dt><dd>0.00</dd> <dt>Size</dt><dd>XL</dd> <dt>Color</dt><dd>Blue</dd> <dd>Red</dd><dt>Closure</dt><dd>Pullover</dd> <dt>Season</dt><dd>All Seasons</dd> <dt>Size Type</dt><dd>Regular</dd> <dt>Department</dt><dd>Women</dd> <dt>Style</dt><dd>Cropped</dd> <dt>Neckline</dt><dd>Round Neck</dd> <dt>Sleeve Length</dt><dd>Long Sleeve</dd> <dt>Pattern</dt><dd>Striped</dd> <dt> Theme</dt> <dd>Modern</dd> <dt>Fit</dt><dd>Regular</dd> <dt>Occasion</dt><dd>Casual</dd> <dt>Features</dt><dd>Comfort</dd> <dt> Type</dt><dd>Blouse</dd> </dl>"
```

### What do these scripts do?

The three JS files in the product-attributes/ folder take these HTML tags and
change them into a simpler object. Here's an example of what it looks like after
the transformation:

```JavaScript
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

Our scripts use different ways to do this. One of them, productAttributes.js,
uses something called RegEx. Another one, productAttributesJSDOM.js, uses a
helper called JSDOM. All scripts assume that the product details will always be
in `<dl>`, `<dt>`, and `<dd>` HTML tags.

### How can you use these scripts?

First, you need to have Node (a programming tool) on your computer. You can then
use the command below to run the script:

```
$ node [productAttributesFileName].js
```

To try the script with different product details, you can change the `htmlstr`
variable at the start of the file.

### Who made this and can you use it?

This was created by Lewiski Consulting and it's available for everyone to use
under the MIT License.
