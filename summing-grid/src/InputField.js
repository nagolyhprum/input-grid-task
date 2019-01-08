import React, { Component } from 'react'
import { connect } from 'react-redux'

class InputField extends Component {
  render() {
    return (
      <div className="field">
        <input type="number"/>
      </div>
    )
  }
}

export default connect()(InputField)
