import React from 'react';
import { Link } from 'react-router';
import Filter from './Filter';
import Helmet from 'react-helmet';

const Filters = React.createClass({

	render() {

		return (

			<div className="monster-filters row col-sm-12">

			<Helmet
				title={ 'Monster Manager: Enounter Management Tools for GMs' }
				meta={[
					{name: "description", content: 'An interactive Dungeons and Dragons 5e Monster Manual featuring over 300 monsters from the D&D System Resource Documents (SRD).' },
					{property: 'og:title', content: 'Monster Manager: Enounter Management Tools for GMs'},
				]} />

				<Filter {...this.props} value={this.props.filters.challenge_rating_min} key="challenge_rating_min" id="challenge_rating_min" filter="challenge_rating" label="Challenge Rating - Min"/>
				<Filter {...this.props} value={this.props.filters.challenge_rating_max} key="challenge_rating_max" id="challenge_rating_max" filter="challenge_rating" label="Challenge Rating - Max"/>
				<Filter {...this.props} value={this.props.filters.type} key="type" id="type" filter="type" label="Type"/>
				<Filter {...this.props} value={this.props.filters.size} key="size" id="size" filter="size" label="Size"/>
				<Filter {...this.props} value={this.props.filters.alignment} key="alignment" id="alignment" filter="alignment" label="Alignment"/>
				<Filter {...this.props} value={this.props.filters.search} key="search" id="search" filter="search" label="Search"/>

			</div>
		)
	}
});

export default Filters;
