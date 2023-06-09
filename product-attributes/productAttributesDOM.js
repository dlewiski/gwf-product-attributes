// * If we have access to the DOM we can directly use DOM API methods. See the below script:

// The HTML string
const htmlStr =
  "<dl> <dt>Condition</dt><dd>Used, Good</dd> <dt>Height</dt><dd>0.00</dd> <dt>Width</dt><dd>0.00</dd> <dt>Length</dt><dd>0.00</dd> <dt>Size</dt><dd>XL</dd> <dt>Color</dt><dd>Blue</dd> <dd>Red</dd><dt>Closure</dt><dd>Pullover</dd> <dt>Season</dt><dd>All Seasons</dd> <dt>Size Type</dt><dd>Regular</dd> <dt>Department</dt><dd>Women</dd> <dt>Style</dt><dd>Cropped</dd> <dt>Neckline</dt><dd>Round Neck</dd> <dt>Sleeve Length</dt><dd>Long Sleeve</dd> <dt>Pattern</dt><dd>Striped</dd> <dt> Theme</dt> <dd>Modern</dd> <dt>Fit</dt><dd>Regular</dd> <dt>Occasion</dt><dd>Casual</dd> <dt>Features</dt><dd>Comfort</dd> <dt> Type</dt><dd>Blouse</dd> </dl>";

// Convert the HTML string into a DOM tree
const parser = new DOMParser();
const doc = parser.parseFromString(htmlStr, "text/html");

/**
 * Convert a string to lower camel case.
 * @param {string} str - The string to convert.
 * @returns {string} The lower camel cased string.
 */
const toLowerCamelCase = (str) =>
  str
    .trim()
    .replace(/[^a-zA-Z]+/g, " ")
    .replace(/\b(.)/g, (_, char, index) =>
      index === 0 ? char.toLowerCase() : char.toUpperCase()
    )
    .replace(/\s+/g, "");

/**
 * Handle each tag logic.
 * @param {Object} el - The element to handle.
 * @param {Object} obj - The productAttributes object.
 * @param {string} currentKey - The current key.
 * @returns {string} The current key.
 */
const handleTag = (el, obj, currentKey) => {
  const content = el.textContent.trim();
  if (el.tagName === "DT") {
    currentKey = toLowerCamelCase(content);
    obj[currentKey] = [];
  } else {
    obj[currentKey].push(content);
  }
  return currentKey;
};

/**
 * Parse an HTML string to get product attributes.
 * This function parses the HTML string, finds 'dt' and 'dd' elements,
 * and groups 'dd' elements that belong to each 'dt' element.
 * @returns {Object} An object where keys are attribute names and values are arrays of attribute values.
 */
const getProductAttributes = () => {
  const elements = doc.querySelectorAll("dt, dd");

  // Initialize an empty object to store product attributes
  let productAttributes = {},
    currentKey = "";

  // Iterate over tags and values
  for (const el of elements) {
    currentKey = handleTag(el, productAttributes, currentKey);
  }

  return productAttributes;
};

// Call getProductAttributes with the HTML string
const productAttributesMap = getProductAttributes();

// Log the results
console.log(productAttributesMap);
