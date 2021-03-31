import monsters from "./monsters";

function simulation( state = [], action) {

	const { key, value, i } = action;

	switch(action.type) {

		case 'RUN_SIMULATION' :

			console.log('Running Simulation...');

			creatures = [];
			keep_fighting = true;
			const { party_a, party_b } = action;

			// Give all creatures an initiative and sort them into parties.
			party_a.forEach(creature => {
				// TODO: Dynamically set the API values.
				fetch( 'https://www.dnd5eapi.co/api/monsters/acolyte/' )
					.then(response => response.json())
					.then(creature => {
						creature.party = 'A';
						creature.initiative = rollInitiative( creature );
						creatures.push(creature)
					});
			});

			party_b.forEach(creature => {
				creature.party = 'B';
				creature.initiative = rollInitiative( creature );
				creatures.push(creature);
			});

			// Define the initiative order.
			creatures.sort( ( a,b ) => {
				if (a.initiative < b.initiative) return -1;
				if (a.initiative > b.initiative) return 1;
				return 0;
			});
			
			while ( keep_fighting ) {
				creatures.forEach( (creature) => {
					// Action

					// const {actions} = creature;

					// for ( var i = 0; i < actions.length; i++ )
					// 	actions[]
						
					// 	console.log( action.damage_dice );
					// 	if ( action.damage_dice ) {
					// 		break;
					// 	}
					// });

					// Bonus Action
				});

				keep_fighting = false;
			}

			return [...state, action.monster];

		default:
			return state;
	}

	return state;
}

function calculate_ability_mod( ability_score ) {
	return Math.floor( ( ability_score / 2 )-5 );
}

function rollInitiative( creature ) {
	const dex_mod = calculate_ability_mod( creature.dexterity );
	return rollDice( 1, 20, dex_mod );
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

	if ( verbose ) {
		console.log( `Rolled: ${qty}d${sides}+${mod}` );
		//console.log( `Results: ${ rolls.join()} +${mod}` );
		console.log( `Total: ${total}` );
	}

	return total;
}

export default simulation;