
import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.less'


export const RecentArea = ({ path }) => {
    return (
        <div className='recent-area'>
            <div className='recent-block'>
                <div  className='title'>
                    最新动态
                </div>
                <Link to={path}><div className='rencent-article-child'>如何使用React</div></Link>
                <Link to={path}><div className='rencent-article-child'>burn框架实践总结</div></Link>
            </div>
        </div>
    )
}
