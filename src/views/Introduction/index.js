
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
        console.log(this.props);
        this.props.dispatch({ type: 'fetchArticle', payload: 0 })
    }
    onPageChange = (page, pageSize) => {
        window.scrollTo(0, 0);
        this.props.dispatch({
            type: 'fetchArticle',
            payload: page - 1
        })
    }

    render() {
        return (
            <Layout>
                <Content>
                    <div className='indexPage' style={{ minHeight: '70vh' }}>
                        <ArticleArea
                            {...this.props}
                            onChange={this.onPageChange}
                        />
                        <RecentArea articleList={this.props.articleList} />
                    </div>
                </Content>
            </Layout>
        )
    }
}

const mapState = (state) => {
    return {
        ...state.intro
    }
}

export const Introduction = connect(mapState)(Intro);