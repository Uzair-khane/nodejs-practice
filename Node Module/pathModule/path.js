const path = require("path")
const filePath = "/desktop/nodejs/path/path.js"
// path.basename example 
const name = path.basename(filePath);
console.log(name)
// Gets the directory of a path.
const name2 = path.dirname(filePath);
console.log("dirname " ,name2)
// Gets the file extension. 
const name3 = path.extname(filePath);
console.log(name3)
// Breaks a path into parts.
const name4 = path.parse(filePath);
console.log(name4)
// path.resolve() Converts relative paths into an absolute path.
const name5=path.resolve(filePath);
console.log(name5)