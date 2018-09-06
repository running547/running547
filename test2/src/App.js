import React, { Component } from 'react';
import './App.css';
import { Layout, Button, Menu, Icon  } from 'antd';
// import { connect } from 'http2';
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'
import {Test,Test2} from './test'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;

function Test3(props){
  return <div>{props.name}</div>
}

@connect(
  state=>({ num: state}),  //传递参数 
  {addGun, removeGun, addGunAsync}  //传递方法
)

class App extends React.Component {
  state = {
    iscollapsedWidth:80,
    isMoblie:false,
    siderWidth:"200px",
    isTrigger:null,
    collapsed:true,
    current: 'mail',
  };
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    if(this.state.isMoblie){
      var button = null;
      var comMenu = null;
      button = <Button
                  type="primary"
                  className="triggerBtn"
                  onClick={()=>{
                    this.setState({collapsed:!this.state.collapsed})
                  }}
            >
              点击
            </Button>
            comMenu = null;
        }
      else{
        button = null;
        comMenu = <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          >
          <Menu.Item key="mail">
            <Icon type="mail" />Navigation One
          </Menu.Item>
          <Menu.Item key="app" disabled>
            <Icon type="appstore" />Navigation Two
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1<a href="http://www.baidu.com"></a></Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
          </Menu.Item>
          </Menu>
      }
    return (
      <Layout style={{height:"100vh"}}>
      <Header style={{color:"#fff"}}>
        Logo
        
      </Header>
     {comMenu}
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
        {button}
        </Sider>
        <Content>
        现在有机枪现在有机枪现在有机枪现在有机枪现在有机枪
          <h2>现在有机枪{this.props.num}把</h2>
          <Button type="primary" onClick={this.props.addGun}>申请武器</Button>
          <Button type="primary" onClick={this.props.removeGun}>上交武器</Button>
          <Button type="primary" onClick={this.props.addGunAsync}>拖两天再给</Button>
          <Test tit="哈哈"></Test>
          <Test2 tit="你好"></Test2>
          <Test3 name='jaja'></Test3>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    );
  }
}



export default App;
