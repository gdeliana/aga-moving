import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import appStore from './stores/appStore';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import {withReducer} from './customFns/helpers';
import {hideMenuMobile} from './actions/appActions';
import {connect} from 'react-redux';

const BookingForm = React.lazy(() => withReducer(appStore, {
	"main": "reducers/formReducer",
	"vehicle" : "reducers/vehicleReducer",
	"materials" : "reducers/materialsReducer"
}, "components/BookingForm"));

const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const Homepage = React.lazy(() => import('./pages/Homepage'));
const Gallery = React.lazy(() => withReducer(appStore, {
	"gallery":"reducers/galleryReducer"
}, "pages/Gallery"));
const Prices = React.lazy(() => import('./pages/Prices'));
const About = React.lazy(() => import('./pages/About'));
const Packing = React.lazy(() => import('./pages/Packing'));

class App extends Component {
	onClickHandler = () => {
		this.props.hideMenuMobile();
	}
  render() {
    return (
		<div onClick={this.onClickHandler} id="aga">
      	<div className="container">
				<Router>
					<Header />
					<Breadcrumbs />
					<div id="content" className="row">
						<div id="topDivider"></div>
						<div className="col-12">

							<Suspense fallback={<div>Loading ...</div>}>
								<Route path="/new/booking" component={BookingForm} />
								<Route path="/new/gallery" component={Gallery} />
								<Route path="/new/prices" component={Prices} />
								<Route path="/new/about" component={About} />
								<Route path="/new/testimonials" component={Testimonials} />
								<Route path="/new/packing" component={Packing} />
								<Route exact path="/new/" component={Homepage} />
							</Suspense>

						</div>
						<div id="bottomDivider"></div>
					</div>
					<Footer />
				</Router>
      	</div>
		</div>
    );
  }
}

const mapDispatchToProps = {
	hideMenuMobile
}

export default connect(null, mapDispatchToProps)(App);
