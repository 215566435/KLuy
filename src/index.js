import React from 'react';
import Rluy from 'rluy';
import './index.css';
import { TrainNote } from './views/index';
import registerServiceWorker from './registerServiceWorker';



Rluy.init();
Rluy.run(<TrainNote />, document.getElementById('root'));

registerServiceWorker();
