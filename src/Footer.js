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
	  	window.removeEventListener("resize");
		window.removeEventListener("click");
	}
	render () {
		return (
			<div className="row" id="footer">
				<div className="col-12 col-sm-6">
					<ContactForm />
				</div>

				<div className="col-12 col-sm-6">

				</div>
				{window.innerWidth < 768 && <MenuMobile />}
			</div>
		)
	}
}

const mapDispatchToProps = () => ({
	hideMenuMobile
});

export default connect(null, mapDispatchToProps)(Footer);
