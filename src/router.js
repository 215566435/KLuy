import './index.css';
import React from 'react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import { Introduction } from './views/Introduction/';
import { Plan } from './views/Plan';

export default () => {
    return (
        <div className='rootWrapper'>
            <Router>
                <div className="router-wrapper">
                    <Route exact path="/" component={Introduction} />
                    <Route path="/plan" component={Plan} />
                </div>
            </Router>
        </div>
    )
}