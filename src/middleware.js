import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import Helmet from "react-helmet";

// Import Monsters
import monsters from './data/monsters';

// Create an object for the default data
const defaultState = {
	monsters
 };

export default (req, res) => {
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if(error) {
			res.status(500).send(error.message);
		} else if(redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if(renderProps) {

			let renderedBody = renderToString(
				<Provider store={createStore(reducers, defaultState)}> 
					<RouterContext {...renderProps} />
				</Provider>
			);

			let head = Helmet.rewind();

			res.status(200).send(`
				<!doctype html>
				<html}>
					<head>
						<meta charset="utf-8" />
						<title>${head.title.toString()}</title>
						${head.meta.toString()}

						<meta name="HandheldFriendly" content="True">
						<meta name="MobileOptimized" content="320">
						<meta name="viewport" content="width=device-width, initial-scale=1"/>
						
						<!-- Bootstrap -->
						<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
						<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
						<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

						<!-- Project Wonderful Ad Box Loader -->
						<script type="text/javascript">
						   (function(){function pw_load(){
							if(arguments.callee.z)return;else arguments.callee.z=true;
							var d=document;var s=d.createElement('script');
							var x=d.getElementsByTagName('script')[0];
							s.type='text/javascript';s.async=true;
							s.src='//www.projectwonderful.com/pwa.js';
							x.parentNode.insertBefore(s,x);}
							if (window.attachEvent){
							window.attachEvent('DOMContentLoaded',pw_load);
							window.attachEvent('onload',pw_load);}
							else{
							window.addEventListener('DOMContentLoaded',pw_load,false);
							window.addEventListener('load',pw_load,false);}})();
						</script>
						<!-- End Project Wonderful Ad Box Loader -->

						<link rel='stylesheet' href='/bundle.css'>

					</head>
					<body>
						<div id='app'>${renderedBody}</div>
						<script src='/bundle.js'></script>
					</body>
				</html>
			`);
		} else {
			res.status(404).send('Not found');
		}
	});
};
