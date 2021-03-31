import Simulation from "../utils/simulation";

function simulation( state = [], action) {

	const { key, value, i } = action;

	switch(action.type) {

		case 'RUN_SIMULATION' :

			console.log('Running Simulation...');

			creatures = [];
			keep_fighting = true;
			const { party_a, party_b } = action;

			let obj = new Simulation(party_a, party_b);
			console.log( obj );

			// // Give all creatures an initiative and sort them into parties.
			// party_a.forEach(creature => {
			// 	creature.party = 'A';
			// 	creature.initiative = rollInitiative(creature);
			// 	creatures.push(creature);
			// });

			// party_b.forEach(creature => {
			// 	creature.party = 'B';
			// 	creature.initiative = rollInitiative( creature );
			// 	creatures.push(creature);
			// });

			// // Define the initiative order.
			// creatures.sort( ( a,b ) => {
			// 	if (a.initiative < b.initiative) return -1;
			// 	if (a.initiative > b.initiative) return 1;
			// 	return 0;
			// });

			// console.log( creatures );
			
			// while ( keep_fighting ) {

			// 	console.log( `Total Creatures: ${creatures.length}` );

			// 	creatures.forEach( (creature) => {
			// 		attack_creature( creature );
			// 	});

			// 	keep_fighting = false;
			// }

			return [...state, action.monster];

		default:
			return state;
	}

	return state;
}

export default simulation;