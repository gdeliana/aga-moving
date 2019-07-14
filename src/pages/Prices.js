import React from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

export default class Prices extends React.Component {

	state = {
		vehicles: [],
		error: "",
		visible: false,
		loading: true
	}

	componentDidMount() {
		axios.request({
		  method: 'get',
		  url: 'http://www.agamoving.cz/api_aga/json/vehicles.php',
		  responseType: 'json'
	  }).then((res) => {
			 if(res.data){
				 this.setState({
					 vehicles : res.data,
					 error: false,
					 visible: true,
					 loading: false
				 });
			 }
		}).catch((error) => {
			this.setState({
			   vehicles : [],
				error: "Vehicles could not be loaded",
				loading: false
			});
		});
	}

	render() {
		if(this.state.error) {
			return <div>{this.state.error}</div>
		}
		if(this.state.loading){
			return <div>Loading ... </div>
		}
		if(this.state.vehicles.length == 0){
			return <div>Could not retreive the page</div>
		}
		const vehicles_prices = {};
		const vehicles_images = {};
		const extra_info = {};
		let vehicle_names = [];
		for(let i in this.state.vehicles){
			let vehicle = this.state.vehicles[i];
			vehicle_names.push(vehicle.name+" "+vehicle.capacity);
			for (let price_setup in vehicle.prices){
				let price = vehicle.prices[price_setup];
				vehicles_prices[price_setup] = (vehicles_prices[price_setup] === undefined) ? {} : vehicles_prices[price_setup];
				vehicles_prices[price_setup][vehicle.name+" "+vehicle.capacity] = price;
			}
			if(vehicle.images)
				vehicles_images[vehicle.name+" "+vehicle.capacity] = vehicle.images;

			if(vehicle.extra_info){
				extra_info[vehicle.name+" "+vehicle.capacity] = vehicle.extra_info;
			}
		}
		return (
			<CSSTransition
				in={this.state.visible}
				classNames="page"
				timeout={500}
			>
			<div className="page">
				<div className="row">
					<div className="col-12">
						<p>Below we show you a table of our price setup.</p>
						<p>For international moves please call us or use the contact form below to get a precise quote.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<table className="table table-hover pricesTable">
							<thead>
								<tr>
									<th valign="top">Click on the vehicle pictures to show a large picture</th>
									{vehicle_names.map(vehicleName => (
										<th style={{textAlign: 'center'}} valign="top" key={vehicleName}>
											<span className="vehicleName">{vehicleName} m<sup>3</sup></span><br /><br />
											{vehicles_images[vehicleName] && vehicles_images[vehicleName].main && (
												<img src={vehicles_images[vehicleName].main} className="img-fluid vehicleImage fit-image" />
											)}
										</th>
									))}
								</tr>


							</thead>

							<tbody>
								<tr>
									<td>Only vehicle</td>
									{vehicle_names.map((vehicleName, key) => (
										<td style={{textAlign: 'center'}} key={key}>N/A</td>
									))}
								</tr>
								{Object.keys(vehicles_prices).map(price_setup => (
									<tr key={price_setup}>
										<td>
											{price_setup}
										</td>
										{vehicle_names.map(vehicleName => (
											<td style={{textAlign: 'center'}} key={vehicleName}>{vehicles_prices[price_setup] && vehicles_prices[price_setup][vehicleName] ? vehicles_prices[price_setup][vehicleName]+" czk/hr." : 'N/A'}</td>
										))}
									</tr>
								))}
							</tbody>
							<tfoot>
								<tr>
									<td>Extra Info.</td>
									{vehicle_names.map((v, key) => (
										<td style={{textAlign: 'center'}} key={key}>{extra_info[v] ? extra_info[v] : ""}</td>
									))}
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<span>The prices are calculated from the moment we meet till the job is finished.</span>
					</div>
				</div>
			</div>
			</CSSTransition>
		);
	}
}
