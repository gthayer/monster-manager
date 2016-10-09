function filters( state = [], action) {

	switch(action.type) {

		case 'UPDATE_FILTERS' :

		return {
			...state,
			[action.key]: action.value
		}

		default:
			return state;
	}

	return state;
}

export default filters;