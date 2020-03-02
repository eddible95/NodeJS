var fs = require("fs");
//var data = fs.readFileSync('input.txt');

// Blocking Code
//console.log(data.toString());
//console.log('Program Ended');

// Non-Blocking Code
fs.readFile('input.txt', function(err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
})

console.log("Program Ended");
