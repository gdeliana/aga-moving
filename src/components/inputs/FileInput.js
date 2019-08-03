import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../customFns/formFns';

class FileInput extends React.Component {
	onChange = (event) => {
		this.props.updateform(this.props.name, event.target.files);
	}

  	render() {
    	return (
      	<input multiple accept="image/*" type="file" id={this.props.name} name={this.props.name+"[]"} onChange={this.onChange} />
    	);
  	}
}

export default connect(mapStateToProps,null)(FileInput);
