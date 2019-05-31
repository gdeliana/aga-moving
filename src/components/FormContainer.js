import React from 'react';
import HeaderSection from './HeaderSection';
import Input from './Input';
import Calendar from './inputs/Calendar';

export default class Form extends React.Component {
	onSubmit = (event) => {
		event.preventDefault();
	}
	render () {
		return (
			<form onSubmit={this.onSubmit}>
				<div className="row">
					<div className="col-12">
						<HeaderSection title="AGA Moving Booking Form" size="2" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input name="name" label="First Name" type="TextInput" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input name="email" label="Email" type="text" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Calendar name="date"/>
					</div>
				</div>
			</form>
		)
	}
}
