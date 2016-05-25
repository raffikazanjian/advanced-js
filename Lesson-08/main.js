/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- Change the value of the element with the name id to be whatever the user inputs when page first loads.

- When the user clicks the "#new-thing-button" button, add whatever 
is in the input box to the "#fav-list" list.

- Clear the input box when the user clicks the button.
- Bonus: only add item if the input box is not blank (hint: check innerHTML property)

*/


window.onload = function() {
  var your_name = prompt("What is your name?"),
      button,
      thing_list,
      userListItem;
  
  console.log(your_name);
  document.getElementById('name').innerHTML = your_name;

  button = document.getElementById('new-thing-button');
  button.onclick = function(event) {
  	event.preventDefault();
  	var userInput = document.getElementById('new-thing').value;
  	console.log(userInput);

  	if (userInput === '') {
  		alert('you must enter a value into the list');
  	} else {
  		MyApp.add_to_list(userInput);
  		document.getElementById('new-thing').value = '';
  	}
  };

  var userListItem = document.getElementById('fav-list').lastChild;
  console.log('This is it ' + userListItem);
  
  clearListItem = document.getElementById('clear-thing-button');
  clearListItem.onclick = function(event) {
        event.preventDefault();

  };
};



MyApp = {};

MyApp.add_to_list = function(list) {
	var favlist = document.getElementById('fav-list');
	var entry = document.createElement('li');
	var text = document.createTextNode(list);
	entry.appendChild(text);
	favlist.appendChild(entry);
  //console.log(favlist.lastChild);
}
