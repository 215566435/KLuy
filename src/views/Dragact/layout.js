import React from 'react';
import { Dragact } from 'dragact';
const cart = require('./img/cart.png');
const chat = require('./img/chat.png');
const money = require('./img/money.png');
const people = require('./img/people.png');
const table = require('./img/table.png');
const namelist = require('./img/namelist.png');
const datause = require('./img/datause.png');

const fakeData = [
    { GridX: 0, GridY: 0, w: 4, h: 2, key: '0', page: cart },
    { GridX: 4, GridY: 0, w: 4, h: 2, key: '1', page: chat },
    { GridX: 8, GridY: 0, w: 4, h: 2, key: '2', page: people },
    { GridX: 12, GridY: 0, w: 4, h: 2, key: '4', page: money },
    { GridX: 0, GridY: 4, w: 12, h: 6, key: '5', page: table },
    { GridX: 0, GridY: 4, w: 6, h: 5, key: '6', page: namelist },
    { GridX: 0, GridY: 4, w: 6, h: 7, key: '7', page: datause },
]

const getblockStyle = (isDragging) => {
    return {
        background: "white"
    }
};

export const DragactLayout = () => {

    return (
        <Dragact
            layout={fakeData}//必填项
            col={16}//必填项
            width={1000}//必填项
            rowHeight={60}//必填项
            margin={[10, 10]}//必填项
            className='plant-layout'//必填项
            placeholder={true}
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
                        <div style={{ width: '100%', height: '100%' }}>
                            <img src={item.page} style={{ width: '90%' }} draggable={false} alt='dd' />
                        </div>
                        <span
                            {...provided.resizeHandle}
                            style={{
                                position: 'absolute',
                                width: 10, height: 10, right: 2, bottom: 2, cursor: 'se-resize',
                                borderRight: '2px solid rgba(15,15,15,0.2)',
                                borderBottom: '2px solid rgba(15,15,15,0.2)'
                            }}
                        />
                    </div>
                )
            }}
        </Dragact>
    )
}