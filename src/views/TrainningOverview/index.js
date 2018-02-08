import React from 'react';
import Showdown from 'showdown';
import { Layout, Button, Input } from 'antd';
import { Paper } from '../../component/paper/index';

import './index.less'
import { CommentCard } from '../../component/CommentCard/index';

const { TextArea } = Input;
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
                            <div>
                                <div style={{ marginBottom: 22 }}>留言</div>
                                <TextArea placeholder="说一说你对本文的评价吧～" autosize={{ minRows: 4, maxRows: 16 }} />
                                <div style={{ marginTop: 22 }}>
                                    <Button type="primary" style={{ float: 'right' }} >提交留言</Button>
                                </div>
                            </div>
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
