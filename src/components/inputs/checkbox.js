import React, { Component } from 'react';
import InputLabel from './label.js';
import FormContext from './../../FormContext.js';

class CheckBox extends Component {
	state = {
		checked : false
	}

	onChange = (event) => {
		this.setState(
			{
				checked : event.target.checked
			}
		);
		this.context[this.props.name] = event.target.checked;
		console.log(this.context);
	}

	render () {
		console.log(this.context);
		const id = this.props.name + "_checkbox";

		return (
			<div className="inputElement">
				<InputLabel for={id} label={this.props.label} />
				<input id={id} type="checkbox" name={this.props.name} value={this.props.value} checked={this.state.checked} onChange={this.onChange} />
			</div>
		);
	}
}

CheckBox.contextType = FormContext;

export default CheckBox;
