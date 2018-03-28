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
        let token = sessionStorage.getItem('access_token');
        if(token){
            actions.authenticate(token);
        }
    }
    render() {
        const {authInfo} = this.props.me;
        if(!authInfo){
            return <AppSpin/>;
        }else if(authInfo.access_token){
            return <Layout/>;
        }else{
            return <PublicLayout/>
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
export default connect(mapStateToProps,mapDispatchToProps) (AuthRoute);

