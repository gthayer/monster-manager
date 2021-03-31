import ga from 'ga-react-router'

function google_analytics( state = [], action) {

	switch(action.type) {

		// TODO: Find a better way to get GA page tracking to work.
		case '@@router/LOCATION_CHANGE' :
			
			// Send GA Pageview.
			ga('send', {
				hitType: 'pageview',
				page: action.payload.pathname
			});

			return state;

		default:
			return state;
	}

	return state;
}

export default google_analytics;