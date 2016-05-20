var a = 1;

function getScore() {
	var b = 2;
	var c = 3;
	function add() {
		return a + b + c;
	} 
	return add();
}

getScore();

function createPresident() {
	var name = 'Obama';
	var age = 54;
	function sayMyName() {
		console.log(name);
	}
	function sayMyAge() {
		console.log(age);
	}
	sayMyName();
	sayMyAge();
}
createPresident();