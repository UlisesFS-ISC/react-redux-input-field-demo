import React from 'react';

import PhoneFieldGroupContainer   from '../../components/PhoneFieldGroup/PhoneFieldGroup-Container';

import 'bulma/css/bulma.css';

export class Home extends React.Component {
	render() {
		return (
			<div>
			    <div className="columns">
			        <div className="column is-half is-offset-one-quarter">
						<PhoneFieldGroupContainer />
			        </div>
			    </div>
			</div>
		);
   	}
}