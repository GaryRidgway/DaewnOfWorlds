function diceRoll(int) {
	return Math.floor(Math.random() * int) + 1;
}

// Add elder god.
function addElderGod(name, domain1, domain2, domain3, description) {
	var dict = {
		domains: [domain1.toLowerCase(), domain2.toLowerCase(), domain3.toLowerCase()],
		description: description
	};

	elderGods[name] = dict;
}