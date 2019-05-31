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
        onChange={this.onChange} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
	  value: state[ownProps.name]
  };
}

const mapDispatchToProps = {
	updateform
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Calendar);
