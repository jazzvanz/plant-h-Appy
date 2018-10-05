import React from 'react';
import PlantCounter from './PlantCounter';

class AccountActions extends React.Component {
	render() {
		return (
			<aside className="account-actions">
				<h2>Account Options | Undecided at the moment</h2>
				<PlantCounter />
			</aside>
		)
	}
}

export default AccountActions;