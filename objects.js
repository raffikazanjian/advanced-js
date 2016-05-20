var myMotorcycle = {
	wheels: 2,
	color: 'black',
	maxSpeed: 300,
	owners: ['alex', 'zach']
};

//console.log(myMotorcycle.wheels);
console.log(myMotorcycle['wheels']);
myMotorcycle.isCool = false;

//or 

myMotorcycle['isCool'] = true;

//or

for (var key in myMotorcycle) {
	//console.log(key);
	console.log(myMotorcycle[key])
}

var isRaffi = {
	age: 42;
	hobbies: ['cars', 'baseball'];
	features: 'bald';
}