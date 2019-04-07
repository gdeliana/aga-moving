import React, { Component } from 'react';
import HeaderSection from './components/section.js';
import Input from './components/inputs/input.js';
import FormContext from './FormContext.js';

class App extends Component {
	state = {

	}

  render() {
		this.context.name = 'dsdssfdsfsd';
    return (
      <div className="App">
				<FormContext.Provider>
	        <h2>Make an order online for the selected services.</h2>

					<HeaderSection title="Basic Details" />

					<Input value="1" type="checkbox" name="name" label={this.context.name} />
				</FormContext.Provider>
      </div>
    );
  }
}



App.contextType = FormContext;

export default App;
