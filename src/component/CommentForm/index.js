import React from 'react';


import { Button, Input } from 'antd';
const { TextArea } = Input;

export class CommentForm extends React.Component {

    getText = () => {
        return {
            author: this.Input.input.value,
            content: this.TextArea.textAreaRef.value
        }
    }

    render() {

        return (
            <div>
                <h2 style={{ marginBottom: 22 }}>留言</h2>
                <Input ref={node => this.Input = node} style={{ marginBottom: 22 }} placeholder="你的名字" />
                <TextArea
                    placeholder="说一说你对本文的评价吧～(支持markdown格式)"
                    autosize={{ minRows: 4, maxRows: 16 }}
                    ref={node => this.TextArea = node}
                />
                <div style={{ marginTop: 22 }}>
                    <Button type="primary" style={{ float: 'right' }} onClick={this.props.onClick}>提交留言</Button>
                </div>
            </div>
        )
    }
}