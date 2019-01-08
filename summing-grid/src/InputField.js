import React, { Component } from 'react'
import { connect } from 'react-redux'

class InputField extends Component {
  render() {
    return (
      <div className="field">
        <input/>
      </div>
    )
  }
}

export default connect()(InputField)
