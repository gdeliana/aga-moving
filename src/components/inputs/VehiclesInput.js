import React from 'react';
import { updatevehicleworker, validateinput } from '../../actions/actions';
import { fetchVehicles } from '../../actions/vehicleActions';
import { connect } from "react-redux";
import classNames from 'classnames';
import HeaderSection from '../HeaderSection.js';

class VehiclesInputContainer extends React.Component {
	constructor (props) {
		super();
		props.validateinput('vehicle', false);
		props.validateinput('workers', false);
	}
	onClick = (vehicle) => {
		this.props.updatevehicleworker(vehicle, null);
	}

	onChangeWorkers = (event) => {
		event.stopPropagation();
		this.props.updatevehicleworker(this.props.vehicle, event.target.options[event.target.selectedIndex].value);
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

		if (this.props.error) {
			return <Error />;
		} else if (this.props.loading) {
			return <Loading />;
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
			<option className="worker_option" key={id} value={option}>
				{option} - {this.props.prices[option]} czk.
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
			<div onClick={this.onclick} className={classes}>
				<div className="row innerWrapper">
				<div className="col-12">
				<input disabled={inputsActive} type="hidden" name="vehicle" value={this.props.name} />
				<div className="row">
					<div className="col-12">
						{this.props.name}
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<img alt={this.props.name} src={this.props.images.main} className="img-fluid" />
					</div>
				</div>
				{(this.props.enabled === true) && <div className="row">
					<div className="col-12">
						<select disabled={inputsActive} onChange={this.props.onChangeWorkers} defaultValue={this.props.workers} className="form-control" name="workers">
							<option value="">Please select workers</option>
							{options}
						</select>
						<span className="extra_info">{this.props.extra_info}</span>
					</div>
				</div>}
				</div>
				</div>
			</div>
		)
	}
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
