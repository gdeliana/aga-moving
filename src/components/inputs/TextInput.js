import React, { Component } from 'react';
import { updateform, autocomplete } from '../../actions/actions';
import { connect } from "react-redux";

class TextInput extends Component {
	onChange = (event) => {
		this.props.updateform(this.props.name, event.target.value);
		this.props.autocomplete(this.props.name, event.target.value);
	}
	render () {
		return (
			<input className="form-control" placeholder={this.props.label} id={this.props.name} type="text" name={this.props.name} value={this.props.value} onChange={this.onChange} />
		);
	}
}

// maps redux state with component prop, for initial loading
function mapStateToProps(state, ownProps) {
	let name = ownProps.name || "";
	let keys = ownProps.name.split('__');
	let depth = keys.length;
	if(depth === 1){
		return {
			value: state[keys[0]]
		}
	}else if (depth === 2){
		return {
			value: state[keys[0]][keys[1]]
		}
	}else if (depth === 3){
		return {
			value: state[keys[0]][keys[1]][keys[2]]
		}
	}
}

// maps the component props to reducers
const mapDispatchToProps = {
	updateform, autocomplete
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TextInput);
