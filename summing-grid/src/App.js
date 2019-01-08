import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputField from './InputField'
import Output from './Output'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <InputField/>
          <InputField/>
        </div>
        <div>
          <InputField/>
          <Output/>
        </div>
      </div>
    );
  }
}

export default connect(({ inputgrid }) => ({ inputgrid }), {

})(App);
