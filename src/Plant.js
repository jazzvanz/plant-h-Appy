import React from 'react';
import plants from './plants.js';

class Plant extends React.Component {
	render() {
		return (
			<div>
				{plants.map((plant) => {
					return (
						<div className="plantList__plant plant">
							<h4 className="plant__headline">{plant.name}</h4> 
						</div>
					)
				})}
			</div>
		)
	}
}

export default Plant;