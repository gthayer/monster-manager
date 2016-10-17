import React from 'react';
import { Link } from 'react-router';

const Listing = React.createClass({
	render() {

		const { monster, i } = this.props;

		return (
			<div className="monster-listing col-sm-3">
				
				<h2>
					<Link to={`/listing/${monster.name}`}>
						{monster.name}
					</Link>
				</h2>

				<label htmlFor="armor_class">Armor Class:</label>
				<input name="armor_class" type="text" defaultValue={monster.armor_class} onChange={ e => this.props.update_listing(e.target.name, e.target.value, i ) } />
				
				<label htmlFor="hit_points">Hit Points:</label>
				<input name="hit_points" type="text" defaultValue={monster.hit_points} onChange={ e => this.props.update_listing(e.target.name, e.target.value, i ) } />
				
				<label htmlFor="speed">Speed:</label>
				<input name="speed" type="text" defaultValue={monster.speed} onChange={ e => this.props.update_listing(e.target.name, e.target.value, i ) } />
				
				<label htmlFor="notes">Notes:</label>
				<textarea name="notes" defaultValue={monster.notes} onChange={ e => this.props.update_listing( e.target.name, e.target.value, i ) } />

				<p className="remove" onClick={ e => this.props.remove_listing( i ) }>Remove</p>

			</div>
		)
	}
});

export default Listing;