/*for (var i = 0; i<=20; i++) {
	if (i % 20 === 0) {
		console.log(i + ' is even');
	} else {
		console.log(i + ' is odd');
	}
}

var nine = 9;

for (var i = 0; i<=10; i++) {
	var answer = i * nine;
	console.log(nine + '*' + i + ' = ' + answer );
}*/

var bottlesWall = 'bottles of beer on the wall';
var bottles = 'bottles of beer'

for (var i = 99; i >= 1; i--) {
	if (i >= 1) {
		console.log( i + ' ' + bottlesWall);
		console.log( i + ' ' + bottles +'!');
		console.log('You take one down!');
		console.log('Pass it around!');
		console.log( (i-1)  + ' ' + bottlesWall);
		console.log(' ');
	} else {
		console.log('Time to buy more beer!')
	}
}