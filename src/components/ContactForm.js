import React from 'react';
import { connect } from "react-redux";
import Input from './Input';

const InputContact = (props) => (
	<Input {...props} storeKey="app" />
);

export default class ContactForm extends React.Component {


	render = () => (
		<React.Fragment>
			<div className="row">
				<div className="col-12">
					<InputContact type="text" name="contact_name" label="Name" />
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<InputContact type="text" name="contact_email" label="email" />
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<InputContact type="largeText" name="contact_message" label="Message" />
				</div>
			</div>
		</React.Fragment>
	)
}
