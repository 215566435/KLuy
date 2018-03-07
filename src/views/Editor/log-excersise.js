import React from 'react'
import { Menu, Dropdown, Icon, Tabs, DatePicker, Modal } from 'antd'
import moment from 'moment'
import { connect } from 'react-redux'

import LogForm from './log-form'
import LogHistory from './log-history'
import { LoadingArray } from '../../component/LoadingHoc'

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

const dateFormat = 'YYYY/MM/DD'
const TabPane = Tabs.TabPane
export const Editor = () => {
    return (
        <div style={{ width: 500 }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 22 }}>name</div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="新增" key="1">
                        <DatePicker
                            defaultValue={moment('2015/01/01', dateFormat)}
                            format={dateFormat}
                        />
                        <LogForm />
                    </TabPane>
                    <TabPane tab="历史" key="2">
                        <LogHistory />
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
        visible: false
    }

    componentDidMount() {
        this.props.dispatch({ type: 'fetchExerciseAll' })
    }

    handleOnClick = () => {
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
        // <Button type="primary" shape="circle" icon="plus" />

        return (
            <div>
                <LoadingArray array={this.props.exercise}>
                    {item => {
                        return (
                            <Clickble
                                key={item.id}
                                onClick={() => this.handleOnClick(item.id)}
                            >
                                <div>{item.name}</div>
                            </Clickble>
                        )
                    }}
                </LoadingArray>
                <Modal
                    title="运动详情"
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
        exercise: state.exercise.exercise
    }
}

export default connect(mapState)(Exercise)
