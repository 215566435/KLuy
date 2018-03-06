import React from 'react';
import { Button, Icon, Form, Input } from 'antd';
import './index.less';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LogForm extends React.Component {
    state = {
        excersiseDetail: []
    }


    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({
                    excersiseDetail: [...this.state.excersiseDetail, values]
                })
            }
        });
    }
    renderExcersiseDetail = () => {
        return this.state.excersiseDetail.map((item, index) => {
            return (
                <div key={index} className='set-row'>
                    <span style={{ color: '#1890FF' }}>第{index + 1}组：</span>
                    <span>{item.reps}次</span>
                    <span>{item.weight}kg</span>
                </div>
            )
        })
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('reps') && getFieldError('reps');
        const passwordError = isFieldTouched('weight') && getFieldError('weight');
        return (
            <div>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem
                        validateStatus={userNameError ? 'error' : ''}
                        help={userNameError || ''}
                    >
                        {getFieldDecorator('reps', {
                            rules: [{ required: true, message: '请输入次数(数字)' }],
                        })(
                            <Input prefix={<Icon type="tag-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="次数" />
                        )}
                    </FormItem>
                    <FormItem
                        validateStatus={passwordError ? 'error' : ''}
                        help={passwordError || ''}
                    >
                        {getFieldDecorator('weight', {
                            rules: [{ required: true, message: '请输入重量(数字)' }],
                        })(
                            <Input prefix={<Icon type="tag-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="重量kg" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            shape="circle"
                            icon='plus'
                            disabled={hasErrors(getFieldsError())}
                        />
                    </FormItem>
                </Form>
                {this.renderExcersiseDetail()}
            </div>
        );
    }
}

export default Form.create()(LogForm);


