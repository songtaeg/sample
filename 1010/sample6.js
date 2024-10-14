const path = require("path");

var txtPath = path.join(__dirname, "asdf","Text.txt");
console.log(txtPath);

//__filename
var dirPath = path.dirname("C:\\Users\\TJ-BU-700-P\\Desktop\\node2\\1010\\asdf\\Text.txt");
console.log(dirPath);

var filename = path.basename("C:\\Users\\TJ-BU-700-P\\Desktop\\node2\\1010\\asdf\\Text.txt", ".txt");
console.log(filename);