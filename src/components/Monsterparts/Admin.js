import React from 'react';
import { Link } from 'react-router';

const Admin = React.createClass({
	render() {

		const { monster } = this.props;

		return (
			<div className="monster-admin">
				<a href="#" className="btn btn-sm btn-primary" onClick={ e => this.props.add_to_encounter(monster) }>Add to Encounter</a>
			</div>
		)
	}
});

export default Admin;