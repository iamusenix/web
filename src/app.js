import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
  matchPath
} from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import AppReducer from 'scripts/reducers/AppReducer';
import AppGlobal from 'scripts/utils/AppGlobal';
import Layout from 'scripts/app/Layout';
import ScrollToTop from 'scripts/app/ScrollToTop';
import 'scripts/style/global.scss';
import 'scripts/app/app.scss';

AppGlobal();//global initialization
function initStore(){
    var store = {};
    if(localStorage.getItem('debug')){
       var newCreateStore = applyMiddleware(createLogger())(createStore);
       return newCreateStore(AppReducer,store);
    }else{
        return createStore(AppReducer,store);
    }
}
const store = initStore();
window.AppGlobal.getStore = function(){
    return store.getState();
}
class App extends React.Component {
    render() {
        return (
            <Provider store = {store}>
                <Router>
                    <ScrollToTop>
                        <Layout/>
                    </ScrollToTop>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));

