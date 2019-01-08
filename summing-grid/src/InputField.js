import React, { Component } from 'react'
import { connect } from 'react-redux'

class InputField extends Component {
  render() {
    return (
      <div className="field">
        <input value={this.props.value} type="number"/>
      </div>
    )
  }
}

export default connect((state, props) => ({
  value : state.inputgrid[props.index].value
}))(InputField)
