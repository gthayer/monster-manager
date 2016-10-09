import React from 'react';

const Stats = React.createClass({

	statBonus: function(stat) {
		let bonus = Math.floor( ( stat - 10 ) / 2 );
		return (
			'(' + ( bonus < 0 ? '' : '+' ) + bonus + ')'
		)
	},

	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-stats">
				
				<h3 className="section-title">Stats</h3>

				<p>STR: {monster.strength} {this.statBonus(monster.strength)}</p>
				<p>DEX: {monster.dexterity} {this.statBonus(monster.dexterity)}</p>
				<p>CON: {monster.constitution} {this.statBonus(monster.constitution)}</p>
				<p>INT: {monster.intelligence} {this.statBonus(monster.intelligence)}</p>
				<p>WIS: {monster.wisdom} {this.statBonus(monster.wisdom)}</p>
				<p>CHA: {monster.charisma} {this.statBonus(monster.charisma)}</p>

			</div>
		)
	}
});

export default Stats;