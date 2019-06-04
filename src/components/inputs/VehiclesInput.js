import vehicles from '../../Vehicles.json';
import React, { Component } from 'react';
import { updateform } from '../../actions/actions';
import { connect } from "react-redux";
import classNames from 'classnames';

export default class VehiclesInputContainer extends React.Component {
	render () {
		const vehiclesElements = vehicles.map((vehicle, id) => (
			<Vehicle key={id} {...vehicle} />
		));

		return (
			<div className="row">
				{vehiclesElements}
			</div>
		)
	}
}


class Vehicle extends React.Component {
	render () {
		const options = Object.keys(this.props.prices).map((option, id) => (
			<option key={id} value={option}>
				{option} - {this.props.prices[option]}
			</option>
		));
		return (
			<div className="col-12 col-md-4 vehicle_worker_option">
				<input disabled type="hidden" name="vehicle" value={this.props.name} />
				<div className="row">
					<div className="col-12">
						<img src={this.props.images.main} className="img-responsive" />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<select name="workers">
							{options}
						</select>
					</div>
				</div>
			</div>
		)
	}
}
