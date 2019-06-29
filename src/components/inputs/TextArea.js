import React from 'react';
import classNames from 'classnames';

class TextArea extends React.Component {
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
			<textarea className={classes} placeholder={this.props.label} id={this.props.name} type="text" name={this.props.name} value={this.props.value} onChange={this.onChange} />
		);
	}
}

export default TextArea;
