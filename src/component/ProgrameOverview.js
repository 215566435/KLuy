import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramOverview.less'

export class ProgrameOverview extends React.Component {

    render() {
        const { style, title, subTitle, description } = this.props;
        return (
            <div className='ProgrameOverview' style={{ ...style }}>
                <Link to='/about'>
                    <div className="img">
                        <img alt='123' src='https://www.bodybuilding.com/images/2017/november/shortcut-to-shred-overview-header-box1-830x467.jpg' />
                    </div>
                </Link>
                <div className='text-content'>
                    <h2>{title}</h2>
                    <h4>{subTitle}</h4>
                    <br />
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
