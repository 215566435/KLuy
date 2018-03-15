import React from 'react'
import './Grid.css'

const addMargin = ele => {
    return React.cloneElement(ele, {
        style: {
            marginRight: 50,
            flex: '1 1 0'
        }
    })
}

export const Grid = ({ dataSet }) => {
    return (
        <div className="grid-container">
            <div className="grid-parent">
                {addMargin(dataSet[0])}
                {dataSet[1]}
            </div>
            <div className="grid-parent">
                {addMargin(dataSet[2])}
                {dataSet[3]}
            </div>
        </div>
    )
}
