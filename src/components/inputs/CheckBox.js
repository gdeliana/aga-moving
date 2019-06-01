import React, { Component } from 'react';
import { updateform } from '../../actions/actions';
import { connect } from "react-redux";

class CheckBox extends Component {
	onChange = (event) => {
		this.props.updateform(this.props.name, !this.props.checked);
	}
	render () {
		return (
			<input className="form-control" id={this.props.name} type="checkbox" name={this.props.name} checked={this.props.checked} onChange={this.onChange} />
		);
	}
}

function mapStateToProps(state, ownProps) {
	let name = ownProps.name || "";
   let keys = ownProps.name.split('__');
   let depth = keys.length;
   if(depth === 1){
 	  return {
 		  checked: state[keys[0]]
 	  }
   }else if (depth === 2){
 	  return {
 		  checked: state[keys[0]][keys[1]]
 	  }
   }else if (depth === 3){
 	  return {
 		  checked: state[keys[0]][keys[1]][keys[2]]
 	  }
   }
}

const mapDispatchToProps = {
	updateform
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(CheckBox);
