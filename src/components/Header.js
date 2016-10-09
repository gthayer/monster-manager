import React from 'react';
import { Link } from 'react-router';

const Filters = React.createClass({

	render() {

		return (
			<div className="header row">

				<div className="col-sm-6">
					<h1>
						<Link to={`/`}>Monster Manager</Link>
					</h1>
				</div>

				<div className="col-sm-6">
					<ul className="nav nav-tabs nav nav-tabs navbar-right">
						<li>
							<Link to={`/`}>Monster List</Link>
						</li>
						<li>
							<Link to={`/manager`}>View Encounter</Link>
						</li>
					</ul>
				</div>

			</div>
		)
	}
});

export default Filters;