"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function scan(controllerPath) {
    const filenames = fs.readdirSync(controllerPath, { encoding: 'utf8' });
    console.log(filenames);
    filenames.forEach((value) => {
        const model = require(controllerPath + '/' + filenames);
        for (let key in model.Router) {
            const handler = model.Router[key];
            console.log({ key, handler });
        }
    });
}
exports.scan = scan;
