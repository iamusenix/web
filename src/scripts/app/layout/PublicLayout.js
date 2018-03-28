import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Login from 'scripts/app/login/Login';
import Register from 'scripts/app/register/Register';
class PublicLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        return (
            <div className="page-wrapper">
                <Switch>                   
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Redirect to="/login" />
                </Switch>
            </div>
        );
    }
}
export default PublicLayout;

