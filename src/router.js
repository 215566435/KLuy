import './index.css';
import React from 'react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import { TrainNote } from './views/index';
import { Plan } from './views/plan';

export default () => {
    return (
        <div className='rootWrapper'>
            <Router>
                <div className="router-wrapper">
                    <Route exact path="/" component={TrainNote} />
                    <Route path="/about" component={Plan} />
                </div>
            </Router>
        </div>
    )
}