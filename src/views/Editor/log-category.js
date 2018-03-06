import React from 'react';
import { connect } from 'react-redux';
import { Clickble, Curd } from './log-excersise';


class Category extends React.Component {

    render() {
        return (
            <div>
                <Clickble>
                    <div>chest</div>
                    <div><Curd /></div>
                </Clickble>
            </div>
        )
    }
}

export default connect()(Category);