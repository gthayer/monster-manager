import React from 'react';

const Misc = React.createClass({
	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-misc">
				
				<h3 className="section-title">Misc</h3>
				
				{ monster.senses 					? <p>Senses: {monster.senses}</p> 									: null }
				{ monster.languages 				? <p>Languages: {monster.languages}</p> 							: null }
				{ monster.challenge_rating 			? <p>Challenge: {monster.challenge_rating}</p> 						: null }
				{ monster.damage_vulnerabilities 	? <p>Damage Vulnerabilities: {monster.damage_vulnerabilities}</p> 	: null }
				{ monster.damage_resistances 		? <p>Damage Resistances: {monster.damage_resistances}</p> 			: null }
				{ monster.damage_immunities 		? <p>Damage Immunities: {monster.damage_immunities}</p> 			: null }
				{ monster.condition_immunities 		? <p>Condition Immunities: {monster.condition_immunities}</p> 		: null }
		
			</div>
		)
	}
});

export default Misc;