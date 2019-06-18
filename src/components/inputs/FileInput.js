import React from 'react';
import { updateform } from '../../actions/actions';
import { connect } from "react-redux";

class FileInput extends React.Component {
  	constructor(props) {
    	super(props);
    	this.fileInput = React.createRef();
	}

	onChange = (event) => {
		this.props.updateform(this.props.name, event.target.files);
	}

  	render() {
    	return (
      	<input accept="image/*" type="file" name={this.props.name} onChange={this.onChange} ref={this.fileInput} />
    	);
  	}
}

// maps the component props to reducers
const mapDispatchToProps = {
	updateform
}

export default connect(
  null, mapDispatchToProps
)(FileInput);
