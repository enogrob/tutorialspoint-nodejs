/**
 * Created by enogrob on 23/11/16.
 */

var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");