import * as koa from 'koa';
// import { resolve } from 'path';

// import { scan } from './middleware/scanController';

// const controllerPath = './controller';

export class ControllerBase {
    constructor() {

    }

}

interface ServerConfig {
    address: string,
    port: number,
}

let defaultServerConfig = <ServerConfig>{};
defaultServerConfig = {
    address: '127.0.0.1',
    port: 3000
}

export class KLuy {
    address: string;
    port: number;

    constructor(ServerConfig: ServerConfig = defaultServerConfig) {
        this.address = ServerConfig.address;
        this.port = ServerConfig.port;
    }

    route(uri: string) {
        return function (target: typeof ControllerBase, key: string, descriptor: PropertyDescriptor) {

            let instance = new target();
            console.log(target, key, descriptor);
            // let orginalMethod = descriptor.value;
            descriptor.value = function () {
                instance
            }
            return descriptor
        }
    }

    run() {
        let app: koa = new koa();
        app.use((ctx) => {
            console.log(ctx.request.method.toLowerCase(), ctx.request.path)
        })
        app.listen(this.port, this.address, () => {
            console.log("Server running on 127.0.0.1 with 3000 restart!")
        });
    }
}