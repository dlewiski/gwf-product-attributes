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
