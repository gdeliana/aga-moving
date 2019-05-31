import React, { Component } from 'react';
import store from './stores/mainStore';
import { Provider } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Form from './components/FormContainer'

class App extends Component {
  render() {
    return (
		 	<Provider store={store}>
      	<div className="App container">
				<Form />
      	</div>
			</Provider>
    );
  }
}

export default App;
