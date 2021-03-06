import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputField from './InputField'
import Output from './Output'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <InputField index={0}/>
          <InputField index={1}/>
        </div>
        <div className="row">
          <InputField index={2}/>
          <Output/>
        </div>
      </div>
    );
  }
}

export default connect(({ inputgrid }) => ({ inputgrid }), {

})(App);
