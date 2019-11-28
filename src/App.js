import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import appStore from './stores/appStore';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import {withReducer} from './customFns/helpers';
import {hideMenuMobile} from './actions/appActions';
import {connect} from 'react-redux';
import Loader from './components/Loader.js';

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
				<Loader visible={this.props.loader} />
      	<div className="container">
				<Router>
					<Header />
					<Breadcrumbs />
					<div id="content" className="row">
						<div id="topDivider"></div>
						<div className="col-12">

							<Suspense fallback={<div>Loading ...</div>}>
								<Route path={this.props.homeUri+'booking'} component={BookingForm} />
								<Route path={this.props.homeUri+'photogallery'} component={Gallery} />
								<Route path={this.props.homeUri+'prices'} component={Prices} />
								<Route path={this.props.homeUri+'about'} component={About} />
								<Route path={this.props.homeUri+'testimonials'} component={Testimonials} />
								<Route path={this.props.homeUri+'packing'} component={Packing} />
								<Route exact path={this.props.homeUri} component={Homepage} />
								<Route path='*' exact component={()=>(<span>Page not found</span>)} />
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

function mapStateToProps (state, ownProps) {
	return {
		loader : state.app.loading,
		homeUri : state.app.homeUri
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
