import React from 'react';
import Showdown from 'showdown';
import { Layout } from 'antd';
import { Paper } from '../../component/paper/index';

import './index.less'
import { CommentCard } from '../../component/CommentCard/index';
import { CommentForm } from '../../component/CommentForm/index';


const { Header, Footer, Content } = Layout;
var fileContent = require("./plan.md");



export const TrainingOverview = () => {

    const st = fileContent
    const converter = new Showdown.Converter();
    const html = converter.makeHtml(st);
    return (
        <Layout style={{ height: '100%' }}>
            <Header style={{ overflow: 'auto', width: '100%', position: 'fixed', left: 0, zIndex: 100 }}>Header</Header>
            <Layout style={{ height: '100%' }}>
                <Content style={{ padding: 24, marginTop: 64, minHeight: 280 }}>
                    <Paper>
                        <div dangerouslySetInnerHTML={{ __html: html }}></div>
                    </Paper>
                    <Paper>
                        <div>
                            <CommentForm />
                            <div style={{ marginTop: 100, borderTop: '1px solid #d9d9d9' }}>
                                <CommentCard />
                            </div>
                        </div>
                    </Paper>
                </Content>
            </Layout>
        </Layout>
    )
}
