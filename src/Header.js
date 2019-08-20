import React from 'react';
import NavBarRouter from './HeaderComponents/NavBarRouter';
import { connect } from 'react-redux';
import { NavLink, Link } from "react-router-dom";


class Header extends React.Component {
	render () {
		return (
			<div className="row" id="header">
				<div className="col-12 col-md-2 d-md-none d-lg-block col-lg-4 justify-content-center justify-content-md-start d-flex align-items-center">
					<div className="logo">
						<Link to={this.props.homeUri}><img alt="AGA Moving" src="http://agamoving.cz/img/logo.png" className="img-fluid" /></Link>
					</div>
				</div>

				<div className="col-12 col-md-12 col-lg-8">
					<div className="row" style={{
						alignItems: 'center'
					}}>
						<div className="d-none d-md-block d-lg-none col-md-6">
							<div className="logo">
								<Link to={this.props.homeUri}><img alt="AGA Moving" src="http://agamoving.cz/img/logo.png" className="img-fluid" /></Link>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-12" style={{
							textAlign: 'center'
						}}>
							<NavLink className="booking-button float-md-right" to={this.props.homeUri+"booking"}>BOOK ONLINE!</NavLink>
						</div>
					</div>
					{window.innerWidth > 767 && (
						<div style={{
							marginTop: '15px'
						}} className="row d-none d-md-flex">
							<div className="col-12">
								<NavBarRouter />
							</div>
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
