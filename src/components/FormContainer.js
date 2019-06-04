import React from 'react';
import HeaderSection from './HeaderSection';
import Input from './Input';
import Calendar from './inputs/Calendar';

import countries from '../countries.json';

import floors from '../floors.json';

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
						<hr />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input required={true} name="name" label="First Name" type="TextInput" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input name="phone" type="text" label="Telephone"/>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input name="email" label="Email" type="text" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input name="date" type="calendar" label="Date and time of moving"/>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<HeaderSection title="Address from details" size="4" />
						<hr />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="text" name="from__street" label="Street from" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="text" name="from__city" label="City from" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="select" name="from__country" label="Country from" options={countries} value_key="name" text_key="name" defaultSelected="Czech Republic"/>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="select" name="from__size" label="Size of your home" options={[
							"1+kk","1+1","2+kk","2+1","3+kk","3+1","4+kk","4+1","Family house (1 floor)","Family house (2 floors)","Family house (3 floors)","Office"
						]} />
					</div>
				</div>

				<div className="row">
					<div className="col-6">
						<Input type="select" name="from__floor" defaultSelected="Ground floor" label="Floor:" options={floors} />
					</div>
					<div className="col-6">
						<Input type="select" name="from__lift" defaultSelected={true} label="Lift:" options={[
							{"value" : true, "text" : "Yes"},
							{"value" : false, "text" : "No"}
						]} />
					</div>
				</div>


				<div className="row">
					<div className="col-12">
						<HeaderSection title="Address to details" size="4" />
						<hr />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="text" name="to__street" label="Street to" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="text" name="to__city" label="City to" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="select" name="to__country" defaultSelected="Czech Republic" label="Country to" options={countries} value_key="name" text_key="name" />
					</div>
				</div>

				<div className="row">
					<div className="col-6">
						<Input type="select" name="to__floor" defaultSelected="Ground floor" label="Floor:" options={floors} />
					</div>
					<div className="col-6">
						<Input type="select" name="to__lift" defaultSelected={true} label="Lift:" options={[
							{"value" : true, "text" : "Yes"},
							{"value" : false, "text" : "No"}
						]} />
					</div>
				</div>
			</form>
		)
	}
}
