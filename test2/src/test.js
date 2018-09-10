import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logIn} from './login.redux'

@connect(
  state=>({auth:state.loginFn.isAuth}),
    //传递参数 
  {logIn}  //传递方法
)


export class Test extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
      {this.props.auth}
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


