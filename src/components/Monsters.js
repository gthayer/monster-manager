import React from 'react';
import Filters from './Filters';
import Listing from './Listing';

const Monsters = React.createClass({

	render() {

		// Get the monsters.
		const { monsters } = this.props;

		// Output listing.
		if ( monsters.length > 0 ) {
			return (
				<div className="monster-list row">
				
					<Filters {...this.props} />

					<div className="monster-listings row col-sm-12">
						{monsters.map((monster, i) => <Listing {...this.props} key={i} i={i} monster={monster} />)}
					</div>
				
				</div>
			)
		// Display error message.
		} else {
			return (
				<div className="monster-list row">
				
					<Filters {...this.props} />

					<div className="monster-listings row col-sm-12">
						<div className="alert alert-danger col-xs-12">No results available. Please refine your search.</div>
					</div>
				
				</div>
			)
		}
	}
});

export default Monsters;
