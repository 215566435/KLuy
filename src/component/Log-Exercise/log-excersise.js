import React from 'react';
import { Button, Menu, Dropdown, Icon, Tabs, DatePicker, Form, Input } from 'antd';
import moment from 'moment';

import LogForm from './log-form';

const { MonthPicker, RangePicker } = DatePicker;
const FormItem = Form.Item;


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



const Curd = () => {
    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
                <Icon type="down" style={{ fontSize: 16, color: '#08c' }} />
            </a>
        </Dropdown>
    )
}

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const TabPane = Tabs.TabPane;
const Editor = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22 }}>name</div>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="新增" key="1">
                        <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                        <LogForm />
                    </TabPane>
                    <TabPane tab="历史" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="图表" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        </div>
    )
}


export class Exercise extends React.Component {


    render() {
        return (
            <div >
                <Button type="primary" shape="circle" icon="plus" />
                <Editor />
                <div className='exercise-row'>
                    <div>bench press</div>
                    <div><Curd /></div>
                </div>
            </div>
        )
    }
}