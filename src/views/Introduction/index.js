
import React from 'react';
import { Layout } from 'antd';

import './index.less';
import { ArticleArea } from '../../component/ArticleBlock';
import { RecentArea } from '../../component/RecentArea';
import { connect } from 'react-redux';
const { Content } = Layout;


class Intro extends React.Component {
    componentWillMount() {
        this.props.dispatch({ type: 'change', payload: this.props.location.pathname })
    }
    componentDidMount() {
        this.props.dispatch({ type: 'fetchArticle', payload: 0 })
    }


    render() {
        return (
            <Layout>
                <Content>
                    <div className='indexPage' style={{ minHeight: '70vh' }}>
                        <ArticleArea articleList={this.props.articleList} />
                        <RecentArea articleList={this.props.articleList} />
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