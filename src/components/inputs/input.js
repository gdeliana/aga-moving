import React, { Component } from 'react';
import CheckBox from './CheckBox.js';
import TextInput from './TextInput.js';
import FormContext from './../../FormContext.js';

class Input extends Component {
	updateContext = (val) => {
		console.log(this.props);
		this.context.updateContext(this.props.name, val);
	}

	render () {
		if (this.props.type === 'checkbox'){
			return (
				<CheckBox
					name={this.props.name}
					label={this.props.label}
					value={this.props.value}
					updateContext={this.updateContext}
				/>
			);
		} else if (this.props.type === 'text') {
			return (
				<TextInput
					name={this.props.name}
					label={this.props.label}
					value={this.props.value}
					updateContext={this.updateContext}
				/>
			);
		}else{
			return (<div></div>);
		}
	}
}

Input.contextType = FormContext;

export default Input;
