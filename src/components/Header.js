import React from 'react';
import { Link } from 'react-router';

const Filters = React.createClass({

	render() {

		const { encounter } = this.props;

		return (
			<div className="header row">

				<div className="col-xs-12 hidden-xs">
					<div id="pw_adbox_79779_5_0" className="project-wonderful"></div>
				</div>

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
							<Link to={`/manager`}>View Encounter
								<img className="encounter-icon" src="/assets/wyvern.svg" />
								<span>{encounter.length}</span>
								</Link>
						</li>
					</ul>
				</div>

			</div>
		)
	}
});

export default Filters;