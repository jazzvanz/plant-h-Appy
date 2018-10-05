import React from 'react';

class PlantCounter extends React.Component {
	constructor() {
		super();
		this.state = {
			currentPlants: 0
		}
	}
	addPlant = () => {
		this.setState({ currentPlants: this.state.currentPlants + 1});
	}
	render() {
		return(
			<section className="plantCounter">
				<h3>We have <span>{this.state.currentPlants}</span> plants in firebase!</h3>
				<button onClick={this.addPlant} >Add a Plant [Phase O1]</button>
			</section>
		)
	}
}

export default PlantCounter;