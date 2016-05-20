function sum(num1, num2) {
	return num1 + num2;
}

function double(number) {
	return 2 * number;
}

//var sumValue = sum(2,3);
console.log(sumValue);

//console.log(double(sumValue));

console.log(double(sum(2,3)));


function sumsum(num1, num2) {
	if (typeof(num1) !== 'number') {
		return;
	}
	console.log(num1 + num2);
	return num1 + num2;
}

sumsum('2', 3);