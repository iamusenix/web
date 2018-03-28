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
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import AppReducer from 'scripts/reducers/AppReducer';
import AppGlobal from 'scripts/utils/AppGlobal';
import AuthRoute from 'scripts/app/AuthRoute';
import ScrollToTop from 'scripts/app/ScrollToTop';
import 'scripts/style/global.scss';
import 'scripts/app/app.scss';

AppGlobal();//global initialization
function initStore(){
    var store = {};
    var enhancer = applyMiddleware(thunk);
    if(localStorage.getItem('debug')){
        enhancer = enhancer(logger)
    }
    return createStore(AppReducer,store, enhancer);
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
                        <AuthRoute/>
                    </ScrollToTop>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));

