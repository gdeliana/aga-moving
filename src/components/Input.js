import React from 'react';
import TextInput from './inputs/TextInput';
import TextArea from './inputs/TextArea';
import CheckBox from './inputs/CheckBox';
import SelectInput from './inputs/SelectInput';
import InputLabel from './inputs/InputLabel';
import Calendar from './inputs/Calendar';
import FileInput from './inputs/FileInput';
import classNames from 'classnames';

export default class Input extends React.Component {
	validate = (value) => {
		let correct;
		if(value.length > 0 || !this.props.required){
			correct = true;
		}else{
			correct = false;
		}
		return correct;
	}
	render() {
		const Cmps = {
			"text" : TextInput,
			"select" : SelectInput,
			"checkbox" : CheckBox,
			"calendar" : Calendar,
			"largeText" : TextArea,
			'file' : FileInput
		}
		const props = {
			...this.props,
			validate : this.validate
		}
		const El = Cmps[this.props.type] || TextInput;
		return (
			<div className="row form-group">
				<div className={classNames({
					"col-12" : (this.props.type !== "checkbox"),
					"col-sm-6" : (this.props.type !== "checkbox"),
					"d-none" : (this.props.type !== "checkbox"),
					"d-sm-flex" : (this.props.type !== "checkbox"),
					"col-9" : (this.props.type === "checkbox")
				})} style={{textAlign: 'center'}}>
					<InputLabel for={this.props.name} label={this.props.label} />
				</div>
				<div style={{
					textAlign : ((this.props.type === 'checkbox') ? 'center' : 'inherit')
				}} className={classNames({
					"col-12" : (this.props.type !== "checkbox"),
					"col-sm-6" : (this.props.type !== "checkbox"),
					"col-3" : (this.props.type === "checkbox")
				})}>
					<El {...props} />
				</div>
			</div>
		)
	}
}
