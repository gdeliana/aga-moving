import React, { Component } from 'react';
import HeaderSection from './components/section.js';
import Input from './components/inputs/input.js';
import FormContext from './FormContext.js';

class App extends Component {
	state = {
		'name' : 'Genci',
		'phone' : '',
		'email' : '',
		'date' : '',
		'from' : {
			'city' : '',
			'country' : '',
			'street' : '',
			'size' : '',
			'floor' : '',
			'lift' : ''
		},
		'to' : {
			'street' : '',
			'city' : '',
			'country' : '',
			'floor' : '',
			'lift' : ''
		},
		'vehicle' : '',
		'packing_service' : false,
		'heavy_products' : false,
		'appointment' : false,
		'packing_materials' : [],
		'comment' : '',
		'files' : ''
	}

	onClickHandler = () => {
		console.log(this.state);
	}

	updateContext = (name, val) => {
		this.setState((prev, props) => {
			if(prev[name] !== val) {
				return {[name]: val};
			}
		});
	}

  render() {
    return (
			<FormContext.Provider value={{updateContext: this.updateContext}}>
      	<div className="App">
	        <h2>Make an order online for the selected services.</h2>

					<HeaderSection title="Basic Details" />

					<Input value={this.state.name} type="text" name="name" label="Name" />

					<Input value={this.state.packing_service} type="checkbox" name="packing_service" label="Packing?" />
					<button onClick={this.onClickHandler}>Show Context</button>
      	</div>
			</FormContext.Provider>
    );
  }
}

export default App;
