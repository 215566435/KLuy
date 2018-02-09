
import React from 'react';
import { Layout, Menu } from 'antd';

import './index.less';
import { ArticleBlock } from '../../component/ArticleBlock';
import { RecentArea } from '../../component/RecentArea';
import { connect } from 'react-redux';
const { Header, Footer, Content } = Layout;


class Intro extends React.Component {
    componentDidMount() {
        this.props.dispatch({ type: 'change', payload: this.props.location.pathname })
    }

    render() {
        return (
            <Layout>
                <Content>
                    <div className='indexPage' style={{ minHeight: '70vh' }}>
                        <div className='article-area'>
                            <ArticleBlock content={'asdas'} title={'如何学习React'} time={'2018-10-30'} />
                        </div>
                        <RecentArea path='/Articles' />
                    </div>
                </Content>
            </Layout>
        )
    }
}

export const Introduction = connect()(Intro);