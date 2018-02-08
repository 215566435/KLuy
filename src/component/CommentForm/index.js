import React from 'react';


import { Button, Input } from 'antd';
const { TextArea } = Input;

export const CommentForm = () => {

    return (
        <div>
            <div style={{ marginBottom: 22 }}>留言</div>
            <TextArea placeholder="说一说你对本文的评价吧～" autosize={{ minRows: 4, maxRows: 16 }} />
            <div style={{ marginTop: 22 }}>
                <Button type="primary" style={{ float: 'right' }} >提交留言</Button>
            </div>
        </div>
    )
}