import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from './stores/appStore';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import {withReducer} from './customFns/helpers';

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

class App extends Component {
  render() {
    return (
		<div id="aga">
      	<div className="container">
				<Router>
					<Provider store={appStore}>
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
								<Route exact path="/new/" component={Homepage} />
							</Suspense>

						</div>
						<div id="bottomDivider"></div>
					</div>
					<Footer />
					</Provider>
				</Router>
      	</div>
		</div>
    );
  }
}
export default App;
