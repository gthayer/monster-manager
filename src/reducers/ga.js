import ga from 'ga-react-router'

function pw_load() {

  	if(arguments.callee.z)return;else arguments.callee.z=true;
	var d=document;
	var s=d.createElement('script');
	var x=d.getElementsByTagName('script')[0];
	s.type='text/javascript';s.async=true;
	s.src='//www.projectwonderful.com/pwa.js';
	x.parentNode.insertBefore(s,x);
}

function google_analytics( state = [], action) {

	switch(action.type) {

		// TODO: Find a better way to get GA page tracking to work.
		case '@@router/LOCATION_CHANGE' :
			
			// Send GA Pageview.
			ga('send', {
				hitType: 'pageview',
				page: action.payload.pathname
			});

			// Project Wonderful Ad View.
			pw_load();

			return state;

		default:
			return state;
	}

	return state;
}

export default google_analytics;