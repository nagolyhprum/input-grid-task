import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setValue } from './actions/inputgrid'

class InputField extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    const { value } = e.target
    if(value) {
      this.props.setValue(this.props.index, parseFloat(e.target.value))
    }
  }
  onClick(e) {
    e.target.select()
  }
  render() {
    return (
      <div className="field">
        <input value={this.props.value} onChange={this.onChange} onClick={this.onClick} type="number"/>
      </div>
    )
  }
}

export default connect((state, props) => ({
  value : state.inputgrid[props.index].value,
  index : props.index
}), {
  setValue
})(InputField)
