
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n\n');


var inputArr = input.map(function(x){
	return x.split('\n');
});

var answer = 0;
for (a=0 ; a<3 ; a++){
    var maxSum = 0;
    var sumIndex = 0;

    for (i=0 ; i<inputArr.length ; i++){
        let arrSum = 0;
        inputArr[i].forEach(function(x){
            arrSum = arrSum + Number(x);
        })
        if (arrSum > maxSum) {
            maxSum = arrSum;
            sumIndex = i;
        }
    }
    inputArr.splice(sumIndex,1);
    answer += maxSum;
}
console.log(answer);

