import React from 'react';
import { Input, Button } from 'antd';
import { DetailLayout } from '../../component/Layout';
import { Paper } from '../../component/paper/index';
import { ExerciseCell } from '../../component/ExerciseCell/index';
import ReactQuill from 'react-quill'; // ES6
import { connect } from 'react-redux';

import './index.less';
import 'react-quill/dist/quill.snow.css'; // ES6


class Editors extends React.Component {
    state = { text: '' }
    handleChange = (value) => {
        this.setState({ text: value });
    }
    handleClick = () => {
        fetch('http://127.0.0.1:7001/article', {
            method: 'POST',
            body: JSON.stringify({ 'text': this.state.text }),
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((res) => {

            console.log(res.body)

        })
    }
    componentDidMount() {
        this.props.dispatch({ type: 'change', payload: this.props.location.pathname })
    }


    render() {
        return (
            <Paper>
                <div>
                    <div style={{ marginBottom: 22 }}>
                        <Input placeholder="文章标题" />
                    </div>
                    <ReactQuill
                        placeholder='今天写点什么...'
                        style={{ minHeight: 300 }}
                        value={this.state.text}
                        onChange={this.handleChange}
                    >
                    </ReactQuill>
                    <Button type="primary" style={{ marginTop: 22 }} onClick={this.handleClick}>提交</Button>
                </div>
            </Paper>
        )
    }
}
const mapState = (state) => {
    return {
        t: state.editor.d
    }
}


export const Editor = connect()(Editors);



