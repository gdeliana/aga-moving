import React from 'react';
import NavBarRouter from './HeaderComponents/NavBarRouter';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


class Header extends React.Component {
	render () {
		return (
			<div className="row" id="header">
				<div className="col-12 col-md-4 col-lg-5 justify-content-center">
					<div id="logo">
						<img alt="AGA Moving" src="http://agamoving.cz/img/logo.png" className="img-fluid" />
					</div>
				</div>

				<div className="col-12 col-md-8 col-lg-7 d-flex align-content-end flex-wrap justify-content-center">
					<div className="row">
						<NavLink className="booking-button" to={this.props.homeUri+"/booking"}>BOOK ONLINE!</NavLink>
					</div>
					{window.innerWidth > 767 && (
						<div className="row">
							<NavBarRouter />
						</div>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	homeUri : state.app.homeUri
});

export default connect(mapStateToProps, null)(Header);
