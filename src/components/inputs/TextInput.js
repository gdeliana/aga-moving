import React, { Component } from 'react';

export default class TextInput extends Component {
	onInput = (event) => {
		this.props.updateContext(event.target.value);
	}

	render () {
		return (
			<input id={this.props.id} type="text" name={this.props.name} value={this.props.value} onChange={this.onInput} />
		);
	}
}
