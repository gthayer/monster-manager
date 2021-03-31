class Simulation {

	constructor( party_a, party_b ) {

		this.party_a = [];
		this.party_b = [];

		// Give all creatures an ID, initiative and sort them into parties.
		party_a.forEach( ( creature, index ) => {
			creature.party = 'A';
			creature.encounterIndex = creature.party + index;
			creature.initiative = this.rollInitiative(creature);

			this.party_a.push( creature );
		});

		party_b.forEach( ( creature, index ) => {
			creature.party = 'B';
			creature.encounterIndex = creature.party + index;
			creature.initiative = this.rollInitiative(creature);

			this.party_b.push( creature );
		});

		this.run_encounter();
	}

	run_encounter() {
		console.log( this.party_b );
	}

	calculate_ability_mod( ability_score ) {
		return Math.floor( ( ability_score / 2 )-5 );
	}
	
	rollInitiative( creature ) {
		const dex_mod = this.calculate_ability_mod( creature.dexterity );
		return this.rollDice( 1, 20, dex_mod );
	}
	
	rollDice( qty = 1, sides = 6, mod = 0, crit = false, verbose = true ) {
	
		let rolls = [];
	
		if ( crit ) {
			qty = qty * 2;
		}
	
		for ( let index = 0; index < qty; index++ ) {
			rolls.push( Math.ceil( Math.random() * sides ) );
		}
	
		const total = mod + rolls.reduce(function(a, b){
			return a + b;
		}, 0);
	
		if ( verbose ) {
			console.log( `Rolled: ${qty}d${sides}+${mod}` );
			console.log( `Total: ${total}` );
		}
	
		return total;
	}
	
	attack_creature( creature, target = null ) {
		// Action
		const {actions} = creature;
		const attacks = [];
	
		// If the creature has multiattack, assume this is the default attack.
		const multiattack = actions.filter( ( act ) => {
			return act.name === "Multiattack";
		});
	
		if ( multiattack.length > 0 ) {
			let i = 0;
			while ( i < multiattack[0].options.choose ) {
				
				const multiOptions = multiattack[0].options.from[i];						
				multiOptions.forEach( (multiAct) => {
					attack = actions.filter( ( act ) => {
						return act.name === multiAct.name;
					});
	
					attacks.push( attack );
				});
				i++;
			}
		// If no multiattack, just grab the first attack.
		} else {
			attacks.push( actions[0] );
		}
	
		console.log( attacks );
		// Bonus Action
	}
}

export default Simulation;