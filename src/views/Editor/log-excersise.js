import React from 'react';
import { Menu, Dropdown, Icon, Tabs, DatePicker } from 'antd';
import moment from 'moment';


import LogForm from './log-form';
import LogHistory from './log-history';


const menu = (
    <Menu>
        <Menu.Item>
            <div>重命名</div>
        </Menu.Item>
        <Menu.Item>
            <div>删除</div>
        </Menu.Item>
    </Menu>
);



export const Curd = () => {
    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#1">
                <Icon type="down" style={{ fontSize: 16, color: '#08c' }} />
            </a>
        </Dropdown>
    )
}

const dateFormat = 'YYYY/MM/DD';
const TabPane = Tabs.TabPane;
const Editor = () => {
    return (
        <div style={{ width: 500 }}>
            <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22 }}>name</div>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="新增" key="1">
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                        <LogForm />
                    </TabPane>
                    <TabPane tab="历史" key="2">
                        <LogHistory />
                    </TabPane>
                    <TabPane tab="图表" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        </div>
    )
}


export const Clickble = ({ children, onClick }) => {
    return (
        <div className='exercise-row' onClick={onClick}>
            {children}
        </div>
    )
}

export class Exercise extends React.Component {


    render() {
        // <Button type="primary" shape="circle" icon="plus" />
        // <Clickble>
        //             <div>bench press</div>
        //             <div><Curd /></div>
        //         </Clickble>
        return (
            <div style={{
                display: "flex",
                justifyContent: 'center'
            }}
            >
                <Editor />
            </div>
        )
    }
}