import React from 'react';
import Showdown from 'showdown';

import { DetailLayout } from '../../component/Layout/index';
import { Paper } from '../../component/paper/index';
var fileContent = require("./plan.md");

export const TrainingOverview = () => {

    const st = fileContent
    const converter = new Showdown.Converter(),
        html = converter.makeHtml(st);
    return (
        <DetailLayout
            Side={
                <ol>
                    <li><a href="#405">点击跳转</a></li>
                </ol>
            }
            Contents={
                <Paper>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: html }} ></div>
                    </div>
                </Paper>
            }
        />
    )
}
