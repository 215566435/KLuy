
import React from 'react';
import { Layout, Menu } from 'antd';

import './index.less';
import { ArticleBlock } from '../../component/ArticleBlock';
import { RecentArea } from '../../component/RecentArea';
import { connect } from 'react-redux';
const { Header, Footer, Content } = Layout;


class Intro extends React.Component {
    componentWillMount() {
        this.props.dispatch({ type: 'change', payload: this.props.location.pathname })
    }
    componentDidMount() {
        this.props.dispatch({ type: 'fetchArticle', payload: 0 })
    }
    renderArticleList = () => {
        if (this.props.articleList) {
            return this.props.articleList.map((item) => {
                return (
                    <ArticleBlock key={item.id} content={item.content} title={item.title} time={item.updated_at} />
                )
            })
        }
    }

    render() {
        return (
            <Layout>
                <Content>
                    <div className='indexPage' style={{ minHeight: '70vh' }}>
                        <div className='article-area'>
                            {this.renderArticleList()}
                        </div>
                        <RecentArea path='/Articles' />
                    </div>
                </Content>
            </Layout>
        )
    }
}

const mapState = (state) => {
    return {
        articleList: state.intro.articleList
    }
}

export const Introduction = connect(mapState)(Intro);