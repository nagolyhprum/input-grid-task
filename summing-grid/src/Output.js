import React, { Component } from 'react'
import { connect } from 'react-redux'

class Output extends Component {
  render() {
    return (
      <div className="output">{this.props.value}</div>
    )
  }
}

const units = "TBMK"
const start = 1000000000000

export const transformValue = input => {
  let current = start, index = 0
  while(current > 1) {
    if(input > current) {
      const output = `${input / current}`
      return output[0] + output[1] + output[2] + (output[3] && output[3] !== "." ? output[3] : "") + units[index]
    }
    current /= 1000
    index++
  }
  return `${input}`
}

export const getValue = input => transformValue(input.reduce((total, it) => total + it.value, 0))

export default connect(({
  inputgrid
}) => ({
  value : getValue(inputgrid)
}))(Output)
