function encounter( state = [], action) {

	const { key, value, i } = action;

	switch(action.type) {

		case 'ADD_TO_ENCOUNTER' :
			return [...state, action.monster];

		case 'UPDATE_LISTING' :
			return [
				...state.slice(0,i), // before the one we are updating
				{...state[i], [key]: value},
				...state.slice(i + 1), // after the one we are updating
			];

		case 'REMOVE_LISTING' :
			return [
				...state.slice(0,i), // before the one we are updating
				...state.slice(i + 1), // after the one we are updating
			]

		default:
			return state;
	}

	return state;
}

export default encounter;