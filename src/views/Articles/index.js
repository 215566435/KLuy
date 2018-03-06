import React from 'react';
import { connect } from 'react-redux';
import { Paper } from '../../component/paper/index';

import './index.less'
import { CommentArea } from '../../component/CommentCard/index';
import { CommentForm } from '../../component/CommentForm/index';





class Article extends React.Component {
    getArticleID() {
        return this.props.match.params.id;
    }


    componentDidMount() {
        window.scrollTo(0, 0)
        const id = this.getArticleID();
        this.props.dispatch({
            type: 'FetchOneArticle',
            payload: id
        })
    }
    handleSubmit = () => {
        const text = this.FormComponent.getText();

        this.props.dispatch({
            type: 'postComment',
            payload: { ...text, articleID: this.getArticleID() }
        })

    }
    commentLoad = () => {
        console.log('loadID:', this.getArticleID())
        this.props.dispatch({
            type: 'LoadComment',
            payload: this.getArticleID()
        })
    }
    componentWillUnmount = () => {
        this.props.dispatch({
            type: 'ClearComment'
        })
    }

    render() {
        return (
            <div>
                <Paper>
                    <div>
                        <h1>{this.props.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
                    </div>
                </Paper>
                <Paper>
                    <div>
                        <CommentForm onClick={this.handleSubmit} ref={node => this.FormComponent = node} />
                        <CommentArea Load={this.commentLoad} CommentList={this.props.CommentList} />
                    </div>
                </Paper>
            </div>
        )
    }

}

const mapState = (state) => {
    return {
        ...state.articles
    }
}

export const Articles = connect(mapState)(Article);
