
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n\n');

// Make your solution!
// console.log(input);
var inputArr = input.map(function(x){  //以换行符分隔成数组中的数组
	return x.split('\n');
});
// console.log(inputArr);


var maxSum = 0;
for (i=0 ; i<inputArr.length ; i++){
	let arrSum = 0;
	inputArr[i].forEach(function(x){
		arrSum = arrSum + Number(x);
	})
	if (arrSum > maxSum) {
		maxSum = arrSum;
	}
}
console.log(maxSum);



