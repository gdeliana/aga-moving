import React, { Component } from 'react';
import CheckBox from './CheckBox.js';
import TextInput from './TextInput.js';
import InputLabel from './InputLabel.js';
import FormContext from './../../FormContext.js';
import SelectInput from './SelectInput.js';

class Input extends Component {
	updateContext = (val) => {
		this.context.updateContext(this.props.name, val);
	}

	render () {
		const id = this.props.name + "_"+this.props.type+"Input";
		if (this.props.type === 'checkbox'){
			const Element =	(<CheckBox
					name={this.props.name}
					label={this.props.label}
					value={this.props.value}
					updateContext={this.updateContext}
					id={id}
				/>)
		} else if (this.props.type === 'text') {
			const Element =	(<TextInput
					name={this.props.name}
					label={this.props.label}
					value={this.props.value}
					updateContext={this.updateContext}
					id={id}
				/>)
		} else if (this.props.type === 'select') {
			const options = (this.props.options) ? this.props.options : {};
			const Element = (<SelectInput
					name={this.props.name}
					label={this.props.label}
					value={this.props.value}
					updateContext={this.updateContext}
					options={options}
					id={id}
				/>)
		}else{
			const Element = (<div></div>);
		}

		return (
			<div className="inputElement">
				<InputLabel for={id} label={this.props.label} />
				<Element />
			</div>
		);
	}
}

Input.contextType = FormContext;

export default Input;
