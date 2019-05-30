import React, { Component } from 'react';
import { updateform } from '../../actions/actions';
import { connect } from "react-redux";

class CheckBox extends Component {
	state = {
		checked : false
	}
	onChange = (event) => {
		this.props.updateform(this.props.name, !this.state.checked);
	}
	render () {
		return (
			<input id={this.props.name} type="checkbox" name={this.props.name} checked={this.props.checked} onChange={this.onChange} />
		);
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
)(CheckBox);
