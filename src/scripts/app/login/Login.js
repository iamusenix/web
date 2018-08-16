import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Switch,
    Redirect,
    withRouter,
    matchPath
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input, Icon, Button } from 'antd';
import { login } from 'scripts/actions/MeActionCreator';
import styles from './login.scss';

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.actions.login(values.userName, values.password);
                //this.props.login(values.userName,values.password);
                //this.props.dispatch(login(values.userName,values.password));
            } else {

            }
        });
    }
    render() {
        let s = styles,
            FormItem = Form.Item,
            { getFieldDecorator } = this.props.form;

        return (
            <div className={`${s.login} flex-center`}>
                <Form onSubmit={this.handleSubmit} className={s.form}>
                    <div className={s.logo}>
                        <img src="/images/login_logo.png" />
                    </div>
                    <div className={s.logoTxt}>
                        <span>无障碍上网后台管理</span>
                    </div>
                    <div className={s.numLogin}>- 账号登录 -</div>
                    <div className={s.inputWrap}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }]
                            })(
                                <Input prefix={<Icon type="user" className={s.icon} />} placeholder="Username" />
                            )}
                        </FormItem>
                    </div>
                    <div className={s.inputWrap}>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }]
                            })(
                                <Input prefix={<Icon type="lock" className={s.icon} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                    </div>
                    <FormItem>
                        <Button type="primary" size="large" htmlType="submit" className={s.button} onClick={(e) => this.handleSubmit(e)}>登录</Button>
                    </FormItem>
                </Form>

            </div>

        );
    }
}

const Login = Form.create()(NormalLoginForm);
function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ login }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

