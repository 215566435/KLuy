import React from 'react';
import Showdown from 'showdown';
import { connect } from 'react-redux';
import { Paper } from '../../component/paper/index';

import './index.less'
import { CommentCard } from '../../component/CommentCard/index';
import { CommentForm } from '../../component/CommentForm/index';


var fileContent = require("./plan.md");



class Article extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        this.props.dispatch({
            type: 'FetchOneArticle',
            payload: id
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
                        <CommentForm />
                        <div style={{ marginTop: 100, borderTop: '1px solid #d9d9d9' }}>
                            <CommentCard />
                        </div>
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
