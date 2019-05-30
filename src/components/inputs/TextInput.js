import React, { Component } from 'react';
import { updateform } from '../../actions/actions';
import { connect } from "react-redux";

class TextInput extends Component {
	state = {
		value : ''
	}
	onChange = (event) => {
		this.props.updateform(this.props.name, event.target.value);
	}
	render () {
		return (
			<input id={this.props.name} type="text" name={this.props.name} value={this.props.value} onChange={this.onChange} />
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
)(TextInput);
