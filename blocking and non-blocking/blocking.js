var fs = require("fs");
var data = fs.readFileSync("text.txt"); //reads file synchronously
console.log(data.toString());
console.log("End Here");