const fs = require('fs');
const path = require("path");
//const jsParser = require('acorn').Parser;

function readFile(filePath) {
  try {
    const fullPath = path.join(__dirname, '..', filePath);
    console.log(`Reading file ${fullPath}`);
    return fs.readFileSync(fullPath, 'utf8');
  } catch (err) {
    return undefined;
  }
}

// function parseJS(js) {
//     try {
//         return jsParser.parse(js, {ecmaVersion: 2020});
//       } catch (err) {
//         return null;
//       }
// }

module.exports.readFile = readFile;
//module.exports.parseJS = parseJS;
