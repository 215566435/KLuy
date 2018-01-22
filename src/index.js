import React from 'react';
import Rluy from 'rluy';
import './index.css';
import { TrainNote } from './views/index';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router
} from 'react-router-dom'

import {
    Route,
    Link
} from 'react-router-dom'



Rluy.init();
Rluy.router(require('./router'));
Rluy.run(document.getElementById('root'));

registerServiceWorker();
