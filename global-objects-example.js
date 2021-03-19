//Global objects - available across all modules.
console.log(__filename);
console.log(__dirname);

var first_name="Prasad R Kulkarni";
console.log(first_name);

var path = require('path');
console.log(path.basename(__filename));

const fileLocation = path.join(__dirname, __filename);
console.log(fileLocation);

console.log(path.extname(fileLocation));