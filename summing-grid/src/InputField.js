import React, { Component } from 'react'
import { connect } from 'react-redux'

class InputField extends Component {
  render() {
    return (
      <input className="field" />
    )
  }
}

export default connect()(InputField)
