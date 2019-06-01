import React from 'react';
import TextInput from './inputs/TextInput';
import CheckBox from './inputs/CheckBox';
import SelectInput from './inputs/SelectInput';
import InputLabel from './inputs/InputLabel';
import Calendar from './inputs/Calendar';

export default class Input extends React.Component {
	render() {
		const Cmps = {
			"text" : TextInput,
			"select" : SelectInput,
			"checkbox" : CheckBox,
			"calendar" : Calendar
		}
		const El = Cmps[this.props.type] || TextInput;
		return (
			<div className="row form-group">
				<div className="col-12 col-sm-6" style={{textAlign: 'center'}}>
					<InputLabel for={this.props.name} label={this.props.label} />
				</div>
				<div className="col-12 col-sm-6">
					<El {...this.props} />
					<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
			</div>
		)
	}
}
