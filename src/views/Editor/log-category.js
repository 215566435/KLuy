import React from 'react'
import { connect } from 'react-redux'
import { Clickble, Curd, Editor } from './log-excersise'
import {
    LoadingArray,
    LoadingArrayToChildren
} from '../../component/LoadingHoc'
import { Modal, Input, Button, Select, Radio } from 'antd'

const Option = Select.Option

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
    state = {
        things: '',
        visible: false,
        currentID: 0
    }

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
            currentID: id
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

    handleExerciseOk = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        const { category, type, exercise } = this.props
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
                    <div>
                        <Button type="primary" onClick={this.handleAddExercise}>
                            添加动作
                        </Button>
                        <Modal
                            title="运动详情"
                            footer={null}
                            visible={this.state.visible}
                            onOk={this.handleExerciseOk}
                            onCancel={this.handleExerciseOk}
                            width={600}
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {this.state.visible ? (
                                <Editor currentID={this.state.currentID} />
                            ) : null}
                        </Modal>
                    </div>
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
