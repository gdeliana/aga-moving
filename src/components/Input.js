import React, { Suspense } from 'react';
import InputLabel from './inputs/InputLabel';
import classNames from 'classnames';
import { validateinput, updateform } from '../actions/actions';
import { connect } from "react-redux";

class Input extends React.Component {
	constructor (props) {
		super();
		if(props.required) {
			props.validateinput(props.name, false);
		}
	}
	validate = (value) => {
		let correct = false;
		if(this.props.validationRegex){
			correct = this.props.validationRegex.test(value);
		}else if(value.length > 0 || !this.props.required){
			correct = true;
		}
		if(value.length > 0 && /<.+\/>|<.+>.*<\/.+>/.test(value)){
			correct = false;
		}
		this.props.validateinput(this.props.name, correct);
		return correct;
	}

	render() {
		const Cmps = {
			"text" : 'TextInput',
			"select" : 'SelectInput',
			"checkbox" : 'CheckBox',
			"calendar" : 'Calendar',
			"largeText" : 'TextArea',
			'file' : 'FileInput'
		}

		const El = React.lazy(() => {
			let elementName = Cmps[this.props.type];
			return import('./inputs/'+elementName);
		});
		const props = {
			...this.props,
			validate : this.validate,
			id: this.props.name,
			key: this.props.name+"_input"
		}
		return (
			<Suspense fallback={<div>Loading ...</div>}>
			<div className="row form-group">
				<div className={classNames({
					"col-12" : (this.props.type !== "checkbox"),
					"col-sm-6" : (this.props.type !== "checkbox"),
					"d-none" : ((this.props.type !== "checkbox" && this.props.type !== "calendar" && this.props.type !== "select" && this.props.type !== 'file') || this.props.type === "text" || this.props.type === "largeText"),
					"d-sm-flex" : (this.props.type !== "checkbox" && this.props.type !== "text" && this.props.type !== "largeText"),
					"col-9" : (this.props.type === "checkbox")
				})} style={{textAlign: 'center'}}>
					<InputLabel for={this.props.name} label={this.props.label} />
				</div>
				<div style={{
					textAlign : ((this.props.type === 'checkbox') ? 'center' : 'inherit')
				}} className={classNames({
					"col-12" : (this.props.type !== "checkbox"),
					"col-sm-6" : (this.props.type !== "checkbox" && this.props.type !== "text" && this.props.type !== "largeText"),
					"col-3" : (this.props.type === "checkbox")
				})}>
					<El {...props} />
				</div>
			</div>
			</Suspense>
		)
	}
}

// maps the component props to reducers
const mapDispatchToProps = {
	validateinput, updateform
}

export default connect(
  null, mapDispatchToProps
)(Input);
