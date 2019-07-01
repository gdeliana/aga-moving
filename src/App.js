import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from './stores/appStore';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

const BookingFormWrapper = React.lazy(() => import('./components/BookingFormWrapper'));
const Homepage = React.lazy(() => import('./pages/Homepage'));
const Gallery = React.lazy(() => import('./pages/GalleryProvider'));

class App extends Component {
  render() {
    return (
		<div onClick={this.onClickHandler} id="aga">
      	<div className="container">
			<Router>
				<Provider store={appStore}>
				<Header />
				<Breadcrumbs />
				</Provider>
				<div id="content" className="row">
				<div id="topDivider"></div>
					<div className="col-12">

					<Suspense fallback={<div>Loading ...</div>}>
						<Route path="/new/booking" component={BookingFormWrapper} />
						<Route path="/new/gallery" component={Gallery} />
						<Route exact path="/new/" component={Homepage} />
					</Suspense>

					</div>
				<div id="bottomDivider"></div>
				</div>
				<Provider store={appStore}>
				<Footer />
				</Provider>
			</Router>
      	</div>
		</div>
    );
  }
}
export default App;
