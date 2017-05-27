import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  matchPath
} from 'react-router-dom';

import CreateRoom from 'scripts/create/CreateRoom';
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        return (
            <div className="page-wrapper">
                <Switch>                   
                    <Route path={"/new"} component={CreateRoom}/>
                    
                    <Redirect to={{pathname: '/new', state: {from: this.props.location }}}/>
                </Switch>
            </div>
        );
    }
}
export default Layout;

