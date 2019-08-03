import React from 'react';
import ContactForm from './components/ContactForm';
import MenuMobile from './HeaderComponents/MenuMobile';
import { hideMenuMobile } from './actions/appActions';
import { connect } from 'react-redux';

class Footer extends React.Component {
	componentDidMount = () => {
		window.addEventListener("resize", () => {
			this.forceUpdate();
		});
		window.addEventListener("click", () => {
			this.props.hideMenuMobile();
		});
	}
	componentWillUnmount = () => {
	  	window.removeEventListener("resize", () => {
			this.forceUpdate();
		});
		window.removeEventListener("click", () => {
			this.props.hideMenuMobile();
		});
	}
	render () {
		const mobileRender = window.innerWidth < 768;
		const mapComponent = () => (
			<div className={mobileRender ? "col-12" : "d-sm-block col-sm-6"} style={{
				textAlign: (mobileRender ? "left" : "right")
			}}>
				<h3 className="agaHeader">Areas we cover</h3>
				<p>As a company located in the Czech Republic, we cover all Europe and we service worldwide.</p>
				<br />
				<img style={{
					maxWidth: '320px',
					margin: 'auto',
					display: 'block',
					width: '90%'
				}} className="img-fluid" src="http://agamoving.cz/img/blank_europe_map.gif" />
			</div>
		);
		return (
			<div className="row" id="footer">
				{mobileRender && mapComponent()}
				<div className="col-12 col-md-6" style={{
					marginTop: (mobileRender ? "20px" : "0px")
				}}>
					<h3 className="agaHeader">Contact us</h3>
					<p>To get a quote please contact us by phone or contact form below.</p>
					<p><a href="tel:+420604219211"><i className="fas fa-phone-alt"></i>&nbsp;+420 604 219 211</a></p>
					<ContactForm />
				</div>

				{!mobileRender && mapComponent()}
				{mobileRender && <MenuMobile />}
			</div>
		)
	}
}

const mapDispatchToProps = () => ({
	hideMenuMobile
});

export default connect(null, mapDispatchToProps)(Footer);
