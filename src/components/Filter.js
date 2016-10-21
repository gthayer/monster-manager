import React from 'react';
import { Link } from 'react-router';
import monsters from '../data/monsters';

const Filter = React.createClass({

	getInitialState: function() {

		// Get the monsters.
		const { filter } = this.props;

		// Create an empty array.
		let filter_key = [];

		// Loop through all monsters looking for available meta key values.
		for (var i = 0; i < monsters.length; i++) {
			filter_key.push( monsters[i][filter] );
		};

		// Create a Set to remove any duplicates.
		const uniq = new Set(filter_key);
		
		// Convert the set back to an array, then sort alphabetically.
		const options = [...uniq].sort();

		// Check if entries are numbers, if so numerically sort.
		{ ( 'number' === (typeof options[0]) ) ? options.sort(function(a,b) { return a - b; }) : '' };

		return {
			filter: options
		}
	},

	render() {

		const { filter, label, id, value  } = this.props;
 
		if ( 'search' === id ) {
			return (
				<div className="filter-field col-sm-2">
					<label htmlFor={id}>{label}: </label>
					<input type="text" value={value} name={id} id={id} onChange={ e => this.props.update_filters(this.props.filters, e.target.name, e.target.value) } />
				</div>
			)
		} else {
			return (
				<div className="filter-field col-sm-2">
					<label htmlFor={id}>{label}: </label>
					<select value={value} name={id} id={id} onChange={ e => this.props.update_filters(this.props.filters, e.target.name, e.target.value) }>
						<option value="">{label}</option>
						{this.state.filter.map((option,i) => <option key={i} value={option}>{option}</option>)}
					</select>
				</div>
			)
		}
	}
});

export default Filter;
