import React from 'react';

class InputLabel extends React.Component {
	render() {
		return (
			<label htmlFor={this.props.for}>{this.props.label}</label>
		)
	}
}

export default InputLabel;
