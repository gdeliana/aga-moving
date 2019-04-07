import React, { Component } from 'react';
import CheckBox from './checkbox.js';

class Input extends Component {
	state = {
		value : this.props.value,
		type: this.props.type,
		label: this.props.label,
		name: this.props.name,
	}

	changeHandler = (event) => {
		this.setState({value:event.target.value});
	}

	render () {
		if(this.state.type === 'checkbox'){
			return (
				<CheckBox
					name={this.state.name}
					label={this.state.label}
					onChange={this.changeHandler}
					value={this.state.value}
				/>
			);
		}else{
			return (<div></div>);
		}
	}
}

export default Input;
