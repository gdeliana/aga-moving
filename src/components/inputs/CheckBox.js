import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../customFns/formFns';

class CheckBox extends React.Component {
	onChange = (event) => {
		this.props.updateform(this.props.name, event.target.checked);
	}
	render () {
		return (
			<input className="form-control" id={this.props.name} type="checkbox" name={this.props.name} checked={this.props.value} onChange={this.onChange} />
		);
	}
}

export default connect(mapStateToProps,null)(CheckBox);
