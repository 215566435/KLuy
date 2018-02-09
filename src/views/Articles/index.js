import React from 'react';
import Showdown from 'showdown';
import { Paper } from '../../component/paper/index';

import './index.less'
import { CommentCard } from '../../component/CommentCard/index';
import { CommentForm } from '../../component/CommentForm/index';


var fileContent = require("./plan.md");



export const Articles = () => {

    const st = fileContent
    const converter = new Showdown.Converter();
    const html = converter.makeHtml(st);
    return (
        <div>
            <Paper>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </Paper>
            <Paper>
                <div>
                    <CommentForm />
                    <div style={{ marginTop: 100, borderTop: '1px solid #d9d9d9' }}>
                        <CommentCard />
                    </div>
                </div>
            </Paper>
        </div>
    )
}
