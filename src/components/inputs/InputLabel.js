import React, { Component } from 'react';

class InputLabel extends Component {
	render() {
		return (
			<label htmlFor={this.props.for}>{this.props.label}</label>
		)
	}
}

export default InputLabel;
