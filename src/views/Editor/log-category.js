import React from 'react'
import { connect } from 'react-redux'
import { Clickble, Curd, Editor } from './log-excersise'
import {
    LoadingArray,
    LoadingArrayToChildren
} from '../../component/LoadingHoc'
import { Modal, Input, Button, Select, Radio, Icon } from 'antd'

const Option = Select.Option
const confirm = Modal.confirm

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
        const oneItem = exercise.find(i => i.id + '' === key)
        this.props.handleOK && this.props.handleOK(oneItem)
    }

    handleChange = key => {
        this.setState({
            currentValue: key
        })
    }

    render() {
        const { exercise } = this.props

        const newExercise = exercise
            ? exercise.filter(item => {
                  if (!item.categoryID) {
                      return item
                  }
              })
            : exercise

        return (
            <Modal
                title="添加动作到类目"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleClose}
                width={600}
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <LoadingArrayToChildren array={newExercise}>
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

    handleBackToCate = () => {
        this.props.dispatch({ type: 'fetchCategory' })
    }

    handleDeleteCategory = (e, categoryID) => {
        e.stopPropagation()

        confirm({
            title: '你确定删除这个分类吗?',
            content: '删除操作不可逆，你确定删除吗?',
            onOk: () => {
                this.props.dispatch({
                    type: 'deleteCategory',
                    payload: categoryID
                })
            },
            okText: '确定',
            cancelText: '取消',
            onCancel() {}
        })
    }

    render() {
        const {
            category,
            type,
            exercise,
            currentCategory,
            categoryExcersise
        } = this.props
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
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: 12
                            }}
                        >
                            <Button
                                icon={'arrow-left'}
                                shape={'circle'}
                                onClick={this.handleBackToCate}
                            />
                            <h2>
                                {currentCategory
                                    ? currentCategory.categoryName
                                    : ''}
                            </h2>
                            <Button
                                type="primary"
                                onClick={this.handleAddExercise}
                            >
                                添加动作
                            </Button>
                        </div>
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
                                <Editor
                                    currentID={this.state.currentID}
                                    exercise={categoryExcersise}
                                />
                            ) : null}
                        </Modal>
                    </div>
                )}

                <LoadingArray
                    array={type !== 'exercise' ? category : categoryExcersise}
                >
                    {item => (
                        <Clickble
                            key={item.id}
                            onClick={() => {
                                item.type === 'category'
                                    ? this.onHandleCategoryClick(
                                          item.categoryID
                                      )
                                    : this.onHandleExcersiseClick(item.id)
                            }}
                        >
                            <div>
                                {item.type === 'category'
                                    ? item.categoryName
                                    : item.name}
                            </div>
                            <Button
                                type="danger"
                                icon="close"
                                shape="circle"
                                onClick={e =>
                                    this.handleDeleteCategory(
                                        e,
                                        item.categoryID
                                    )
                                }
                            />
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
        ...state.editor,
        exercise: state.exercise.exercise
    }
}

export default connect(mapState)(Category)
