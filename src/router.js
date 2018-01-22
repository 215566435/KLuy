import './index.css';
import { TrainNote } from './views/index';
import React from 'react';

import {
    BrowserRouter as Router
} from 'react-router-dom'

import {
    Route,
    Link
} from 'react-router-dom'

export default () => {
    return (
        <div>
            <Router>
                <Route exact path="/" component={TrainNote} />
            </Router>
        </div>
    )
}