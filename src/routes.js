import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Monsters from './components/Monsters';
import Monster from './components/Monsterparts';
import Manager from './components/Manager';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Monsters}></IndexRoute>
		<Route path="/listing/:postId" component={Monster}></Route>
		<Route path="/manager" component={Manager}></Route>
	</Route>
);