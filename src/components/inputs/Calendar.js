import 'flatpickr/dist/themes/material_green.css';

import Flatpickr from 'react-flatpickr';
import React from 'react';
import { updateform } from '../../actions/actions';
import { connect } from "react-redux";

class Calendar extends React.Component {
  constructor() {
    super();

    this.state = {
      date: new Date()
    };
  }

  onChange = (date) => {
	  this.setState({date});
	  this.props.updateform(this.props.name, date);
  }

  render() {
    const { date } = this.state;
    return (
      <Flatpickr data-enable-time
        value={date}
        onChange={this.onChange}
		  className="form-control" />
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
)(Calendar);
