import React from 'react';
import Action from './Action'

const Actions = React.createClass({
	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-actions">
				
				<h3 className="section-title">Actions</h3>

				{ monster.special_abilities ? monster.special_abilities.map((action, i) => <Action {...this.props} key={i} i={i} action={action} />) : null }
				{ monster.reactions ? monster.reactions.map((action, i) => <Action {...this.props} key={i} i={i} action={action} />) : null }
				{ monster.actions ? monster.actions.map((action, i) => <Action {...this.props} key={i} i={i} action={action} />) : null }
				{ monster.legendary_actions ? monster.legendary_actions.map((action, i) => <Action {...this.props} key={i} i={i} action={action} />) : null }

			</div>
		)
	}
});

export default Actions;