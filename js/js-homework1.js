var family = ['Raffi', 'Tanya', 'Aline', 'Berj', 'Lucy', 'Tomas', 'Garabed', 'Arpine', 'Vicken', 'Rupina', 'Koko'];

	/*for (var i = 1; i<family.length; i+=2) {
		console.log('This is some of my family:' + family[i]);
	}
*/
	console.log('This is some of my family:');
	for (var i = 0; i<family.length; i++) {
		if (i % 2 == 1) {
			console.log(family[i]);
		}
	}