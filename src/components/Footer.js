import React from 'react';
import { Link } from 'react-router';

const Filters = React.createClass({

	render() {

		return (
			<div className="footer row">

				<div className="bulilt-with col-sm-4">
					<p><strong>A sortable D&D 5<sup>th</sup> edition monster manual.</strong></p>
				</div>

				<div className="bulilt-with col-sm-4">
					<p><strong>Built with:</strong></p>
					<ul>
						<li><a href="https://facebook.github.io/react/" title="React.js">React.js</a></li>
						<li><a href="http://getbootstrap.com/" title="Twitter Bootstrap">Twitter Bootstrap</a></li>
					</ul>
				</div>

				<div className="repo col-sm-4">

				</div>

			</div>
		)
	}
});

export default Filters;