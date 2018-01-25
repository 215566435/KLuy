import React from 'react';
import './index.less';
export class Paper extends React.Component {

    render() {

        return (
            <div className='Paper'>
                {React.Children.only(this.props.children)}
            </div>
        )
    }
}
