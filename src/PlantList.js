import React from 'react';
import firebase from './firebase';
import Plant from './Plant';

class PlantList extends React.Component {

	render() {
		return (
			<section className="plantList">
				<h2 className="plantList__headline">Catelog of your plants</h2>

				{/*/*key i map google | index */}
				{this.props.plants.map((plant, i) => {
					return (
						<Plant key={i} plantInfo={plant} />
					)
				})}
			</section>
		)
	}
}

export default PlantList; 