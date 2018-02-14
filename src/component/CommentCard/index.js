import React from 'react';
import './index.less';
import { Spin } from 'antd';
import { TimeCuttingHelper } from '../../utils/utils';
import Showdown from 'showdown';


export const CommentCard = ({ author, content, time }) => {
    return (
        <div className='comment-card'>
            <div className='title'>{author}</div>
            <div className='content' dangerouslySetInnerHTML={{ __html: content }}></div>
            <div className='time'>{TimeCuttingHelper(time)}</div>
        </div>
    )
}

export class CommentArea extends React.Component {
    state = {
        load: false
    }

    handleScroll = (e) => {
        if (this.comment.offsetTop - 100 < window.scrollY + window.innerHeight) {
            this.load();
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
    load = () => {
        this.setState({
            load: true
        })
        this.props.Load && this.props.Load();
    }
    componentWillReceiveProps() {
        this.setState({
            load: false
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentDidMount() {
        this.convertor = new Showdown.Converter()
        window.addEventListener('scroll', this.handleScroll)
    }
    renderCommentList = () => {
        const { CommentList } = this.props;
        if (CommentList) {
            if (CommentList.length === 0) {
                return (
                    <div style={{ color: '#8c8c8c', fontSize: 16, textAlign: 'center', margin: 22 }}>
                        暂无评论，快来发表你的意见吧！
                    </div>
                )
            }

            return CommentList.map((item) => {

                return <CommentCard
                    key={item.created_at}
                    author={item.author}
                    content={this.convertor.makeHtml(item.content)}
                    time={item.created_at}
                />
            })
        }
    }

    render() {
        return (
            <div style={{ marginTop: 100, borderTop: '1px solid #d9d9d9' }} ref={node => this.comment = node}>
                {this.state.load ? <Spin /> : null}
                {this.renderCommentList()}
            </div>
        )
    }
}