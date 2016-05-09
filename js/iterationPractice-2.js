var bottles = " bottles of beer on the wall.";
var beer = " bottles of beer."
var takeOneDown = " You take one down, pass it around."

for (var i=99; i > 0; i--) {
	if(i > 1) {
		console.log(i + bottles);
		console.log(i + beer);
		console.log(takeOneDown);
		console.log(i-1 + bottles +'\n');
	} else {
		console.log('You need to buy more beer!');
	}
}