import React, { Component } from 'react';

class SelectInput extends Component {
	render() {
		return (
			<select defaultValue={this.props.selectedValue} name={this.props.name}>
			<option value="">Please select</option>
			{this.props.options.map((option, i) =>
					<option key={i} value={option.value}>
						{option.text}
					</option>
			)}
			</select>
		)
	}
}

export default SelectInput;
