import React, { Component } from 'react';
import { updateform } from '../../actions/actions';
import { connect } from "react-redux";

class SelectInput extends Component {
	constructor (props) {
		super();
		this.options = props.options || [];
	}
	state = {
		value : ''
	}
	onChange = (event) => {
		this.props.updateform(this.props.name, event.target.options[event.target.selectedIndex].value);
	}
	render() {
		return (
			<select className="form-control" defaultValue="" name={this.props.name} onChange={this.onChange}>
			<option value="">Please select</option>
			{this.options.map((option, i) =>
				<option key={i} value={option.value}>
					{option.text}
				</option>
			)}
			</select>
		)
	}
}

function mapStateToProps(state, ownProps) {
  return {
	  value: state[ownProps.name]
  };
}

const mapDispatchToProps = {
	updateform
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SelectInput);
