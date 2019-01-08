import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputField from './InputField'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputField/>
        <InputField/>
        <InputField/>
      </div>
    );
  }
}

export default connect(({ inputgrid }) => ({ inputgrid }), {

})(App);
