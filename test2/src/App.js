import React, { Component } from 'react';

import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class App extends React.Component {
  state = {
    collapsed: false,
    _width:"200px",
    iscollapsedWidth:80
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout style={{height:"100vh"}}>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
      // <Layout style={{height:"100vh"}}>
      //   <Sider
      //     width={this.state._width}
      //     breakpoint="lg"
      //     collapsedWidth={this.state.iscollapsedWidth}
      //     onBreakpoint={(broken) => 
      //         {
      //           if(broken){
      //             this.setState({
      //               iscollapsedWidth:0,
      //               _width:"90%"
      //             })
      //           }
      //         }
      //     }
      //     trigger={null}
      //     collapsible
      //     collapsed={this.state.collapsed}
      //   >
      //     <div className="logo" />
      //     <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      //       <Menu.Item key="1">
      //         <Icon type="user" />
      //         <span>nav 1</span>
      //       </Menu.Item>
      //       <Menu.Item key="2">
      //         <Icon type="video-camera" />
      //         <span>nav 2</span>
      //       </Menu.Item>
      //       <Menu.Item key="3">
      //         <Icon type="upload" />
      //         <span>nav 3</span>
      //       </Menu.Item>
      //     </Menu>
      //   </Sider>
      //   <Layout>
          
      //     <Header style={{ background: '#fff', padding: 0 }}>
      //       <Icon
      //         className="trigger"
      //         type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
      //         onClick={this.toggle}
      //       />
      //     </Header>
      //     <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
      //       Content
      //     </Content>
      //   </Layout>
      // </Layout>
    );
  }
}



export default App;
