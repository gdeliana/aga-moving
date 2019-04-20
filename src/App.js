import React, { Component } from 'react';
import HeaderSection from './components/HeaderSection.js';
import Input from './components/inputs/Input.js';
import FormContext from './FormContext.js';

class App extends Component {
	state = FormContext.defaultState;

	onClickHandler = () => {
		console.log(this.state);
	}

	updateContext = (name, val) => {
		this.setState((prev, props) => {
			if(prev[name] === undefined || prev[name] !== val) {
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

					<Input value={this.state.to.floor} type="select" name="to_floor" label="floor"
						options={[
							{text: 'sdsds', value : 'dsdsds'},
							{text: 'sdsds', value : 'dsdsds'},
							{text: 'sdsds', value : 'dsdsds'}
						]}
					/>

					<button onClick={this.onClickHandler}>Show Context</button>
      	</div>
			</FormContext.Provider>
    );
  }
}

export default App;
