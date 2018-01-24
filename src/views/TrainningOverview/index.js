import React from 'react';
import { Steps } from 'antd';
import { Layout } from 'antd';
import { Paper } from '../../component/paper/index';

const { Header, Footer, Content, Sider } = Layout;
const Step = Steps.Step;

export const TrainingOverview = () => {
    return (
        <Layout style={{ height: '100%' }}>
            <Header>Header</Header>
            <Layout style={{ height: '100%' }}>
                <Sider width={320} style={{ background: '#fff' }}>
                    <div style={{ padding: 24 }}>

                    </div>
                </Sider>
                <Layout style={{ padding: '24px 24px 24px' }}>
                    <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                        <Paper />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
