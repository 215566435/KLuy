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


const { Header, Footer, Content } = Layout;



const Headed = ({ routerState }) => {
    console.log(routerState)
    return (
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[routerState === '/' ? '1' : '2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/editor'>写文章</Link></Menu.Item>
            </Menu>
        </Header>
    )
}

const mapState = (state) => {
    return {
        routerState: state.editor.routerState
    }
}

const Apps = connect(mapState)(Headed)

export default () => {
    return (
        <div className='rootWrapper' >
            <Router >
                <Layout >
                    <Apps />
                    <Content style={{ height: '100%' }}>
                        <Layout style={{ padding: '24px 24px 24px' }}>
                            <div className="router-wrapper">
                                <Route exact path="/" component={Introduction} />
                                <Route path="/editor" component={Editor} />
                                <Route path="/Articles/:id" component={Articles} />
                            </div>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>方正，知乎</Footer>
                </Layout>
            </Router>
        </div>
    )
}