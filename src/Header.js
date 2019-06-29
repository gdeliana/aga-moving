import React from 'react';
import NavBarRouter from './HeaderComponents/NavBarRouter';
import { connect } from 'react-redux';
import { hideMenuMobile } from './actions/appActions';

class Header extends React.Component {
	componentDidMount = () => {
		window.addEventListener("click", () => this.props.hideMenuMobile());
	  	window.addEventListener("resize", () => this.forceUpdate());
	}

	componentWillUnmount = () => {
		window.removeEventListener("click", () => this.props.hideMenuMobile());
	  	window.removeEventListener("resize", () => this.forceUpdate());
	}
	render () {
		return (
			<div className="row" id="header">
				<div className="col-12 col-md-4 col-lg-5">
					<div id="logo">
						<img alt="AGA Moving" src="http://agamoving.cz/img/logo.png" className="img-fluid" />
					</div>
				</div>

				<div className="d-none d-md-block col-md-8 col-lg-7">
					<div className="row">

					</div>
					{window.innerWidth > 767 && (
						<div className="row navBar">
							<NavBarRouter />
						</div>
					)}
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = () => ({
	hideMenuMobile
})

export default connect(null, mapDispatchToProps)(Header);