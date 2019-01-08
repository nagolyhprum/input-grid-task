import React, { Component } from 'react'
import { connect } from 'react-redux'

class Output extends Component {
  render() {
    return (
      <div className="output">{this.props.value}</div>
    )
  }
}

export const transformValue = input => {
  return `${input}`
}

export const getValue = input => transformValue(input.reduce((total, it) => total + it.value, 0))

export default connect(({
  inputgrid
}) => ({
  value : getValue(inputgrid)
}))(Output)
