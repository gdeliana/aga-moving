import React, { Component } from 'react';
import { updateform } from '../../actions/actions';
import { connect } from "react-redux";
import classNames from 'classnames';

class TextInput extends Component {
	state = {
		correct : null
	}
	onChange = (event) => {
		this.props.updateform(this.props.name, event.target.value);
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

// maps the component props to reducers
const mapDispatchToProps = {
	updateform
}

export default connect(
  null, mapDispatchToProps
)(TextInput);
