import React from 'react';
import ContactForm from './components/ContactForm';

export default class Footer extends React.Component {
	render () {
		return (
			<div className="row" id="footer">
				<div className="col-12 col-sm-6">
					<ContactForm />
				</div>

				<div className="col-12 col-sm-6">

				</div>
			</div>
		)
	}
}
