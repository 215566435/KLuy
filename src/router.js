import './index.css'
import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Introduction } from './views/Introduction/'
import Editor from './views/Editor/index'
import { Articles } from './views/Articles'
import { Layout, Menu, Button } from 'antd'
import { connect } from 'react-redux'
import Login from './views/Login'
import Console from './views/Console'

const { Header, Footer, Content } = Layout

const routerPath = string => {
    const url = {
        '/': '1',
        '/workout': '2',
        '/login': '4',
        '/console': '3'
    }
    const i = string.indexOf('workout')
    if (i >= 0) {
        return '2'
    }

    return url[string] + ''
}

const Headed = ({ routerState, token, dispatch }) => {
    if (!routerState) {
        return null
    }
    const renderItem = () => {
        return [
            <Menu.Item key="1">
                <Link to="/">训记</Link>
            </Menu.Item>,
            <Menu.Item key="2">
                <Link to="/workout/about">记录</Link>
            </Menu.Item>,
            <Menu.Item key="3">
                <Link to="/console">FAQ</Link>
            </Menu.Item>
        ]
    }

    const headerHeight = '48px'
    console.log(localStorage.getItem('token'))
    return (
        <Header
            style={{
                height: headerHeight,
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[routerPath(routerState)]}
                style={{ lineHeight: headerHeight }}
            >
                {renderItem()}
            </Menu>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[routerPath(routerState)]}
                style={{ lineHeight: headerHeight }}
                onClick={e => {
                    if (e.key === '5') {
                        dispatch({ type: 'logout' })
                    }
                }}
            >
                {token === null ? (
                    <Menu.Item key="4">
                        <Link to="/login">登录</Link>
                    </Menu.Item>
                ) : (
                    <Menu.Item key="5">
                        <div>登出</div>
                    </Menu.Item>
                )}
            </Menu>
        </Header>
    )
}

const mapState = state => {
    return {
        routerState: state.editor.routerState,
        token: localStorage.getItem('token')
    }
}

const Apps = connect(mapState)(Headed)

export default () => {
    return (
        <div className="rootWrapper">
            <Router>
                <Layout>
                    <Apps />
                    <Content style={{ minHeight: '90vh' }}>
                        <Layout style={{ padding: '24px 24px 24px' }}>
                            <div className="router-wrapper">
                                <Route
                                    exact
                                    path="/"
                                    component={Introduction}
                                />
                                <Route path="/workout/:id" component={Editor} />
                                <Route path="/login" component={Login} />
                                <Route
                                    path="/Articles/:id"
                                    component={Articles}
                                />
                                <Route path="/console" component={Console} />
                            </div>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>方正，知乎</Footer>
                </Layout>
            </Router>
        </div>
    )
}
