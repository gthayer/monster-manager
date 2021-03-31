import React from 'react';
import { Link } from 'react-router';

import General from './General';
import Stats from './Stats';
import Misc from './Misc';
import Savingthrows from './Savingthrows';
import Skills from './Skills';
import Actions from './Actions';
import Admin from './Admin';
import Helmet from 'react-helmet';


if(process.env.WEBPACK) require('./style.scss');

// TODO: Re-add Speed.
const Monster = React.createClass({
	render() {

		const { postId } = this.props.params;
		const i = this.props.monsters.findIndex( (monster) => monster.name === postId );
		const monster = this.props.monsters[i];

		return (
			<div className="monster-single row">

				<Helmet
					title={ monster.name + ' - Monster Manager Listing' }
					meta={[
						{name: "description", content: monster.size + ' ' + monster.type + ' - ' + monster.alignment + '. Armor Class: ' + monster.armor_class + '. Hit Points: ' + monster.hit_points + ' (' + monster.hit_dice + '). '+ monster.actions[0].desc },
						{property: 'og:title', content: monster.name + ' - Monster Manager Listing'},
					]} />

				<div className="col-sm-3 col-sm-push-9">
					<Admin {...this.props} i={i} monster={monster} />
				</div>
				<div className="col-sm-9 col-sm-pull-3">
					<General {...this.props} i={i} monster={monster} />
				</div>

				<div className="col-sm-6">
					<Misc {...this.props} i={i} monster={monster} />
					<Skills {...this.props} i={i} monster={monster} />
				</div>

				<div className="col-sm-3">
					<Stats {...this.props} i={i} monster={monster} />
				</div>
				<div className="col-sm-3">
					<Savingthrows {...this.props} i={i} monster={monster} />
				</div>

				<div className="col-sm-12">
					<Actions {...this.props} i={i} monster={monster} />
				</div>
				
			</div>
		)
	}
});

export default Monster;