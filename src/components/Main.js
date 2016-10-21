import React from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';
if(process.env.WEBPACK) require('./style.scss');

const Main = React.createClass({
	render() {
		return (
			<div className="col-sm-12">

				<Header {...this.props} />
				
				{React.cloneElement(this.props.children, this.props)}

				<Footer />

			</div>
		)
	}
});

export default Main;