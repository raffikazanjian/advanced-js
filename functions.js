//function declaration
//function speak(words) {
//	console.log(words);
//}

//function expression

//var speak = function(words, anotherWord) {
//	console.log(anotherWord);
//	console.log(words);
//}

//speak('arf arf', 'meow meow');

var isMenuHidden = function() {

}

function setUpView(func) {
	func()
}

setUpView(isMenuHidden);

/*The difference between function declaration 
and function expressions is the way you name it. 
Function declarations are not defined in a variable. 
Function expressions are usualy assignned to variables.
Also in a function expression you cannot invoke the 
function until the end of the function. This is because it's 
assigned to a variable and you have to define the variable before
you invoke the function.

key phrase: JavaScript is event driven


*/
