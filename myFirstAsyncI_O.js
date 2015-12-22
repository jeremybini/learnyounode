//Require module
var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(error, data){
	if (error) throw error;
	console.log(data.split('\n').length-1)
});