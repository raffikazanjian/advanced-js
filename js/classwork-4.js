var faveCincoDeMayoFood = ['margaritas', 'tacos', 'burritos'];
faveCincoDeMayoFood.push('guacamole');
/*console.log(faveCincoDeMayoFood[3]);
faveCincoDeMayoFood[4] = 'churro';
console.log(faveCincoDeMayoFood)*/

for(var i = 0; i<faveCincoDeMayoFood.length; i++) {
	if (i % 2 === 1) {
		console.log(faveCincoDeMayoFood[i]);
	}
}