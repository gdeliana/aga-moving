import 'flatpickr/dist/themes/material_green.css';
import Flatpickr from 'react-flatpickr';
import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../customFns/formFns';

class Calendar extends React.Component {
  constructor() {
    super();
	 let tomorrow = new Date();
	 tomorrow.setDate(tomorrow.getDate() + 1);
	 tomorrow.setHours(1,0,0);
    this.state = {
		options: {
			minDate: tomorrow,
			enableTime: true,
			time_24hr: true,
			dateFormat: 'd-m-Y H:i'
		}
    };
  }

  onChange = (date) => {
	  	this.props.updateform(this.props.name, date);
	 	this.props.validate(date)
  }

  render() {
    const { value } = this.props;
    return (
      <Flatpickr id={this.props.name} data-enable-time
        value={value}
        onChange={this.onChange}
		  className="form-control"
		  options={this.state.options} />
    )
  }
}

export default connect(mapStateToProps,null)(Calendar);
