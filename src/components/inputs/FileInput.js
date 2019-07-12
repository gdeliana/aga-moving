import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../customFns/formFns';

class FileInput extends React.Component {
  	constructor(props) {
    	super(props);
	}

	onChange = (event) => {
		this.props.updateform(this.props.name, event.target.files);
	}

  	render() {
    	return (
      	<input accept="image/*" type="file" name={this.props.name} onChange={this.onChange} />
    	);
  	}
}

export default connect(mapStateToProps,null)(FileInput);
