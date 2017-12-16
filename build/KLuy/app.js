"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
// import { resolve } from 'path';
// import { scan } from './middleware/scanController';
// const controllerPath = './controller';
class ControllerBase {
    constructor() {
    }
}
let defaultServerConfig = {};
defaultServerConfig = {
    address: '127.0.0.1',
    port: 3000
};
class KLuy {
    constructor(ServerConfig = defaultServerConfig) {
        this.address = ServerConfig.address;
        this.port = ServerConfig.port;
    }
    route(uri) {
        return function (target, key, descriptor) {
            let instance = new target();
            console.log(target, key, descriptor);
            // let orginalMethod = descriptor.value;
            descriptor.value = function () {
            };
            return descriptor;
        };
    }
    run() {
        let app = new koa();
        app.use((ctx) => {
            console.log(ctx.request.method.toLowerCase(), ctx.request.path);
        });
        app.listen(this.port, this.address, () => {
            console.log("Server running on 127.0.0.1 with 3000 restart!");
        });
    }
}
exports.KLuy = KLuy;
