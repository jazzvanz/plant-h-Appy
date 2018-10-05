import React from 'react';
import AddPlant from './AddPlant';

class PlantActions extends React.Component {

	render() {
		return (
			<AddPlant waterDate={this.props.waterDate} returnPlant={this.props.returnPlant} valueCollection={this.props.valueCollection} />
		)
	}
}

export default PlantActions;