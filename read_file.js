var fs = require("fs");

var filePath = process.argv[2];

console.log("Going to open an existing file");
fs.open(filePath, 'r+', function(err, fd) {

  if (err) {
    return console.error(err);
  }

  console.log("File opened successfully!");
  console.log("Let's read newly written data");

  fs.readFile(filePath, function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});





