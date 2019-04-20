import React, { Component } from 'react';
import InputLabel from './label.js';

export default class TextInput extends Component {
	onInput = (event) => {
		this.props.updateContext(event.target.value);
	}

	render () {
		const id = this.props.name + "_textInput";

		return (
			<div className="inputElement">
				<InputLabel for={id} label={this.props.label} />
				<input id={id} type="text" name={this.props.name} value={this.props.value} onChange={this.onInput} />
			</div>
		);
	}
}
