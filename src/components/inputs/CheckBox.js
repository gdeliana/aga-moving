import React from 'react';

class CheckBox extends React.Component {
	onChange = (event) => {
		this.props.updateform(this.props.name, !this.props.checked);
	}
	render () {
		return (
			<input className="form-control" id={this.props.name} type="checkbox" name={this.props.name} checked={this.props.value} onChange={this.onChange} />
		);
	}
}

export default CheckBox;
