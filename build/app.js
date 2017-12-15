"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
const router = require("koa-router");
let app = new koa();
let route = new router();
// function things(i: number, g: number): number {
//     console.log('好玩')
//     return i
// }
route.use('/', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    console.log('跑了中间件');
    yield next();
    console.log('回来了');
}));
route.get('/', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    // things(1, 2);
    console.log('跑了');
    ctx.response.body = '<h1>asdasd</h1>';
}));
app
    .use(route.routes())
    .use(route.allowedMethods());
app.listen('3000', () => {
    console.log("Server running on 127.0.0.1 with 3000 restart!");
});
