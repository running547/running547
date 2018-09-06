import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import { counter } from './index.redux'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
// import createStore from 'antd/lib/table/createStore';
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

class Test2 extends React.Component{
    
    render(){
        console.log(this.props);
        
        return <div>哈哈</div>
    }
}
function Test3(props){
    console.log(props);
    return <div>嘻嘻嘻嘻嘻</div>
}
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Link to="/">首页</Link>
                <Link to="/test2">测试</Link>
                <Link to="/test3">测试2</Link>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/test2" component={Test2}></Route>
                    <Route path="/test3:dizhi" component={Test3}></Route>
                </Switch>
            </div>
        </BrowserRouter>

       
    </Provider>, document.getElementById('root'));
registerServiceWorker();
