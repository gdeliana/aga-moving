import React, { Component } from 'react';
import InputLabel from './label.js';

class CheckBox extends Component {
	onChange = (event) => {
		this.props.updateContext(event.target.checked);
	}

	render () {
		const id = this.props.name + "_checkbox";

		return (
			<div className="inputElement">
				<InputLabel for={id} label={this.props.label} />
				<input id={id} type="checkbox" name={this.props.name} checked={this.props.checked} onChange={this.onChange} />
			</div>
		);
	}
}

export default CheckBox;
