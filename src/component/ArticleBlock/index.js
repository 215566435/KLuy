
import React from 'react';
import { Icon, Pagination } from 'antd';

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

export const ArticleBlock = ({ articleID, content, title, time, commentCount, views }) => {

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
                    <IconBlock type="eye-o" Content={views} />
                    <IconBlock type="message" Content={commentCount} />
                </div>
            </div>
        </div>
    )
}

export const ArticleArea = ({ articleList, count, onChange }) => {
    if (articleList) {
        const newList = articleList.map((item) => {
            const { id, content, title, created_at, articleID, commentCount, views } = item;
            return (
                <ArticleBlock
                    key={id}
                    articleID={articleID}
                    content={content}
                    title={title}
                    time={TimeCuttingHelper(created_at)}
                    commentCount={commentCount}
                    views={views}
                />
            )
        })

        function itemRender(current, type, originalElement) {
            if (type === 'prev') {
                return <a>前一页</a>;
            } else if (type === 'next') {
                return <a>后一页</a>;
            }
            return originalElement;
        }


        return (
            <div className='article-area'>
                {newList}
                <Pagination total={count} pageSize={5} itemRender={itemRender} onChange={onChange} />
            </div>
        )
    }
    return null;
}