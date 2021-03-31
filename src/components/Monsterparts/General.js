import React from 'react';


// TODO: Re-add Speed
const General = React.createClass({
	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-general">
				
				<h2 className="title">{monster.name}</h2>
				<p><span className="sub-title">{monster.size} {monster.type} {monster.subtype} - {monster.alignment}</span></p>
				<p>Armor Class: {monster.armor_class}</p>
				<p>Hit Points: {monster.hit_points} ({monster.hit_dice})</p>
				
			</div>
		)
	}
});

export default General;