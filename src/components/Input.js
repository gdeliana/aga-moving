import React from 'react';
import TextInput from './inputs/TextInput';
import CheckBox from './inputs/CheckBox';
import SelectInput from './inputs/SelectInput';
import InputLabel from './inputs/InputLabel';

export default class Input extends React.Component {
	render() {
		const Cmps = {
			"text" : TextInput,
			"select" : SelectInput,
			"checkbox" : CheckBox,
		}
		const El = Cmps[this.props.type] || TextInput;
		return (
			<div className="form-group">
		    	<InputLabel for={this.props.name} label={this.props.label} />
		    	<El {...this.props} />
		    	<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
		  	</div>
		)
	}
}
