import React from 'react'
import { Layout, Carousel } from 'antd'

import './index.less'
import { connect } from 'react-redux'

const { Content } = Layout

const Grid = () => {
    return (
        <div className="container">
            <div className="parent">
                <div className="item">
                    <h1>什么是训记?</h1>
                    <p>
                        训记是一款干净整洁的线上训练笔记，用于代替你日常生活中的纸质笔记本。开发这款应用的初衷是我（方正）对现在线上的应用的失望，他们过于复杂而且自定义程度太低，而我只需要一款能够帮助我分析每天训练内容的应用。
                        因此，我将这个应用设计得极为简洁。如果你和我一样，只是需要一款训练记录应用，那你应该会喜欢训记。
                    </p>
                </div>
                <div className="item">
                    <h1>什么人会喜欢训记?</h1>
                    <p>
                        喜欢力量训练的人都喜欢使用训练笔记去追踪自己的训练内容，以便能够在未来中突破自己。
                        那么，训记的顾客就是他们。
                    </p>
                </div>
            </div>
            <div className="parent">
                <div className="item">
                    <h1>简约而强大</h1>
                    <p>
                        保持简约设计的同时，我想让训记功能尽量强大。尽量做到纸上的内容全部都能在线上体现，配合自动分析图表系统，帮助你分析你的训练。
                    </p>
                </div>
                <div className="item">
                    <h1>训记的未来</h1>
                    <p>
                        训练是持之以恒的，我希望训记能够帮助在持续训练的每一个人
                    </p>
                </div>
            </div>
        </div>
    )
}

class Intro extends React.Component {
    componentWillMount() {
        this.props.dispatch({
            type: 'change',
            payload: this.props.location.pathname
        })
    }
    componentDidMount() {
        console.log(this.props)
        this.props.dispatch({ type: 'fetchArticle', payload: 0 })
    }
    onPageChange = (page, pageSize) => {
        window.scrollTo(0, 0)
        this.props.dispatch({
            type: 'fetchArticle',
            payload: page - 1
        })
    }

    render() {
        return (
            <Layout>
                <Content>
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid />
                    </div>
                </Content>
            </Layout>
        )
    }
}

const mapState = state => {
    return {
        ...state.intro
    }
}

export const Introduction = connect(mapState)(Intro)
