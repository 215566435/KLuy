
import React from 'react';
import { Icon } from 'antd';

import './index.less'

const IconBlock = ({ type, Content }) => {
    return (
        <div style={{ color: '#8c8c8c' }}>
            <Icon style={{ fontSize: 18, marginTop: 10 }} type={type} />
            {Content}
        </div>
    )
}

export const ArticleBlock = ({ content, title, time }) => {
    return (
        <div className='article-block'>
            <div style={{ padding: 22 }}>
                <div className='title-block'>
                    <h2 >{title}</h2>
                    <div className='time'>{time}</div>
                </div>
                <div style={{ color: '#8c8c8c', fontSize: '15px' }}>{content}</div>
                <div className='icon-block' style={{ display: 'flex' }} >
                    <IconBlock type="eye-o" Content='823' />
                    <IconBlock type="message" Content='12' />
                </div>
            </div>
        </div>
    )
}