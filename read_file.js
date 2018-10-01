var fs = require("fs");

var filePath = process.argv[2];

// console.log("Going to open an existing file");
fs.open(filePath, 'r+', function(err, fd) {

  if (err) {
    return console.error(err);
  }

  // console.log("File opened successfully!");
  // console.log("Read data");

  fs.readFile(filePath, function (err, fileData) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read from file" + filePath + ": " + fileData.toString());
  });
});





