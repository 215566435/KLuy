import React from 'react';
import { Steps } from 'antd';
import { Layout } from 'antd';
import { Paper } from '../../component/paper/index';

const { Header, Footer, Content, Sider } = Layout;
const Step = Steps.Step;

export const Layout = ({ LayoutType, Header, }) => {
    if (LayoutType === 'plan') {
        return (
            <Layout style={{ height: '100%' }}>
                <Header>{Header}</Header>
                <Layout style={{ height: '100%' }}>
                    <Sider width={320} style={{ background: '#fff' }}>
                        <div style={{ padding: 24 }}>
                            <Steps direction="vertical" current={3}>
                                <Step title="Finished" description="This is a description." />
                                <Step title="In Progress" description="This is a description." />
                                <Step title="Waiting" description="This is a description." />
                            </Steps>
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

    return (
        <Layout style={{ height: '100%' }}>
            <Header>{Header}</Header>
            <Layout style={{ height: '100%' }}>
                <Sider width={320} style={{ background: '#fff' }}>
                    <div style={{ padding: 24 }}>
                        <Steps direction="vertical" current={3}>
                            <Step title="Finished" description="This is a description." />
                            <Step title="In Progress" description="This is a description." />
                            <Step title="Waiting" description="This is a description." />
                        </Steps>
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
