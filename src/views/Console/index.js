import React from 'react';
import { connect } from 'react-redux';
import { ArticleBlock, ArticleArea } from '../../component/ArticleBlock/index';
import { Button, Radio } from 'antd';
import './index.less';

class Consoles extends React.Component {
    componentWillMount() {
        this.props.dispatch({ type: 'change', payload: this.props.location.pathname })
    }

    renderArticleList = () => {
        const { articleList } = this.props
        if (articleList) {
            console.log(articleList);
            return articleList.map((item) => {
                return (
                    <div key={item.id}>
                        {item.title}
                    </div>
                )
            })
        }
    }
    onPageChange = () => {

    }
    handleEdit = () => {

    }
    handleDelete = (articleID) => {
        this.props.dispatch({
            type: "deleteArticle",
            payload: articleID
        })
    }

    render() {

        const ArticleList = ({ title, articleID, time, views, commentCount }) => {
            return (
                <div className='article-list'>
                    <div>
                        <h3>{title}</h3>
                        <div className='time'>{time}</div>
                    </div>
                    <div>文章ID:{articleID}</div>
                    <div>阅读：{views}</div>
                    <div>评论：{commentCount}</div>
                    <Button.Group size={'default'}>
                        <Button type="default" onClick={this.handleEdit}>修改</Button>
                        <Button type="danger" onClick={() => this.handleDelete(articleID)}>删除</Button>
                    </Button.Group>
                </div>
            )
        }
        return (
            <div>
                <ArticleArea
                    {...this.props}
                    onChange={this.onPageChange}
                    ListComponent={ArticleList}
                />
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        ...state.intro
    }
}

export default connect(mapState)(Consoles)
