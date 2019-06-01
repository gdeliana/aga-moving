import React, { Component } from 'react';
import { updateform } from '../../actions/actions';
import { connect } from "react-redux";

class SelectInput extends Component {
	constructor (props) {
		super();
		this.options = props.options || [];
		this.text_key = props.text_key || 'text';
		this.value_key = props.value_key || 'value';
	}
	componentWillReceiveProps (props) {
		console.log(this);
	}
	onChange = (event) => {
		this.props.updateform(this.props.name, event.target.options[event.target.selectedIndex].value);
	}
	render() {
		return (
			<select defaultValue={this.props.value} className="form-control" name={this.props.name} onChange={this.onChange}>
			<option value="">Please select</option>
			{this.options.map((option, i) =>
				<option key={i} value={option[this.value_key] !== undefined ? option[this.value_key] : option}>
					{option[this.text_key] !== undefined ? option[this.text_key] : option}
				</option>
			)}
			</select>
		)
	}
}

function mapStateToProps(state, ownProps) {
	let name = ownProps.name || "";
   let keys = ownProps.name.split('__');
   let depth = keys.length;
   if(depth === 1){
 	  return {
 		  value: state[keys[0]]
 	  }
   }else if (depth === 2){
 	  return {
 		  value: state[keys[0]][keys[1]]
 	  }
   }else if (depth === 3){
 	  return {
 		  value: state[keys[0]][keys[1]][keys[2]]
 	  }
   }
}

const mapDispatchToProps = {
	updateform
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SelectInput);
