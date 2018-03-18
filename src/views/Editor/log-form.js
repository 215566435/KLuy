import React from 'react'
import { Button, Icon, Form, Input,message } from 'antd'
import { connect } from 'react-redux'
import './index.less'

const FormItem = Form.Item

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
}

const Steper = ({ onAdd, number, type, decrease }) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 12
            }}
        >
            <div style={{ marginRight: 12 }}>{number}</div>
            <div>
                <div>
                    <Button
                        onClick={() => {
                            onAdd && onAdd({ type: type, payload: 1 })
                        }}
                    >
                        +1
                    </Button>
                    <Button
                        onClick={() => {
                            onAdd && onAdd({ type: type, payload: 10 })
                        }}
                    >
                        +10
                    </Button>
                </div>
                <div>
                    <Button
                        onClick={() => {
                            decrease && decrease({ type: type, payload: -1 })
                        }}
                    >
                        -1
                    </Button>
                    <Button
                        onClick={() => {
                            decrease && decrease({ type: type, payload: -10 })
                        }}
                    >
                        -10
                    </Button>
                </div>
            </div>
        </div>
    )
}

class WeightReps extends React.Component {
    state = {
        weight: 0,
        reps: 0
    }
    onAdd = ({ type, payload }) => {
        this.setState({
            [type]: this.state[type] + payload
        })
    }
    decrease = ({ type, payload }) => {
        this.setState({
            [type]: this.state[type] + payload
        })
    }

    onSubmit = e => {
        if(this.state.weight >0 &&this.state.reps>0){
            this.props.onSubmit && this.props.onSubmit(e, this.state)
        }else{
            message.error('请输入有效的重量和次数')
        }
        
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                    className="exercise-add"
                    type="primary"
                    shape="circle"
                    icon="plus"
                    onClick={this.onSubmit}
                />
                <div>
                    <Steper
                        number={`${this.state.reps}次`}
                        type="reps"
                        onAdd={this.onAdd}
                        decrease={this.decrease}
                    />
                    <Steper
                        number={`${this.state.weight}kg`}
                        type="weight"
                        onAdd={this.onAdd}
                        decrease={this.decrease}
                    />
                </div>
            </div>
        )
    }
}

class LogForm extends React.Component {
    state = {
        excersiseDetail: []
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields()
    }
    handleAdd = (e, value) => {
        e.preventDefault()

        this.setState({
            excersiseDetail: [...this.state.excersiseDetail, value]
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.dispatch({
            type: 'addExerciseSet',
            payload: {
                sets: this.state.excersiseDetail,
                exerciseID: this.props.currentID
            }
        })
    }
    handleDelete = (e, index) => {
        e.preventDefault()
        this.setState({
            excersiseDetail: this.state.excersiseDetail.filter((item, idx) => {
                if (idx !== index) {
                    return item
                }
                return null
            })
        })
    }

    renderExcersiseDetail = () => {
        return this.state.excersiseDetail.map((item, index) => {
            return (
                <div key={index} className="set-row">
                    <div>
                        <span style={{ color: '#1890FF' }}>
                            第{index + 1}组：
                        </span>
                        <span>{item.reps}次</span>
                        <span>{item.weight}kg</span>
                    </div>
                    <Button
                        type="default"
                        htmlType="submit"
                        shape="circle"
                        icon="close"
                        onClick={e => this.handleDelete(e, index)}
                    />
                </div>
            )
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
        const userNameError = isFieldTouched('reps') && getFieldError('reps')
        const passwordError =
            isFieldTouched('weight') && getFieldError('weight')
        return (
            <div>
                <WeightReps onSubmit={this.handleAdd} />
                {this.renderExcersiseDetail()}
                <Button
                    type="primary"
                    htmlType="submit"
                    onClick={this.handleSubmit}
                >
                    提交
                </Button>
            </div>
        )
    }
}

export default connect()(Form.create()(LogForm))
