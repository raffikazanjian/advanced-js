var shoes = [
{brand: 'nike', price: 4.59, size: 7},
{brand: 'addidas', price: 9.99, size: 12}
];

var user = {
	size: 12,
	budget: 20,
	findShoes: function(shoes) {
		for (var i=0; i<shoes.length; i++) {
			if (shoes[i].size === 12 && shoes[i].price <= 20) {
				console.log('I am going to buy the ' + shoes[i].brand);
			}
		}
	}
}

user.findShoes(shoes);