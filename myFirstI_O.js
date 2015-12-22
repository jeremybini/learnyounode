//Modules and vars
var fs = require('fs');
var filePath = process.argv[2];

//Read the file and stringify the buffer data
var data = fs.readFileSync(filePath).toString();

//Log 1 less due to no newline at end of file
console.log(data.split('\n').length - 1);