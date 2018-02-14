import React from 'react';
import { connect } from 'react-redux';
import { ArticleBlock, ArticleArea } from '../../component/ArticleBlock/index';
import { Button, Radio } from 'antd';


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

    render() {

        const ArticleList = ({ title, articleID, time, views, commentCount }) => {
            // console.log(props)
            return <div>
                {title}{`${time}->${articleID}阅读：${views}评论：${commentCount}`}
                <Button.Group size={'default'}>
                    <Button type="default">
                        Backward
                     </Button>
                    <Button type="danger">
                        Forward
                    </Button>
                </Button.Group>
            </div>
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
