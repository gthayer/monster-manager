import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import monsters from './monsters';
import filters from './filters';
import encounter from './encounter';
import data from '../data/monsters';

const rootReducer = combineReducers({monsters, filters, encounter, data, routing: routerReducer});

export default rootReducer;