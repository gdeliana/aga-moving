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

	Components = {
		checkbox : CheckBox,
		select : SelectInput,
		text : TextInput
	}

	render () {
		if(!this.props.type){
			return (<div></div>);
		}
		const id = this.props.name + "_"+this.props.type+"Input";
		const params = {
			name:this.props.name,
			label:this.props.label,
			value:this.props.value,
			updateContext:this.updateContext,
			id:id
		};
		const ElementName = this.Components[this.props.type];
		if(this.props.type === 'select'){
			const options = (this.props.options) ? this.props.options : {};
			params['options'] = options;
		}
		return (
			<div className="inputElement">
				<InputLabel for={id} label={this.props.label} />
				<ElementName {...params} />
			</div>
		);
	}
}

Input.contextType = FormContext;

export default Input;
