import React from 'react'
import { Menu } from 'antd'
import { Paper } from '../../component/paper/index'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Exercise from './log-excersise'
import Category from './log-category'
import './index.less'

const url = {
    '/workout/exercise': 'exercise',
    '/workout/category': 'category',
    '/workout/tool': 'tool',
    '/workout/about': 'about'
}

const LogMenu = ({ onSelect, routerState }) => {
    const current = url[routerState]

    return (
        <div className="log-menu-warpper" style={{ maxHeight: 192 }}>
            <Menu
                defaultSelectedKeys={['about']}
                selectedKeys={[current]}
                onSelect={onSelect}
            >
                <Menu.Item key="exercise">
                    <Link to="/workout/exercise">动作</Link>
                </Menu.Item>
                <Menu.Item key="category">
                    <Link to="/workout/category">类目</Link>
                </Menu.Item>
                {/* <Menu.Item key="tool">
                    <Link to="/workout/tool">工具</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/workout/about">关于</Link>
                </Menu.Item> */}
            </Menu>
        </div>
    )
}

class Log extends React.Component {
    checkAuth = () => {
        this.props.dispatch({ type: 'checkAuth' })
    }
    handleOnSelect = ({ item, key, selectedKeys }) => {
        const path = '/workout/' + key
        this.props.dispatch({ type: 'change', payload: path })
    }

    componentWillMount() {
        this.props.dispatch({
            type: 'change',
            payload: this.props.location.pathname
        })
    }
    componentDidMount() {
        // this.checkAuth();
    }

    dispatcher = () => {
        const { routerState } = this.props
        const ComponentMap = {
            '/workout/exercise': <Exercise />,
            '/workout/category': <Category />,
            '/workout/tool': 'tool',
            '/workout/about': 'about'
        }
        return ComponentMap[routerState]
    }

    render() {
        const { redirectPath, isRedirect, routerState } = this.props
        if (isRedirect) {
            return <Redirect to={redirectPath} />
        }

        return (
            <div className="log-wrapper">
                <LogMenu
                    routerState={routerState}
                    onSelect={this.handleOnSelect}
                />
                <Paper>
                    <div className="log-paper">{this.dispatcher()}</div>
                </Paper>
            </div>
        )
    }
}

const mapState = state => {
    return {
        ...state.editor
    }
}

export default connect(mapState)(Log)
