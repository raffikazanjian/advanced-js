var bottles = " bottles of beer on the wall.";
var beer = " bottles of beer.";
var takeOneDown = " You take one down, pass it around.";

for (var i=99; i >= 0; i--) {
	if(i > 1) {
		console.log(i + bottles);
		console.log(i + beer);
		console.log(takeOneDown);
		console.log(i-1 + bottles);
		console.log(' ');
	} else if (i === 1) {
		console.log (i + ' bottle of beer on the wall.')
		console.log(i + ' bottle of beer.')
		console.log(takeOneDown);
		console.log(i-1 + bottles);
		console.log(' ');
		alert('Ending 1 bottle of beer');
	} else {
		alert('Starting 0 bottles of beer');
		console.log('No bottles of beer on the wall!');
		console.log('No bottles of beer!');
		console.log('You need to buy more beer!');
		console.log(' ');
	}
}