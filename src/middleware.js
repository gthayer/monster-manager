import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import reducers from './reducers';
import routes from './routes';

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
			if(process.env.NODE_ENV == 'development') {
				res.status(200).send(`
					<!doctype html>
					<html>
						<header>
							<title>Monster Manager</title>
							<meta name="HandheldFriendly" content="True">
							<meta name="MobileOptimized" content="320">
							<meta name="viewport" content="width=device-width, initial-scale=1"/>
							
							<!-- Bootstrap -->
							<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
							<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
							<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

						</header>
						<body>
							<div id='app'>${renderToString(
								<Provider store={createStore(reducers, defaultState)}> 
									<RouterContext {...renderProps} />
								</Provider>
							)}</div>
							<script src='/bundle.js'></script>
						</body>
					</html>
				`);
			} else if(process.env.NODE_ENV == 'production') {
				res.status(200).send(`
					<!doctype html>
					<html>
						<header>
							<title>Monster Manager</title>
							<meta name="HandheldFriendly" content="True">
							<meta name="MobileOptimized" content="320">
							<meta name="viewport" content="width=device-width, initial-scale=1"/>

							<!-- Bootstrap -->
							<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
							<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
							<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

							<link rel='stylesheet' href='/bundle.css'>
						</header>
						<body>
							<div id='root'>${renderToString(
								<Provider store={createStore(reducers, defaultState)}> 
									<RouterContext {...renderProps} />
								</Provider>
							)}</div>
							<script src='/bundle.js'></script>
						</body>
					</html>
				`);
			}
		} else {
			res.status(404).send('Not found');
		}
	});
};
