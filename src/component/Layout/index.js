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
                <Header style={{ overflow: 'auto', width: '100%', position: 'fixed', left: 0, zIndex: 100 }}>Header</Header>
                <Layout style={{ height: '100%' }}>
                    <Sider width={320} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: '#fff', marginTop: 64 }}>
                        <div style={{ padding: 24 }}>
                            {Side}
                        </div>
                    </Sider>
                    <Layout style={{ padding: '24px 24px 24px', marginLeft: 320 }}>
                        <Content style={{ padding: 24, marginTop: 64, minHeight: 280 }}>
                            {Contents}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}