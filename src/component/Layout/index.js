import React from 'react';
import { Steps } from 'antd';
import { Layout } from 'antd';


const { Header, Footer, Content, Sider } = Layout;
const Step = Steps.Step;


export class DetailLayout extends React.Component {
    render() {
        const { Head, Side, Contents } = this.props;
        return (
            <Layout style={{ height: '100%' }}>
                <Header>Head</Header>
                <Layout style={{ height: '100%' }}>
                    <Sider width={320} style={{ background: '#fff' }}>
                        <div style={{ padding: 24 }}>
                            {Side}
                        </div>
                    </Sider>
                    <Layout style={{ padding: '24px 24px 24px' }}>
                        <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                            {Contents}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}