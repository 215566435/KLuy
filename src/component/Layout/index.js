import React from 'react';
import { Layout } from 'antd';


const { Header, Content } = Layout;



export class DetailLayout extends React.Component {
    render() {
        const { Contents } = this.props;
        return (
            <Layout style={{ height: '100%' }}>
                <Header style={{ overflow: 'auto', width: '100%', position: 'fixed', left: 0, zIndex: 100 }}>Header</Header>
                <Layout style={{ height: '100%' }}>
                    <Layout style={{ padding: '24px 24px 24px' }}>
                        <Content style={{ padding: 24, marginTop: 64, minHeight: 280 }}>
                            {Contents}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}