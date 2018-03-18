import React from 'react'
import { Form, Icon, Input, Button } from 'antd'

const FormItem = Form.Item

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
}

class addfields extends React.Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields()
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values)
            }
        })
    }

    render() {
        const {
            getFieldDecorator,
            getFieldsError,
            getFieldError,
            isFieldTouched
        } = this.props.form

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('type') && getFieldError('type')
        const passwordError =
            isFieldTouched('name') && getFieldError('name')
        return (
            <div className='exercise-addfield'>
                <Form layout="inline" onSubmit={this.handleSubmit} >
                    <FormItem
                        validateStatus={userNameError ? 'error' : ''}
                        help={userNameError || ''}
                    >
                        {getFieldDecorator('type', {
                            rules: [
                                { required: true, message: '请输入运动的类别(力量或者有氧)' }
                            ]
                        })(
                            <Input
                            className='exercise-input'
                                prefix={
                                    <Icon
                                        type="tag-o"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder="力量或者有氧"
                            />
                        )}
                    </FormItem>
                    <FormItem
                        validateStatus={passwordError ? 'error' : ''}
                        help={passwordError || ''}
                    >
                        {getFieldDecorator('name', {
                            rules: [
                                { required: true, message: '请输运动名字' }
                            ]
                        })(
                            <Input
                                className='exercise-input'
                                prefix={
                                    <Icon
                                        type="tag-o"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder="名字"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            className='exercise-add'
                            type="primary"
                            shape="circle"
                            icon="plus"
                            onClick={this.handleSubmit}
                            disabled={hasErrors(getFieldsError())}
                        />
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export const AddFields = Form.create()(addfields)
