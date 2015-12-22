var numbers = process.argv.slice(2);
var total = numbers.reduce(function(a,b){
	return +a + +b;
})

console.log(total);