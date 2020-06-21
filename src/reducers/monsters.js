function monsters( state = [], action) {

	switch(action.type) {

		case 'UPDATE_FILTERS' :

		const filters = {...action.filters, [action.key]: action.value};

		// Create an empty array for results.
		let results = [];

		// Loop through all monsters.
		action.monsters.filter( m => {

			// Set base variables.
			var count = 0;
			var successes = 0;

			// Loop through all available filters on the monster.
			for ( let key in filters ) {
				let value = filters[key];

				// On work on filters with values.
				if ( value.length != 0 ) {

					// Increment the filter count.
					count++;

					// Special field condtions which increase the success count.
					switch ( key ) {

						case 'challenge_rating_min' :
							{ m.challenge_rating >= value ? successes++ : null }
							break;

						case 'challenge_rating_max' :
							{ m.challenge_rating <= value ? successes++ : null }
							break;

						case 'search' :
							{ m.name.toLowerCase().indexOf( value ) != -1 ? successes++ : null }
							break;

						default:
							{ m[key] == value ? successes++ : null }
					}
				}
			}

			// If the monster matches all filters, add it to the results.
			if ( successes == count ) {
				results.push( m );
			}

		});

			// Return Results.
			return results;

		case 'ROLL_ATTACK' :

			const { attack_bonus, damage_dice, damage_bonus } = {...action}
			const damageRoll = damage_dice.split("d");

			// console.log( 'Attack Roll' );
			rollDice( 1, 20, attack_bonus );

			console.log( 'Damage' );
			rollDice( damageRoll[0], damageRoll[1], damage_bonus );
			return state;

		default:
			return state;
	}

	return state;
}

function rollDice( qty = 1, sides = 6, mod = 0, crit = false, verbose = true ) {

	let rolls = [];

	if ( crit ) {
		qty = qty * 2;
	}

	for ( let index = 0; index < qty; index++ ) {
		rolls.push( Math.ceil( Math.random() * sides ) );
	}

	const total = mod + rolls.reduce(function(a, b){
		return a + b;
	}, 0);

	const results = rolls.join();

	if ( verbose ) {
		console.log( `Rolled: ${qty}d${sides}+${mod}` );
		console.log( `Results: ${ rolls.join()} +${mod}` );
		console.log( `Total: ${total}` );
	}
}

export default monsters;