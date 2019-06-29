import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../customFns/formFns';

class SelectInput extends React.Component {
	constructor (props) {
		super();
		this.options = props.options || [];
		this.text_key = props.text_key || 'text';
		this.value_key = props.value_key || 'value';
	}
	onChange = (event) => {
		let value = (event.target &&
						event.target.options &&
						event.target.selectedIndex &&
						event.target.options[event.target.selectedIndex] &&
						event.target.options[event.target.selectedIndex].value) ? event.target.options[event.target.selectedIndex].value : '';
		this.props.updateform(this.props.name, value);
		this.props.validate(value)
	}
	render() {
		return (
			<select defaultValue={this.props.value} className="form-control" name={this.props.name} onChange={this.onChange}>
			<option value="">Please select</option>
			{this.options.map((option, i) =>
				<option key={i} value={option[this.value_key] !== undefined ? option[this.value_key] : option}>
					{option[this.text_key] !== undefined ? option[this.text_key] : option}
				</option>
			)}
			</select>
		)
	}
}

export default connect(mapStateToProps,null)(SelectInput);
