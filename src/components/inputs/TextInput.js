import React, { Component } from 'react';
import { updateform, autocomplete } from '../../actions/actions';
import { connect } from "react-redux";
import classNames from 'classnames';

class TextInput extends Component {
	state = {
		correct : null
	}
	onChange = (event) => {
		this.props.updateform(this.props.name, event.target.value);
		this.props.autocomplete(this.props.name, event.target.value);
		this.setState({
			correct: this.props.validate(event.target.value)
		});
	}

	render () {
		let classes = classNames({
			'form-control' : true,
			'correct' : (this.state.correct === true),
			'incorrect' : (this.state.correct === false)
		})
		return (
			<input className={classes} placeholder={this.props.label} id={this.props.name} type="text" name={this.props.name} value={this.props.value} onChange={this.onChange} />
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
