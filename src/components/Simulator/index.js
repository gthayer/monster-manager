import React from 'react';
import Helmet from 'react-helmet';

if(process.env.WEBPACK) require('./style.scss');

const Simulator = React.createClass ({

	render() {

		const { encounter } = this.props;
		encounterCopy = [...encounter];

		if ( encounter.length > 0 ) {

			return (
			
			<div className="monster-simulator row">
				<Helmet
					title={ 'Monster Manager: Simulator' }
					meta={[
						{name: "description", content: 'A Dungeons and Dragons 5e Encounter Manager for GMs.' },
						{property: 'og:title', content: 'Monster Manager: Simulator'},
					]} />

					<button href="#" className="btn btn-sm btn-primary" onClick={ e => this.props.run_simulation(encounter, encounterCopy) }>Run Simulation</button>
				</div>
			);

		} else {

			return (
			
			<div className="monster-manager row">
				<Helmet
					title={ 'Monster Manager: Encounter Admin' }
					meta={[
						{name: "description", content: 'A Dungeons and Dragons 5e encounter manager for GMs.' },
						{property: 'og:title', content: 'Monster Manager: Encounter Admin'},
					]} />

					<div className="alert alert-danger col-xs-12">Build your encounter to simulate a battle.</div>
				</div>
			);
		}
	}
});

export default Simulator;