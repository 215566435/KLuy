import React from 'react';
import { Input, Button, message } from 'antd';
import { Paper } from '../../component/paper/index';
import ReactQuill from 'react-quill'; // ES6
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './index.less';
import 'react-quill/dist/quill.snow.css'; // ES6


class Editors extends React.Component {
    state = { title: '', content: '' }
    handleChange = (value) => {
        this.setState({ content: value });
    }
    handleInputChange = (p) => {
        this.setState({ title: p.target.value });
    }
    checkForm = (fn) => {
        const { title, content } = this.state;
        if (title === '') {
            message.error("文章标题不能为空")
            return;
        }
        if (content === '') {
            message.error("文章内容不能为空");
            return;
        }
        fn();
    }

    checkAuth = () => {
        this.props.dispatch({ type: 'checkAuth' });

    }


    handleClick = () => {
        this.checkForm(() => {
            this.props.dispatch({
                type: 'postArticle',
                payload: {
                    content: this.state.content,
                    title: this.state.title,
                    articleID: Date.now()
                }
            })
        })
    }
    componentDidMount() {
        this.checkAuth();
        this.props.dispatch({ type: 'change', payload: this.props.location.pathname })
    }


    render() {
        const { redirectPath, isRedirect } = this.props;
        if (isRedirect) {
            return <Redirect to={redirectPath} />
        }
        return (
            <Paper>
                <div>
                    <div style={{ marginBottom: 22 }}>
                        <Input onChange={this.handleInputChange} placeholder="文章标题" />
                    </div>
                    <ReactQuill
                        placeholder='今天写点什么...'
                        style={{ minHeight: 300 }}
                        value={this.state.content}
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
        isRedirect: state.editor.isRedirect,
        redirectPath: state.editor.redirectPath
    }
}

export const Editor = connect(mapState)(Editors);



