import * as fs from 'fs';

export function scan(controllerPath: string) {
    const filenames: string[] = fs.readdirSync(controllerPath, { encoding: 'utf8' })
    console.log(filenames);
    filenames.forEach((value: string) => {
        const model = require(controllerPath + '/' + filenames);
        for (let key in model.Router) {
            const handler = model.Router[key];
            console.log({ key, handler });
        }

    })

}