import React from 'react';
import { updatevehicleworker, validateinput } from '../../actions/actions';
import { fetchVehicles } from '../../actions/vehicleActions';
import { connect } from "react-redux";
import classNames from 'classnames';
import HeaderSection from '../HeaderSection.js';
import {Modal} from '../Modal';

class VehiclesInputContainer extends React.Component {
	constructor (props) {
		super();
		props.validateinput('vehicle', false);
		props.validateinput('workers', false);
	}
	onClick = (vehicle) => {

		let vehicleValidation = (vehicle);

		if(vehicleValidation)
			this.props.updatevehicleworker(vehicle, null);


		this.props.validateinput('vehicle', vehicleValidation);
		this.props.validateinput('workers', false);
	}

	onChangeWorkers = (event) => {
		event.stopPropagation();
		let workersSelection = event.target.options[event.target.selectedIndex].value;
		let vehicleSelection = this.props.vehicle;
		let workersValidation = (event.target.selectedIndex && event.target.options[event.target.selectedIndex] && event.target.options[event.target.selectedIndex].value);
		let vehicleValidation = (this.props.vehicle);

		if(vehicleValidation && workersValidation)
			this.props.updatevehicleworker(vehicleSelection, workersSelection);

		this.props.validateinput('vehicle', vehicleValidation);
		this.props.validateinput('workers', workersValidation);
	}

	componentDidMount () {
		this.props.fetchVehicles();
	}

	render () {
		const vehiclesElements = this.props.vehicles.map((vehicle, id) => (
			<Vehicle enabled={(this.props.vehicle === vehicle.name) ? true : (this.props.vehicle === null) ? null : false} onClick={this.onClick} key={id} workers={this.props.workers} onChangeWorkers={this.onChangeWorkers} {...vehicle} />
		));

		const Loading = () => <div className="loading"><p>Loading vehicles</p></div>;

		const Error = () => <div className="error"><p>Error loading vehicles</p></div>;

		const NoVehicle = () => (
			<div className="no_vehicles"><p>No vehicles available</p></div>
		);

		if (this.props.error) {
			return <Error />;
		} else if (this.props.loading) {
			return <Loading />;
		}  else if (this.props.vehicles.length === 0) {
			return <NoVehicle />;
		} else {
			return (
				<React.Fragment>
					<div className="row" >
						<div className="col-12" >
							<HeaderSection size="4" title="Choose vehicle and workers count" />
							<hr />
						</div>
					</div>
					<div className="row">
						{vehiclesElements}
					</div>
				</React.Fragment>
			)
		}
	}
}


class Vehicle extends React.Component {
	onclick = (event) => {
		if(event.target.classList.contains('form-control') || event.target.classList.contains('worker_option')){
			return false;
		}
		this.props.onClick(this.props.name);
	}
	render () {
		const options = Object.keys(this.props.prices).map((option, id) => (
			<option style={{
				"fontSize" : "12px"
			}} className="worker_option" key={id} value={option}>
				{option} - {this.props.prices[option]} czk/hr.
			</option>
		));
		const classes = classNames({
			"col-12" : true,
			"col-md-4" : true,
			"enabled" : ((this.props.enabled === false || this.props.enabled === null) ? false : true),
			"vehicle_worker_option" : true
		});
		const inputsActive = (this.props.enabled === true) ? "" : "disabled";
		return (
			<div className={classes}>
				<div className="selected"></div>
				<div onClick={this.onclick} className="row innerWrapper">
				<div className="col-12">
				<input disabled={inputsActive} type="hidden" name="vehicle" value={this.props.name} />
				<div className="row">
					<div className="col-12">
						<strong>{this.props.name}</strong>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<strong>{this.props.capacity} m<sup>3</sup></strong>
					</div>
				</div>
				<div className="row">
					<div className="col-12" style={{
						minHeight: "150px"
					}}>
						<VehicleImage name={this.props.name} image={this.props.images.main} />
					</div>
				</div>
				{(this.props.enabled === true) && <div style={{
					marginTop : "15px"
				}} className="row">
					<div className="col-12">
						<select style={{
							"fontSize" : "14px"
						}} disabled={inputsActive} onChange={this.props.onChangeWorkers} defaultValue={this.props.workers} className="form-control" name="workers">
							<option value="">Please select workers</option>
							{options}
						</select>
						{this.props.workers !== null && (
							<span style={{
								"fontSize" : "11px"
							}}>
								Selected vehicle and workers profile:
								<br/>
								<span style={{
									"fontWeight" : "bold"
								}}>{this.props.workers}</span>
								<br/>
							</span>
						)}
						<span style={{
							"color" : "red",
							"fontSize" : "11px",
							"fontWeight" : "bold"
						}} className="extra_info">{this.props.extra_info}</span>
					</div>
				</div>}
				</div>
				</div>
			</div>
		)
	}
}

class VehicleImage extends React.Component {
	state = {
		image : null,
		openedModal: false
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				image : this.props.image
			});
		}, 500);
	}

	openImageModal = (event) => {
		event.stopPropagation();
		let {openedModal} = this.state;
		this.setState({
			openedModal : !openedModal
		});
	}

	modalState = (opened) => {
		this.setState({
			openedModal: opened
		})
	}

	render = () => (
		<div style={{
			"position" : "relative",
			"margin" : "auto"
		}}>
		<img alt={this.props.name} src={this.state.image === null ? "http://www.agamoving.cz/loading.gif" : this.state.image} style={{
			height: (this.state.image === null ? "150px" : "inherit")
		}} className="img-fluid" />
		{this.state.openedModal && (
			<Modal propagateState={this.modalState} opened>
				<img alt={this.props.name} src={this.props.image} className="img-fluid" />
			</Modal>
		)}
		<span onClick={this.openImageModal} className="zoom-image">Zoom+</span>
		</div>
	)
}

// maps redux state with component prop, for initial loading
function mapStateToProps(state, ownProps) {
	return {
		workers : state.main.workers,
		vehicle : state.main.vehicle,
		vehicles : state.vehicle.vehicles,
		loading : state.vehicle.loading,
		error: state.vehicle.error
	}
}

// maps the component props to reducers
const mapDispatchToProps = {
	updatevehicleworker, validateinput, fetchVehicles
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(VehiclesInputContainer);
