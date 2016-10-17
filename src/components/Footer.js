import React from 'react';
import { Link } from 'react-router';

const Filters = React.createClass({

	render() {

		return (
			<div className="footer row">

				<div className="bulilt-with col-sm-4">
					<p><strong>An interactive Dungeons and Dragons 5e Monster Manual built on React.js.</strong></p>
				</div>

				<div className="bulilt-with col-sm-4">
					<p>Some content used under the <a href="http://www.opengamingfoundation.org/ogl.html" target="_blank" title="Open Gaming License">Open Gaming License.</a></p>
				</div>

				<div className="repo col-sm-4">
					<p><a href="https://github.com/gthayer/monster-manager" target="_blank" title="Contribute on GitHub">Contribute on GitHub!</a></p>
				</div>

			</div>
		)
	}
});

export default Filters;