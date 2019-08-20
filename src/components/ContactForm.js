import React from 'react';
import { connect } from "react-redux";
import Input from './Input';
import { submitform } from '../actions/appActions';

const InputContact = (props) => (
	<Input {...props} storeKey="app" />
);

class ContactForm extends React.Component {

	state = {
		captchaSrc : "http://www.agamoving.cz/captcha.php?v="+Date.now()+"&sessID="+this.props.sessID
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.submitform();
	}

	reloadCaptcha = (e) => {
		e.stopPropagation();
		e.preventDefault();
		this.setState({
			captchaSrc: "http://www.agamoving.cz/captcha.php?v="+Date.now()+"&sessID="+this.props.sessID
		});
	}

	render = () => (
		<form onSubmit={this.onSubmit}>
			<div className="row">
				<div className="col-12">
					<InputContact required type="text" name="contact_name" label="Name" />
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<InputContact validationRegex={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/} required type="text" name="contact_email" label="Email" />
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<InputContact required type="largeText" name="contact_message" label="Message" />
				</div>
			</div>

			<div className="row">
				<div className="col-7">
					<InputContact required type="text" name="captcha" label="Please copy the number on the right" />
				</div>
				<div className="col-5">
					<div className="row">
						<div className="col-12">
							<img key="captchaImage" style={{
								margin: 'auto',
								display: 'block',
								marginBottom: '4px'
							}} className="img-fluid" src={this.state.captchaSrc} alt="captcha" />
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<button style={{
								padding: '5px',
								fontSize: '12px',
								margin: 'auto',
							 	marginBottom: '12px',
								display: 'block'
							}} className="btn btn-secondary" onClick={this.reloadCaptcha}>Reload</button>
						</div>
					</div>
				</div>
			</div>

			<div className="row form-group">
				<div className="col-12">
					<input type="submit" className="btn btn-primary form-control" value="SUBMIT" />
				</div>
			</div>

			{this.props.sending_message && (
				<div className="row form-group">
					<div className="col-12">
						<p>Sending your message</p>
					</div>
				</div>
			)}

			<div className="row form-group">
				<div className="col-12">
					{this.props.errors.map((error, key) => (
						<p key={key} className="error">{error}</p>
					))}
				</div>
			</div>

			<div className="row form-group">
				<div className="col-12">
					{this.props.success.map((msg, key) => (
						<p key={key} className="success">{msg}</p>
					))}
				</div>
			</div>
		</form>
	)
}

function mapStateToProps (state, ownProps) {
	return {
		errors : state.app.errorMessages,
		success : state.app.successMessages,
		sending_message : state.app.sending_message,
		sessID: state.app.sessID
	};
};

// maps the component props to reducers
const mapDispatchToProps = {
	submitform
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ContactForm);
