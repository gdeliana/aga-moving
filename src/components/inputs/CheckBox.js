import React, { Component } from 'react';

class CheckBox extends Component {
	onChange = (event) => {
		this.props.updateContext(event.target.checked);
	}

	render () {
		return (
			<input id={this.props.id} type="checkbox" name={this.props.name} checked={this.props.checked} onChange={this.onChange} />
		);
	}
}

export default CheckBox;
