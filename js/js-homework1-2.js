var parents = ['Garabed', 'Arpine', 'Rupina'];
var children = ['Ariana', 'Tomas', 'Aline'];
var siblings = ['Berj', 'Lucy','Koko'];
var family= [parents, children, siblings];

for (var index = 0; index < family.length; index++) {
	for (var namesIndex = 0; namesIndex < family[index].length; namesIndex++) {
		// parents[namesIndex]
		// children[namesIndex]
		// siblings[namesIndex]
		//console.log(family[i][namesIndex]);
		if (family[index]===1){
			console.log(family[1][namesIndex]);
		}
	}	
}
	