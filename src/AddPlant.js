import React from 'react';
// import firebase from './firebase';

class AddPlant extends React.Component {


	render() {
		return (
			<div className="plantList__actions">
				<form>

					<label htmlFor="addPlant visually-hidden">Add a Plant</label>
					<input onChange={this.props.valueCollection} id="addPlant" type="text" placeholder="Plant Name" name="plantName" />


					<label htmlFor="waterDate">How often to water?</label>
					<select onChange={this.props.waterDate} id="waterDate" name="waterDate">
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
					</select>

					<button onClick={this.props.returnPlant} type="submit">Add your Plant</button>
				</form>
			</div>
		)
	}
}

export default AddPlant;