import React from 'react';
import firebase from './firebase';

class Plant extends React.Component {

	// Remove a plant from the dataB
	removePlant = (plantId) => {
		const dbRef = firebase.database().ref(plantId);
		dbRef.remove();
	}

	render() {
		return (
			<div className="plantList__plant plant">
				<h4 className="plant__headline">{this.props.plantInfo.name.plantName}</h4>
				<p>Water every {this.props.plantInfo.name.waterDate}</p>

				<button onClick={() => this.removePlant(this.props.plantInfo.key)}>Remove this Plant</button>
			</div>
		)
	}
}

export default Plant;