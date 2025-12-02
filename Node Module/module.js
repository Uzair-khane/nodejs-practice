// built in moduel  
const fs = require("fs");
fs.writeFileSync("data.txt","heloo this is me uzair khan")
fs.readFile("data.txt",)

// local module import from locamodule.js file  
const add = require("./localModul.js");
console.log(add(12,5))