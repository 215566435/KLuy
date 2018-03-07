import Rluy from 'rluy'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

Rluy.init()
Rluy.router(require('./router'))
Rluy.model(require('./model/editor'))
Rluy.model(require('./model/introduction'))
Rluy.model(require('./model/articles'))
Rluy.model(require('./model/login'))
Rluy.model(require('./model/console'))
Rluy.model(require('./model/exercise'))

Rluy.run(document.getElementById('root'))

registerServiceWorker()
