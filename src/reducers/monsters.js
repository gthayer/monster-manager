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

		default:
			return state;
	}

	return state;
}

export default monsters;