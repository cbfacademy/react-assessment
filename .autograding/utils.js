const fs = require('fs');
const path = require("path");

function readFile(filePath) {
    try {
        return fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
      } catch (err) {
        return undefined;
      }
}

module.exports.readFile = readFile;
