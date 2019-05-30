import React, { Component } from 'react';
import TextInput from './components/inputs/TextInput';
import CheckBox from './components/inputs/CheckBox';
import SelectInput from './components/inputs/SelectInput';
import store from './stores/mainStore';
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
		 	<Provider store={store}>
      	<div className="App">
	        <h2>Make an order online for the selected services.</h2>

				<TextInput name="to__floor" />
				<CheckBox name="packing_service" />
				<SelectInput name="vehicle" options={[
					{
						value : "iveco",
						text : "Iveco"
					}
				]} />
      	</div>
			</Provider>
    );
  }
}

export default App;
