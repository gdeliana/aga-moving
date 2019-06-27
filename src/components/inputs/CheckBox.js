import React, { Component } from 'react';
import { updateform } from '../../actions/actions';
import { connect } from "react-redux";

class CheckBox extends Component {
	onChange = (event) => {
		this.props.updateform(this.props.name, !this.props.checked);
	}
	render () {
		return (
			<input className="form-control" id={this.props.name} type="checkbox" name={this.props.name} checked={this.props.value} onChange={this.onChange} />
		);
	}
}

const mapDispatchToProps = {
	updateform
}

export default connect(
  null, mapDispatchToProps
)(CheckBox);
