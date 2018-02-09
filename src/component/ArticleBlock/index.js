
import React from 'react';
import { Icon } from 'antd';

import './index.less'
import { TimeCuttingHelper } from '../../utils/utils';
import { Link } from 'react-router-dom';

const IconBlock = ({ type, Content }) => {
    return (
        <div style={{ color: '#8c8c8c' }}>
            <Icon style={{ fontSize: 18, marginTop: 10 }} type={type} />
            {Content}
        </div>
    )
}

export const ArticleBlock = ({ articleID, content, title, time }) => {

    const newContent = content.length > 140 ? content.substr(0, 140) + '<div>...</div>' : content;

    return (
        <div className='article-block'>
            <div style={{ padding: 22 }}>
                <div className='title-block'>
                    <Link to={'/Articles/' + articleID}><h2 className='article-title'>{title}</h2></Link>
                    <div className='time'>{time}</div>
                </div>
                <div className="article-block-content" dangerouslySetInnerHTML={{ __html: newContent }}></div>
                <div className='icon-block' style={{ display: 'flex' }} >
                    <IconBlock type="eye-o" Content='823' />
                    <IconBlock type="message" Content='12' />
                </div>
            </div>
        </div>
    )
}

export const ArticleArea = ({ articleList }) => {
    if (articleList) {
        const newList = articleList.map((item) => {
            const { id, content, title, created_at, articleID } = item;
            return (
                <ArticleBlock
                    key={id}
                    articleID={articleID}
                    content={content}
                    title={title}
                    time={TimeCuttingHelper(created_at)}
                />
            )
        })
        return (
            <div className='article-area'>
                {newList}
            </div>
        )
    }
    return null;
}