
import React from 'react';
import { Link } from 'react-router-dom';
import './index.less'
import { TimeCuttingHelper } from '../../utils/utils';


export const RecentArea = ({ articleList }) => {
    const links = () => {
        if (articleList) {
            return articleList.map((item) => {
                const { id, articleID, title, created_at } = item;
                return (
                    <Link
                        key={id}
                        to={'/Articles/' + articleID}
                    >
                        <div className='rencent-article-child'>
                            <div>{title}</div>
                            <div>{TimeCuttingHelper(created_at)}</div>
                        </div>
                    </Link>
                )
            })
        }
        return null;
    }

    return (
        <div className='recent-area'>
            <div className='recent-block'>
                <div className='title'>
                    最新动态
                </div>
                {links()}
            </div>
        </div>
    )
}
