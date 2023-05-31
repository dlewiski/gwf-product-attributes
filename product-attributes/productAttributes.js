// * Regex version to work with no dependencies and no access to the DOM
// The HTML string
const htmlStr =
  "<dl> <dt>Condition</dt><dd>Used, Good</dd> <dt>Height</dt><dd>0.00</dd> <dt>Width</dt><dd>0.00</dd> <dt>Length</dt><dd>0.00</dd> <dt>Size</dt><dd>XL</dd> <dt>Color</dt><dd>Blue</dd> <dd>Red</dd><dt>Closure</dt><dd>Pullover</dd> <dt>Season</dt><dd>All Seasons</dd> <dt>Size Type</dt><dd>Regular</dd> <dt>Department</dt><dd>Women</dd> <dt>Style</dt><dd>Cropped</dd> <dt>Neckline</dt><dd>Round Neck</dd> <dt>Sleeve Length</dt><dd>Long Sleeve</dd> <dt>Pattern</dt><dd>Striped</dd> <dt> Theme</dt> <dd>Modern</dd> <dt>Fit</dt><dd>Regular</dd> <dt>Occasion</dt><dd>Casual</dd> <dt>Features</dt><dd>Comfort</dd> <dt> Type</dt><dd>Blouse</dd> </dl>";

/**
 * Convert a string to lower camel case.
 * Remove special characters, numbers, and extra spaces, then camel case it.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The lower camel cased string.
 */
function toLowerCamelCase(str) {
  return str
    .trim() // Remove leading and trailing spaces
    .replace(/[^a-zA-Z]+/g, " ") // Remove special characters and numbers and replace with single space
    .replace(/\b(.)/g, (_, char, index) =>
      index === 0 ? char.toLowerCase() : char.toUpperCase()
    ) // Lowercase the first character and uppercase the rest
    .replace(/\s+/g, ""); // Remove spaces to create camelCase
}

/**
 * Extracts the tag names and their content from the HTML string.
 *
 * @param {string} htmlString - The HTML string to parse.
 * @returns {Array} An array of tuples where the first element is tag and the second element is content.
 */
function getTagsAndValues(htmlString) {
  // RegExp pattern to extract 'dt' and 'dd' tags and their content
  const pattern = /<(dt|dd)>(.*?)<\/\1>/gs;
  const tagsAndValues = [];
  let match;

  // Iterate over matches
  while ((match = pattern.exec(htmlString)) !== null) {
    tagsAndValues.push([match[1], match[2].trim()]);
  }

  return tagsAndValues;
}

/**
 * Parse an HTML string to get product attributes.
 * This function parses the HTML string, finds 'dt' and 'dd' elements,
 * and groups 'dd' elements that belong to each 'dt' element.
 *
 * @param {string} htmlString - The HTML string to parse.
 * @returns {Object} An object where keys are attribute names and values are arrays of attribute values.
 */
function getProductAttributes(htmlString) {
  const tagsAndValues = getTagsAndValues(htmlString);

  // Initialize an empty object to store product attributes
  const productAttributes = {};
  let currentKey = "";

  // Iterate over tags and values
  for (const [tag, content] of tagsAndValues) {
    if (tag === "dt") {
      // If it's a 'dt' tag, convert the content to camel case and set it as the current key
      currentKey = toLowerCamelCase(content);
      productAttributes[currentKey] = [];
    } else {
      // If it's a 'dd' tag, add the content to the array of the current key
      productAttributes[currentKey].push(content);
    }
  }

  return productAttributes;
}

// Call getProductAttributes with the HTML string
const productAttributesMap = getProductAttributes(htmlStr);

// Log the results
console.log(productAttributesMap);

// ! PLAYGROUND

// * Before ChatGPT Refactor
// const getProductAttributes = stringToProcess => {
//   const htmlAttributesArr = stringToProcess.split("<dt>");

//   const lastAttribute = htmlAttributesArr.pop();
//   cleanedLastAttribute = lastAttribute.replace("</dl>", "");

//   console.log("Last attribute", cleanedLastAttribute);

//   // Clean array - Remove <dl> html string from first position in array
//   htmlAttributesArr.shift();
//   htmlAttributesArr.push(cleanedLastAttribute);
//   return htmlAttributesArr;
// };

// // From ChatGPT
// function toLowerCamelCase(str) {
//   // Remove any special characters or numbers and extra spaces
//   let sanitizedStr = str.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, " ");

//   return (
//     sanitizedStr
//       // Lowercase the first letter of the first word
//       .replace(/\b\w/g, (match, index) =>
//         index === 0 ? match.toLowerCase() : match.toUpperCase(),
//       )
//       // Remove spaces
//       .replace(/\s/g, "")
//   );
// }

// const productAttributesObj = { color: ["Green"] };

// const attributesArr = getProductAttributes(htmlStr);

// attributesArr.forEach(attribute => {
//   const attributeData = attribute.split("</dt>");
//   const attributeKey = attributeData[0];
//   const attributeValues = attributeData[1].split("/dd>");

//   console.log(
//     toLowerCamelCase(attributeKey),
//     attributeValues[0].replace("<dd>", "").replace("<", ""),
//   );

//   attributeValues.forEach(attributeValue => {
//     if (!attributeValue.trim()) {
//       return;
//     } else if (productAttributesObj[toLowerCamelCase(attributeKey)]) {
//       productAttributesObj[toLowerCamelCase(attributeKey)].push(
//         attributeValue.replace("<dd>", "").replace("<", ""),
//       );
//     } else {
//       productAttributesObj[toLowerCamelCase(attributeKey)] = [
//         attributeValue.replace("<dd>", "").replace("<", ""),
//       ];
//     }
//   });
// });

// console.log(productAttributesObj);

// * OLD

// const toLowerSnakeCase = attributeNameStr => {
//   return attributeNameStr.toLowerCase().trim().replace(" ", "_");
// };

// console.log(getProductAttributes(htmlStr));
