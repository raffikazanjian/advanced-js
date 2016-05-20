var monkeysArray= [
	{
		name: 'gus', 
		species: 'capuchin', 
		foodsEaten: 'oranges',
		introduce: function() {
			console.log('Hello my name is ' + monkeysArray[0].name)
		},
		eatSomething: function() {
			console.log('I like to eat ' + monkeysArray[2].foodsEaten)
		}
	},

	{
		name: 'zeus', 
		species: 'mandrill', 
		foodsEaten: 'bananas',
		introduce: function() {
			console.log('Hello my name is ' + monkeysArray[0].name)
		},
		eatSomething: function() {
			console.log('I like to eat ' + monkeysArray[2].foodsEaten)
		}
	},

	{
		name: 'thor', 
		species: 'tamarin', 
		foodsEaten: 'apples',
		introduce: function() {
			console.log('Hello my name is ' + monkeysArray[0].name)
		},
		eatSomething: function() {
			console.log('I like to eat ' + monkeysArray[2].foodsEaten)
		}
	}
];

function allMonkeys() {
	for (i=0; i<monkeysArray.length; i++) {
		console.log(monkeysArray[0].introduce());
		console.log(monkeysArray[0].eatSomething());
		console.log('-----------------------------------------');
	}
};

allMonkeys();

