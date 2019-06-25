import 'flatpickr/dist/themes/material_green.css';

import Flatpickr from 'react-flatpickr';
import React from 'react';
import { updateform } from '../../actions/actions';
import { connect } from "react-redux";

class Calendar extends React.Component {
  constructor() {
    super();
	 let tomorrow = new Date();
	 tomorrow.setDate(tomorrow.getDate() + 1);
	 tomorrow.setHours(1,0,0);
    this.state = {
      date: null,
		correct: null,
		options: {
			minDate: tomorrow,
			enableTime: true,
			time_24hr: true,
			dateFormat: 'd-m-Y H:i'
		}
    };
  }

  onChange = (date) => {
	  this.setState({date});
	  this.props.updateform(this.props.name, date);
	  this.setState({
		  correct: this.props.validate(date)
	  });
  }

  render() {
    const { date } = this.state;
    return (
      <Flatpickr data-enable-time
        value={date}
        onChange={this.onChange}
		  className="form-control"
		  options={this.state.options} />
    )
  }
}

function mapStateToProps(state, ownProps) {
	let name = ownProps.name || "";
   let keys = name.split('__');
   let depth = keys.length;
	state = state.main;
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
