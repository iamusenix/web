import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  matchPath
} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authenticate} from 'scripts/actions/MeActionCreator';
import AppSpin from 'scripts/app/spin/AppSpin';
import Layout from 'scripts/app/layout/Layout';
import PublicLayout from 'scripts/app/layout/PublicLayout';
import AuthService from 'scripts/services/AuthService';
class AuthRoute extends React.Component {

    componentDidMount(){
        let {actions} = this.props;
        actions.authenticate();
    }
    render() {
        const {authInfo} = this.props.me;
        if(!authInfo){
            return <Route path="/"  component={AppSpin} />;
        }else if(authInfo.access_token){
            return <Route path="/"  component={Layout} />;
        }else{
            return <Route path="/"  component={PublicLayout} />;
        }
    }
}
function mapStateToProps(state){
    return {
        me:state.me
    }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({authenticate}, dispatch) }
}
export default   withRouter(connect(mapStateToProps,mapDispatchToProps) (AuthRoute));

