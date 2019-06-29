import React, { Component, Suspense } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import MenuMobile from './HeaderComponents/MenuMobile';
import { Provider } from "react-redux";
import appStore from './stores/appStore';

const BookingFormWrapper = React.lazy(() => import('./components/BookingFormWrapper'));
const Homepage = React.lazy(() => import('./pages/Homepage'));

class App extends Component {
  render() {
    return (
		<div onClick={this.onClickHandler} id="aga">
      	<div className="container">
			<Router>
				<Provider store={appStore}>
				<Header />
				</Provider>
				<div id="content" className="row">
					<Suspense fallback={<div>Loading ...</div>}>
						<Route path="/new/booking" component={BookingFormWrapper} />
						<Route exact path="/new/" component={Homepage} />
					</Suspense>
				</div>
				<Provider store={appStore}>
				<Footer />
				{window.innerWidth < 768 && <MenuMobile />}
				</Provider>
			</Router>
      	</div>
		</div>
    );
  }
}
export default App;
