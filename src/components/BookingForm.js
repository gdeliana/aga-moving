import React, {Suspense} from 'react';
import HeaderSection from './HeaderSection';
import { submitform } from '../actions/actions';
import { connect } from "react-redux";
import Input from './Input';

import countries from '../countries.json';

import floors from '../floors.json';

import VehiclesInputContainer from './inputs/VehiclesInput.js';

const InputBooking = (props) => (
	<Input {...props} storeKey="main" />
);

class BookingForm extends React.Component {
	onSubmit = (event) => {
		event.preventDefault();
		this.props.submitform();
	}
	render () {
		const PackingMaterials = React.lazy(() => {
			return import('./inputs/PackingMaterials');
		});
		return (
			<div className="col-12">
			<form id="booking-form" onSubmit={this.onSubmit} encType="multipart/form-data">
				<div className="row">
					<div className="col-12">
						<HeaderSection title="AGA Moving Booking Form" size="2" />
						<hr />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking required name="name" label="Name" type="text" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking name="phone" type="text" label="Telephone"/>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking validationRegex={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/} required name="email" label="Email" type="text" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking required name="date" type="calendar" label="Date and time of moving"/>
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
						<InputBooking type="text" name="from__street" label="Street from" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking type="text" name="from__city" label="City from" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking type="select" name="from__country" label="Country from" options={countries} value_key="name" text_key="name" defaultSelected="Czech Republic"/>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking type="select" name="from__size" label="Size of your home" options={[
							"1+kk","1+1","2+kk","2+1","3+kk","3+1","4+kk","4+1","Family house (1 floor)","Family house (2 floors)","Family house (3 floors)","Office"
						]} />
					</div>
				</div>

				<div className="row">
					<div className="col-6">
						<InputBooking type="select" name="from__floor" defaultSelected="Ground floor" label="Floor:" options={floors} />
					</div>
					<div className="col-6">
						<InputBooking type="select" name="from__lift" defaultSelected={true} label="Lift:" options={[
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
						<InputBooking type="text" name="to__street" label="Street to" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking type="text" name="to__city" label="City to" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking type="select" name="to__country" defaultSelected="Czech Republic" label="Country to" options={countries} value_key="name" text_key="name" />
					</div>
				</div>

				<div className="row">
					<div className="col-6">
						<InputBooking type="select" name="to__floor" defaultSelected="Ground floor" label="Floor:" options={floors} />
					</div>
					<div className="col-6">
						<InputBooking type="select" name="to__lift" defaultSelected={true} label="Lift:" options={[
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
						<InputBooking type="checkbox" name="packing_service" label="I need packing and unpacking service:" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking type="checkbox" name="heavy_products" label="Do you have items heavier than 100Kg?" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking type="checkbox" name="appointment" label="If you would like a fixed price please check this box to arrange an appointment (Free of charge)" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking type="checkbox" name="packing_materials_switch" label="I need packing materials:" />
					</div>
				</div>

				{this.props.show_materials ?
				(<div className="row">
					<div className="col-12">
						<Suspense fallback={<div>Loading ...</div>}>
							<PackingMaterials />
						</Suspense>
					</div>
				</div>) : <div />}

				<div className="row">
					<div className="col-12">
						<HeaderSection title="Additional" size="4" />
						<hr />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking type="largeText" name="comment" label="Comments" />
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<InputBooking type="file" name="files" label="Additional images" />
					</div>
				</div>

				<div className="row form-group">
					<div className="col-12">
						<input type="submit" className="btn btn-primary form-control" value="SUBMIT" />
					</div>
				</div>

				{this.props.sending_message && (
					<div className="row">
						<div className="col-12">
							<span>Sending request ... please wait.</span>
						</div>
					</div>
				)}

				<div className="row form-group">
					<div className="col-12">
						{this.props.errors && this.props.errors.map((error, key) => (
							<p key={key} className="error">{error}</p>
						))}
					</div>
				</div>

				<div className="row form-group">
					<div className="col-12">
						{this.props.success && this.props.success.map((msg, key) => (
							<p key={key} className="success">{msg}</p>
						))}
					</div>
				</div>
			</form>
			</div>
		)
	}
}

function mapStateToProps (state, ownProps) {
	return {
		errors : state.main.errorMessages,
		success : state.main.successMessages,
		show_materials : state.main.packing_materials_switch,
		sending_message : state.main.sending_message
	};
};

// maps the component props to reducers
const mapDispatchToProps = {
	submitform
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(BookingForm);
