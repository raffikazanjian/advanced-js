/*
Create a JS file called gitSwitcher.js
In gitSwitcher write a switch statement that provides an opinion for each day of the week.
For example, if the day = "Tuesday" console.log "This day is the definition of Meh"

After your switch statement gives an opinion for every day of the week, create a repo in 
Github and add your gitSwitcher.js file to it so we can review.

Bonus challenge: request access to a classmate's repo, pull it down and edit the opinion 
of one of their day cases
*/

var grade = "Saturday";

switch(grade) {
	case 'Sunday':
		console.log('Relaxation day');
		break;

	case 'Monday':
		console.log('Back to work, today sucks!');
		break;

	case 'Tuesday':
		console.log('It\'s a good day!');
		break;

	case 'Wednesday':
		console.log('The week is almost over.');
		break;

	case 'Thursday':
		console.log('Class tonight, make sure homework is done!');
		break;

	case 'Friday':
		console.log('Let\'s get all out wrk done so the weekend is free');
		break;

	case 'Saturday':
		console.log('Today is fund day!');
		break;

	//default:
		//console.log('Unexpected grade value entered');
}