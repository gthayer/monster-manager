import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import monsters from './monsters';
import filters from './filters';
import encounter from './encounter';
import simulation from './simulation';
import ga from './ga';
import data from '../data/monsters';

const rootReducer = combineReducers({monsters, filters, encounter, simulation, data, ga, routing: routerReducer});

export default rootReducer;