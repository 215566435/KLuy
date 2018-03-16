import React from 'react'
import { Menu, Dropdown, Icon, Tabs, Modal, Button } from 'antd'

import { connect } from 'react-redux'

import LogForm from './log-form'
import LogHistory from './log-history'
import { LoadingArray } from '../../component/LoadingHoc'
import { AddFields } from './addfield'

const confirm = Modal.confirm

const menu = (
    <Menu>
        <Menu.Item>
            <div>重命名</div>
        </Menu.Item>
        <Menu.Item>
            <div>删除</div>
        </Menu.Item>
    </Menu>
)

export const Curd = () => {
    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#1">
                <Icon type="down" style={{ fontSize: 16, color: '#08c' }} />
            </a>
        </Dropdown>
    )
}

const TabPane = Tabs.TabPane
export const Editor = props => {
    const currentExercise = props.exercise.find(i => i.id === props.currentID)
    return (
        <div style={{ width: '100%' }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 22 }}>
                    {currentExercise ? currentExercise.name : ''}
                </div>
                <Tabs
                    defaultActiveKey="1"
                    onChange={key => {
                        if (key === '2') {
                            props.dispatch({
                                type: 'fetchHistory',
                                payload: props.currentID
                            })
                        }
                    }}
                >
                    <TabPane tab="新增" key="1">
                        <LogForm {...props} />
                    </TabPane>
                    <TabPane tab="历史" key="2">
                        <LogHistory {...props} />
                    </TabPane>
                    <TabPane tab="图表" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export const Clickble = ({ children, onClick }) => {
    return (
        <div className="exercise-row" onClick={onClick}>
            {children}
        </div>
    )
}

class Exercise extends React.Component {
    state = {
        visible: false,
        currentID: ''
    }

    componentDidMount() {
        this.props.dispatch({ type: 'fetchExerciseAll' })
    }

    handleOnClick = id => {
        this.setState({
            visible: true,
            currentID: id
        })
    }

    handleOk = e => {
        this.setState({
            visible: false
        })
    }
    handleCancel = e => {
        this.setState({
            visible: false
        })
    }
    onSubmit = values => {
        this.props.dispatch({ type: 'addExercise', payload: values })
    }
    handleDeleteExercise = (e, id) => {
        e.stopPropagation()

        confirm({
            title: '你确定删除这个运动吗?',
            content: '删除操作不可逆，会将该动作下所有的记录全部删除，你确定删除吗?',
            onOk: () => {
                this.props.dispatch({
                    type: 'deleteExercise',
                    payload: id
                })
            },
            okText: '确定',
            cancelText: '取消',
            onCancel() {}
        })
    }

    render() {
        return (
            <div>
                <AddFields onSubmit={this.onSubmit} />
                <LoadingArray array={this.props.exercise}>
                    {item => {
                        return (
                            <Clickble
                                key={item.id}
                                onClick={() => this.handleOnClick(item.id)}
                            >
                                <div>{item.name}</div>
                                <Button
                                    type="danger"
                                    icon="close"
                                    shape="circle"
                                    onClick={e =>
                                        this.handleDeleteExercise(e, item.id)
                                    }
                                />
                            </Clickble>
                        )
                    }}
                </LoadingArray>
                <Modal
                    title="运动详情"
                    footer={null}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={600}
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                    destroyOnClose={true}
                >
                    <Editor currentID={this.state.currentID} {...this.props} />
                </Modal>
            </div>
        )
    }
}

const mapState = state => {
    return {
        exercise: state.exercise.exercise
    }
}

export default connect(mapState)(Exercise)
