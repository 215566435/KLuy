
import React from 'react';
import { Link } from 'react-router-dom';
import './index.less'
import { TimeCuttingHelper } from '../../utils/utils';


export class RecentArea extends React.Component {


    shouldComponentUpdate(nextProps) {
        if (this.updateComsumer > 0) {
            console.log(this.updateComsumer)
            this.updateComsumer = this.updateComsumer - 1;
            return true
        }
        return false;
    }
    componentDidMount() {
        this.updateComsumer = 1;
    }

    links = () => {
        const { articleList } = this.props;
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
    render() {

        return (
            <div className='recent-area'>
                <div className='recent-block'>
                    <div className='title'>
                        最新动态
                    </div>
                    {this.links()}
                </div>
            </div>
        )
    }

} 