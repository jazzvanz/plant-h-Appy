import React from 'react';
import Plant from './Plant';

class PlantList extends React.Component {
	render() {
		return (
			<section className="plantList">
				<h2 className="plantList__headline">Catelog of your plants</h2>
				<Plant />
			</section>
		)
	}
}

export default PlantList; 