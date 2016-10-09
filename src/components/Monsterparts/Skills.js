import React from 'react';

const Skills = React.createClass({
	render() {

		const monster = this.props.monster;

		return (
			<div className="monster-skills">
				
				<h3 className="section-title">Skills</h3>

				{ monster.acrobatics 	?	<p>Acrobatics: +{monster.acrobatics}</p> 		: null }
				{ monster.arcana		?	<p>Arcana: +{monster.arcana}</p> 				: null }
				{ monster.athletics		?	<p>Athletics: +{monster.athletics}</p> 			: null }
				{ monster.deception		?	<p>Deception: +{monster.deception}</p> 			: null }
				{ monster.history		?	<p>History: +{monster.history}</p> 				: null }
				{ monster.insight		?	<p>Insight: +{monster.insight}</p> 				: null }
				{ monster.intimidation	?	<p>Intimidation: +{monster.intimidation}</p> 	: null }
				{ monster.investigation	?	<p>Investigation: +{monster.investigation}</p> 	: null }
				{ monster.medicine		?	<p>Medicine: +{monster.medicine}</p> 			: null }
				{ monster.nature	 	?	<p>Nature: +{monster.nature}</p> 				: null }
				{ monster.perception	?	<p>Perception: +{monster.perception}</p> 		: null }
				{ monster.performance	?	<p>Performance: +{monster.performance}</p> 		: null }
				{ monster.persuasion	?	<p>Persuasion: +{monster.persuasion}</p> 		: null }
				{ monster.religion		?	<p>Religion: +{monster.religion}</p> 			: null }
				{ monster.stealth		?	<p>Stealth: +{monster.stealth}</p> 				: null }
				{ monster.survival		?	<p>Survival: +{monster.survival}</p> 			: null }

			</div>
		)
	}
});

export default Skills;