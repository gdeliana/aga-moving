import React from 'react';
import classNames from 'classnames';

export default class TextInput extends React.Component {
	onChange = (event) => {
		this.props.updateform(this.props.name, event.target.value);
		this.props.validate(event.target.value)
	}

	render () {
		let classes = classNames({
			'form-control' : true,
			'correct' : (this.props.correct === true),
			'incorrect' : (this.props.correct === false)
		})
		return (
			<input className={classes} placeholder={this.props.label} id={this.props.name} type="text" name={this.props.name} value={this.props.value} onChange={this.onChange} />
		);
	}
}
