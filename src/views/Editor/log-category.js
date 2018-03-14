import React from 'react'
import { connect } from 'react-redux'
import { Clickble, Curd, Editor } from './log-excersise'
import {
    LoadingArray,
    LoadingArrayToChildren
} from '../../component/LoadingHoc'
import { Modal, Input, Button, Select, Radio } from 'antd'

const Option = Select.Option

class ModalWrapper extends React.Component {
    state = {
        visible: false,
        currentValue: ''
    }

    open = () => {
        this.setState({
            visible: true
        })
    }

    handleClose = () => {
        this.setState({
            visible: false
        })
    }
    handleOk = () => {
        this.setState({
            visible: false
        })

        this.props.handleOK && this.props.handleOK()
    }

    render() {
        return (
            <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleClose}
                width={600}
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                {this.props.children}
            </Modal>
        )
    }
}

class Selector extends React.Component {
    state = {
        visible: false,
        currentValue: ''
    }

    open = () => {
        this.setState({
            visible: true
        })
    }

    handleClose = () => {
        this.setState({
            visible: false
        })
    }
    handleOk = () => {
        this.setState({
            visible: false
        })
        const { exercise } = this.props
        const key = this.state.currentValue

        this.props.handleOK && this.props.handleOK(exercise[key])
    }

    handleChange = key => {
        this.setState({
            currentValue: key
        })
    }

    render() {
        const { exercise } = this.props
        return (
            <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleClose}
                width={600}
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <LoadingArrayToChildren array={exercise}>
                    {item => {
                        return (
                            <Select
                                size={'default'}
                                onChange={this.handleChange}
                                value={this.state.currentValue}
                                style={{ width: 200 }}
                            >
                                {item.map(i => {
                                    return <Option key={i.id}>{i.name}</Option>
                                })}
                            </Select>
                        )
                    }}
                </LoadingArrayToChildren>
            </Modal>
        )
    }
}

class Category extends React.Component {
    componentDidMount() {
        const { category } = this.props
        if (category.length < 1) {
            this.props.dispatch({ type: 'fetchCategory' })
        }
    }

    onHandleCategoryClick = id => {
        this.props.dispatch({ type: 'fetchExcersise', payload: id })
    }
    onHandleExcersiseClick = id => {
        this.setState({
            visible: true,
            modal: <Editor />
        })
    }
    handleAddCate = () => {
        this.props.dispatch({
            type: 'addCategory',
            payload: this.input.input.value
        })
        this.input.input.value = ''
    }

    handleAddExercise = () => {
        this.Selector.open()
        this.props.dispatch({
            type: 'fetchExerciseAll'
        })
    }

    handleOk = payload => {
        this.props.dispatch({
            type: 'bindExerciseToCate',
            payload: { ...payload, categoryID: this.props.categoryID }
        })
    }

    render() {
        const { category, type } = this.props
        return (
            <div>
                {type !== 'exercise' ? (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: 12
                        }}
                    >
                        <Input
                            placeholder="类目名称"
                            style={{ width: 300 }}
                            ref={input => (this.input = input)}
                        />
                        <Button
                            type="primary"
                            shape="circle"
                            icon="plus"
                            onClick={this.handleAddCate}
                        />
                    </div>
                ) : (
                    <Button type="primary" onClick={this.handleAddExercise}>
                        添加动作
                    </Button>
                )}

                <LoadingArray array={category}>
                    {item => (
                        <Clickble
                            key={item.id}
                            onClick={() => {
                                item.type === 'category'
                                    ? this.onHandleCategoryClick(
                                          item.categoryID
                                      )
                                    : this.onHandleExcersiseClick(
                                          item.categoryID
                                      )
                            }}
                        >
                            <div>
                                {item.type === 'category'
                                    ? item.categoryName
                                    : item.name}
                            </div>
                        </Clickble>
                    )}
                </LoadingArray>
                <Selector
                    handleOK={this.handleOk}
                    exercise={this.props.exercise}
                    ref={node => {
                        this.Selector = node
                    }}
                />
            </div>
        )
    }
}

const mapState = state => {
    return {
        category: state.editor.category,
        type: state.editor.type,
        exercise: state.exercise.exercise,
        categoryID: state.editor.categoryID
    }
}

export default connect(mapState)(Category)
