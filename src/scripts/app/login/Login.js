import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  matchPath
} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        return (
            <div className="login">
               Login
            </div>
        );
    }
}
export default Login;

