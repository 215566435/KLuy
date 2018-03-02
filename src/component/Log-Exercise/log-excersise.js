import React from 'react';
import { Button, Menu, Dropdown, Icon, Tabs, DatePicker, Form, Input } from 'antd';
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;
const FormItem = Form.Item;


const menu = (
    <Menu>
        <Menu.Item>
            <div>重命名</div>
        </Menu.Item>
        <Menu.Item>
            <div>删除</div>
        </Menu.Item>
    </Menu>
);


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                >
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >
                        Log in
            </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);




const Curd = () => {
    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
                <Icon type="down" style={{ fontSize: 16, color: '#08c' }} />
            </a>
        </Dropdown>
    )
}

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const TabPane = Tabs.TabPane;
const Editor = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22 }}>name</div>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="新增" key="1">
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                        <WrappedHorizontalLoginForm />
                    </TabPane>
                    <TabPane tab="历史" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="图表" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        </div>
    )
}


export class Exercise extends React.Component {


    render() {
        return (
            <div >
                <Button type="primary" shape="circle" icon="plus" />
                <Editor />
                <div className='exercise-row'>
                    <div>bench press</div>
                    <div><Curd /></div>
                </div>
            </div>
        )
    }
}