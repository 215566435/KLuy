import Rluy from 'rluy';
import './index.css';
import registerServiceWorker from './registerServiceWorker';



Rluy.init();
Rluy.router(require('./router'));
Rluy.model(require('./model/editor'))
Rluy.model(require('./model/introduction'))
Rluy.run(document.getElementById('root'));

registerServiceWorker();
