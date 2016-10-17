import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import monsters from './monsters';
import filters from './filters';
import encounter from './encounter';
import ga from './ga';
import data from '../data/monsters';

const rootReducer = combineReducers({monsters, filters, encounter, data, ga, routing: routerReducer});

export default rootReducer;