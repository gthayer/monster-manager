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

						<link rel='stylesheet' href='/bundle.css'>

						<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
						<script>
						  (adsbygoogle = window.adsbygoogle || []).push({
						    google_ad_client: "ca-pub-7298702629619478",
						    enable_page_level_ads: true
						  });
						</script>
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
