import Rluy from 'rluy';
import './index.css';
import registerServiceWorker from './registerServiceWorker';



Rluy.init();
// Rluy.router(require('./router'));
Rluy.JsxElement = require('./router').default();
Rluy.run(document.getElementById('root'));

registerServiceWorker();
