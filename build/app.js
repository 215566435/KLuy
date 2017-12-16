"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./KLuy/app");
const kluy = new app_1.KLuy();
class Fuck {
    constructor() {
    }
    someFunc() {
        console.log('竟然跑起来了');
    }
}
__decorate([
    kluy.route('/')
], Fuck.prototype, "someFunc", null);
exports.Fuck = Fuck;
// const f = new Fuck();
// f.someFunc();
kluy.run();
