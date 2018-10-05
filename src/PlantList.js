import React from 'react';
import firebase from './firebase';
import Plant from './Plant';

class PlantList extends React.Component {

	// Storing Plant information from Firebase
	constructor() {
		super();
		this.state = {
			plants: [],
			userPlant:''
		}
	}

	// Adding Plant our Component State each time
	// The input has a change
	valueCollection = (event) => {
		this.setState({ 
			userPlant: event.target.value
		})
	}

	// Add the updated state to firebase when the button is clicked
	// Then resetting state to be empty
	buttonClick = () => {
		const dbRef = firebase.database().ref();
		dbRef.push(this.state.userPlant);
		this.setState({userPlant: ""})
	}

	render() {
		return (
			<section className="plantList">
				<h2 className="plantList__headline">Catelog of your plants</h2>

				{this.state.plants.map((plant, i) => {
					return (
						<Plant plantInfo={plant} />
					)
				})}


				<div className="plantList__actions">
					{/*Likely will make its component | likely will change event to be on form/submit*/}
					<form>
						<label for="addPlant visually-hidden">Add a Plant</label>
						<input onChange={this.valueCollection} id="addPlant" type="text" placeholder="Plant Name" name="plantName" />
						<button onClick={this.buttonClick} type="submit">Add your Plant</button>
					</form>
				</div>
			</section>
		)
	}

	// Getting value from firebase response
	// New state with Array inside
	// Push key and value into newState,
	// Adding newState to Plants in component state
	componentDidMount() {
	    const dbRef = firebase.database().ref();
	    dbRef.on('value', (response) => {
	      const newState = [];
	      const data = response.val();

	      for (let key in data) {
	        newState.push({key: key, name: data[key]});
	      }

	      this.setState({
	        plants: newState
	      });
	      // console.log(response.val());
	    });
  	}
}

export default PlantList; 