import { KLuy, ControllerBase } from './KLuy/app';


const kluy = new KLuy();


export class Fuck extends ControllerBase {
    constructor() {
        super()
    }

    @kluy.route('/')
    someFunc() {
        console.log('竟然跑起来了')
    }

}
// const f = new Fuck();
// f.someFunc();

kluy.run();
