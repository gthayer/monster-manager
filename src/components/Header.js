import React from 'react';
import { Link } from 'react-router';

const Filters = React.createClass({

	render() {

		const { encounter } = this.props;

		return (
			<div className="header row">

				<div className="col-xs-12">

					<div className="ask-notice">

						<p>Are you a fan of monstermanager.online?</p>
						<p>Please consider making a $1 donation to keep this project online.</p>

						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" >
							<input type="hidden" name="cmd" value="_s-xclick" />
							<input type="hidden" name="hosted_button_id" value="C88YQWV3TV3JW" />
							<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
							<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
						</form>

					</div>

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