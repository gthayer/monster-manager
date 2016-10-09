import React from 'react';
import { Link } from 'react-router';

const Listing = React.createClass({
	render() {

		const { monster, i } = this.props;
		
		return (
			<div className="monster-listing col-xs-12 col-sm-4">
				
				<h2>
					<Link to={`/listing/${monster.name}`}>
						{monster.name}
					</Link>
				</h2>

				<p>{monster.size} {monster.type} {monster.subtype} - {monster.alignment}</p>
				<p>CR: {monster.challenge_rating}</p>

			</div>
		)
	}
});

export default Listing;