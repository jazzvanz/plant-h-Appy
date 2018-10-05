import React from 'react';

class PlantActions extends React.Component {

	buttonClick() {
		alert('This is where we want to actually add a plant');
	}

	render() {
		return (
			<section className="plant-actions">
				<label for="plantName">Plant Name</label>
				<input type="text" id="plantName" name="plantName" />
				<button onClick={this.buttonClick} className="plant-actions__action">Add Plant</button>
			</section>
		)
	}
}

export default PlantActions;