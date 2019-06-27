import React, { Component, Suspense } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BookingFormWrapper = React.lazy(() => import('./components/BookingFormWrapper'));
const Homepage = React.lazy(() => import('./pages/Homepage'));

class App extends Component {
  render() {
    return (
			<div id="aga">
      	<div className="aga-booking container">
			<Router>
				<Header />
				<div id="content">
					<Suspense fallback={<div>Loading ...</div>}>
						<Route path="/new/booking" component={BookingFormWrapper} />
						<Route path="/new/" component={Homepage} />
					</Suspense>
				</div>
			</Router>
      	</div>
			</div>
    );
  }
}

export default App;
