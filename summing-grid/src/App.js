import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.inputgrid)
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(({ inputgrid }) => ({ inputgrid }), {

})(App);
