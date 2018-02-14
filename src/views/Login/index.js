import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.less'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    state = {
        redirect: false
    }
    componentWillMount() {
        this.props.dispatch({ type: 'change', payload: this.props.location.pathname })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.dispatch({ type: "postLogin", payload: values });
            }
        });
    }
    render() {
        if (this.props.isLogin) {
            return <Redirect to='/' />
        }

        const { getFieldDecorator } = this.props.form;
        return (
            <div className='loginWrapper' >
                <div className='formPage'>
                    <h1 style={{ textAlign: "center" }}>Burn.js</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入你的用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入你的密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                        </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    console.log(state.user)
    return {
        ...state.user
    }
}

export default connect(mapState)(Form.create()(NormalLoginForm));