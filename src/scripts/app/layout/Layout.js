import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  matchPath
} from 'react-router-dom';

import NavBar from 'scripts/app/navbar/NavBar';
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        return (
            <div className="page-wrapper">
                <NavBar/>
            </div>
        );
    }
}
export default Layout;

