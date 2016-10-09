import React from 'react';
import { Link } from 'react-router';
import Encounterlisting from './Encounterlisting';

if(process.env.WEBPACK) require('./style.scss');

const Manager = React.createClass ({

	render() {

		const { encounter } = this.props;

		if ( encounter.length > 0 ) {

			return (
				<div className="monster-manager row">
					{encounter.map((monster, i) => <Encounterlisting {...this.props} key={i} i={i} monster={monster} />)}
				</div>
			);

		} else {

			return (
				<div className="monster-manager row">
					<div className="alert alert-danger col-xs-12">No monsters have been added to your encounter.</div>
				</div>
			);
		}
	}
});

export default Manager;