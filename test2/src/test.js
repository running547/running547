import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Test extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        {this.props.tit}
      </div>
    )
  }
}

export class Test2 extends Component {
    static propTypes = {
  
    }
  
    render() {
      return (
        <div>
          {this.props.tit}
        </div>
      )
    }
  }


