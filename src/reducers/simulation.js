import Simulation from "../utils/simulation";

function simulation( state = [], action) {

	const { key, value, i } = action;

	switch(action.type) {

		case 'RUN_SIMULATION' :

			console.log('Running Simulation...');

			creatures = [];
			keep_fighting = true;
			const { party_a, party_b } = action;

			party_a_Copy = JSON.parse(JSON.stringify(party_a));
			party_b_Copy = JSON.parse(JSON.stringify(party_b));
			let obj = new Simulation(party_a_Copy, party_b_Copy);

			return [...state, action.monster];

		default:
			return state;
	}

	return state;
}

export default simulation;