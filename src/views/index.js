
import React from 'react';
import { Layout } from 'antd';
import './index.css';
import { ProgrameOverview } from '../component/ProgrameOverview';
import { Grid } from '../component/Grid';


const { Header, Footer, Content } = Layout;



export const TrainNote = () => (
    <Layout>
        <Header>Header</Header>
        <Content>
            <div className='banner' >
                <img alt='shit' src='https://www.bodybuilding.com/images/2017/november/shortcut-to-shred-1920x600-desktop.jpg' />
            </div>
            <div style={{ background: '#fff', padding: 150, minHeight: 280, display: 'flex' }}>
                <Grid dataSet={[<ProgrameOverview />, <ProgrameOverview />, <ProgrameOverview />, <ProgrameOverview />]} />
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
)

