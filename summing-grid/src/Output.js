import React, { Component } from 'react'
import { connect } from 'react-redux'

class Output extends Component {
  render() {
    return (
      <div className="output" />
    )
  }
}

export default connect()(Output)
