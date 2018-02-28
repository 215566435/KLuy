```js
//index.js
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Dragact } from 'dragact';

const fakeData = [
    { GridX: 0, GridY: 0, w: 4, h: 2, key: '0' },
    { GridX: 0, GridY: 0, w: 4, h: 2, key: '1' },
    { GridX: 0, GridY: 0, w: 4, h: 2, key: '2' }
]

const getblockStyle = (isDragging) => {
    return {
        background: isDragging ? '#1890ff' : 'white',
    }
};

ReactDOM.render(
    <Dragact
            layout={fakeData}//require
            col={16}//require
            width={400}//require
            rowHeight={40}//require
            margin={[5, 5]}//require
            className='plant-layout'//require
            style={{ background: '#d9f7be' }}//optional
            placeholder={true}//optional
        >
            {(item, provided) => {
                return (
                    <div
                        {...provided.props}
                        {...provided.dragHandle}
                        style={{
                            ...provided.props.style,
                            ...getblockStyle(provided.isDragging)
                        }}
                    >
                        {provided.isDragging ? 'dragging' : 'stop'}
                    </div>
                )
            }}
        </Dragact>,
    document.getElementById('root')
);
```
