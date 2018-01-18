import React from 'react';
import './Grid.css';

const addMargin = (ele) => {
    return React.cloneElement(ele, {
        style: {
            marginRight: 50,
            flex: '1 1 0'
        }
    })
}

export const Grid = (props) => {
    const { dataSet } = props;
    return (
        <div className="container" >
            <div className="parent">
                {addMargin(dataSet[0])}
                {dataSet[1]}
            </div>
            <div className="parent">
                {addMargin(dataSet[2])}
                {dataSet[3]}
            </div>
        </div>
    )
}