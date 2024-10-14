//const {dollar,yen} = require("./number.js");
//console.log(dollar);

const app = require("./number.js");
//const {dollarConvert,yenConvert} = require("./func.js");
const convert = require("./func.js");

console.log(app.dollar);
convert.dollarConvert(app.dollar);
convert.yenConvert(app.yen);