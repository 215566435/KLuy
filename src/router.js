import './index.css';
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,

} from 'react-router-dom'

import { Introduction } from './views/Introduction/';
import { Editor } from './views/Editor/index';
import { Articles } from './views/Articles';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import Login from './views/Login'
import Console from './views/Console';
import dragact from './views/Dragact';


const { Header, Footer, Content } = Layout;


const routerPath = {
    '/': '1',
    '/editor': '2',
    '/login': '2',
    '/console': '3'
}


const Headed = ({ routerState, token }) => {
    console.log(routerState)
    if (!routerState) {
        return null;
    }
    const renderItem = () => {
        if (token) {
            return [
                <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>,
                <Menu.Item key="2"><Link to='/editor'>写文章</Link></Menu.Item>,
                <Menu.Item key="3"><Link to='/console'>控制台</Link></Menu.Item>,
            ]
        }
        return [
            <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>,
            <Menu.Item key="2"><Link to='/login'>登陆</Link></Menu.Item>
        ]
    }

    return (
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[routerPath[routerState]]}
                style={{ lineHeight: '64px' }}
            >
                {renderItem()}
            </Menu>
        </Header>
    )
}

const mapState = (state) => {
    console.log('路由跳转')
    return {
        routerState: state.editor.routerState,
        token: localStorage.getItem('token')
    }
}

const Apps = connect(mapState)(Headed)

export default () => {
    return (
        <div className='rootWrapper' >
            <Router >
                <Layout >
                    <Apps />
                    <Content style={{ minHeight: '90vh' }}>
                        <Layout style={{ padding: '24px 24px 24px' }}>
                            <div className="router-wrapper">
                                <Route exact path="/" component={Introduction} />
                                <Route path="/editor" component={Editor} />
                                <Route path="/login" component={Login} />
                                <Route path="/Articles/:id" component={Articles} />
                                <Route path="/console" component={Console} />
                                <Route path="/dragact" component={dragact} />
                            </div>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>方正，知乎</Footer>
                </Layout>
            </Router>
        </div>
    )
}