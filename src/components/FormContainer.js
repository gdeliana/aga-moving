import React from 'react';
import HeaderSection from './HeaderSection';
import { submitform } from '../actions/actions';
import { connect } from "react-redux";
import Input from './Input';

import countries from '../countries.json';

import floors from '../floors.json';

import VehiclesInputContainer from './inputs/VehiclesInput.js';

class Form extends React.Component {
	onSubmit = (event) => {
		event.preventDefault();
		this.props.submitform();
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
						<Input required name="name" label="First Name" type="TextInput" />
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

				<div className="row">
					<div className="col-12">
						<VehiclesInputContainer />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<HeaderSection title="Other options" size="4" />
						<hr />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="checkbox" name="packing_service" label="I need packing and unpacking service:" options={countries} />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="checkbox" name="heavy_products" label="Do you have items heavier than 100Kg?" options={countries} />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="checkbox" name="appointment" label="If you would like a fixed price please check this box to arrange an appointment (Free of charge)" options={countries} />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="checkbox" name="packing_materials_switch" label="I need packing and unpacking service:" options={countries} />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<HeaderSection title="Additional" size="4" />
						<hr />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="largeText" name="comment" label="Comments" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Input type="file" name="files" label="Files" />
					</div>
				</div>

				<div className="row form-group">
					<div className="col-12">
						<input type="submit" className="btn btn-primary form-control" value="SUBMIT" />
					</div>
				</div>

				<div className="row form-group">
					<div className="col-12">
						{this.props.errors.map((error, key) => (
							<p key={key} className="error">{error}</p>
						))}
					</div>
				</div>

				<div className="row form-group">
					<div className="col-12">
						{this.props.success.map((msg, key) => (
							<p key={key} className="success">{msg}</p>
						))}
					</div>
				</div>
			</form>
		)
	}
}

function mapStateToProps (state, ownProps) {
	return {
		errors : state.errorMessages,
		success : state.successMessages
	};
};

// maps the component props to reducers
const mapDispatchToProps = {
	submitform
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Form);
