import React from 'react'
import { connect } from 'react-redux'
import { Clickble, Curd, Editor } from './log-excersise'
import { LoadingArray } from '../../component/LoadingHoc'
import { Modal } from 'antd'

class Category extends React.Component {
    state = {
        visible: false
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
            visible: true
        })
    }
    handleOk = e => {
        console.log(e)
        this.setState({
            visible: false
        })
    }
    handleCancel = e => {
        console.log(e)
        this.setState({
            visible: false
        })
    }

    render() {
        const { category } = this.props
        return (
            <div>
                <LoadingArray array={category}>
                    {item => (
                        <Clickble
                            key={item.id}
                            onClick={() => {
                                item.type === 'category'
                                    ? this.onHandleCategoryClick(item.id)
                                    : this.onHandleExcersiseClick(item.id)
                            }}
                        >
                            <div>{item.name}</div>
                            {item.type === 'category' ? (
                                <div>
                                    <Curd />
                                </div>
                            ) : null}
                        </Clickble>
                    )}
                </LoadingArray>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={600}
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Editor />
                </Modal>
            </div>
        )
    }
}

const mapState = state => {
    return {
        category: state.editor.category
    }
}

export default connect(mapState)(Category)
