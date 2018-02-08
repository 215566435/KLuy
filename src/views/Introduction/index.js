
import React from 'react';
import { Layout } from 'antd';

import './index.less';
import { ArticleBlock } from '../../component/ArticleBlock';
import { RecentArea } from '../../component/RecentArea';

const { Header, Footer, Content } = Layout;

export const Introduction = () => (
    <Layout>
        <Header>Header</Header>
        <Content>
            <div className='indexPage' style={{ minHeight: '70vh' }}>
                <div className='article-area'>
                    <ArticleBlock content={'asdas'} title={'如何学习React'} time={'2018-10-30'} />
                </div>
                <RecentArea path='/trainingoverview'/>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>转载署名出处：方正，知乎</Footer>
    </Layout>
)

