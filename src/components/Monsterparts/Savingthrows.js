import React from 'react';

const Savingthrows = React.createClass({
	render() {

		const monster = this.props.monster;


		return (
			<div className="monster-savingthrows">
			
				<h3 className="section-title">Saving Throws</h3>
				
				{ monster.strength_save 		? <p>STR: +{monster.strength_save}</p> 			: null }
				{ monster.dexterity_save 		? <p>DEX: +{monster.dexterity_save}</p> 		: null }
				{ monster.constitution_save 	? <p>CON: +{monster.constitution_save}</p>	: null }
				{ monster.intelligence_save 	? <p>INT: +{monster.intelligence_save}</p> 	: null }
				{ monster.wisdom_save 			? <p>WIS: +{monster.wisdom_save}</p> 				: null }
				{ monster.charisma_save 		? <p>CHA: +{monster.charisma_save}</p> 			: null }
			
			</div>
		)
	}
});

export default Savingthrows;