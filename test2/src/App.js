import React, { Component } from 'react';

import './App.css';
import { Layout, Menu } from 'antd';
import { Button } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class App extends React.Component {
  state = {
    iscollapsedWidth:80,
    isMoblie:false,
    siderWidth:"200px",
    isTrigger:null,
    collapsed:true
  };

  render() {
    if(this.state.isMoblie){
      var button = null;
      button = <Button
                  type="primary"
                  className="triggerBtn"
                  onClick={()=>{
                    this.setState({collapsed:!this.state.collapsed})
                  }}
            >
              点击
            </Button>
      }
      else{
        button = null;
      }
    return (
      <Layout style={{height:"100vh"}}>
      <Header style={{color:"#fff"}}>
        {button}
      Logo</Header>
      <Layout>
        <Sider
          width={this.state.siderWidth}
          collapsedWidth="0"
          trigger={this.state.isTrigger}
          collapsible
          breakpoint="md"
          onBreakpoint={(broken) => { 
              if(broken){
                console.log(broken);  
                this.setState({
                  siderWidth:"80%",
                  isMoblie:true
                })
              }
              else{
                this.setState({
                  isMoblie:null,
                })
              }
           }}
           collapsed={this.state.collapsed}
        >
        </Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    );
  }
}



export default App;
