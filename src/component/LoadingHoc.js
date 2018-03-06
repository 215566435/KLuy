import React from 'react';
import { Spin } from 'antd';

export const LoadingArray = ({ array, children }) => {

    if (array === void 666 || array.length < 1) {
        return (
            <div style={{ display: "flex", justifyContent: "center" }} >
                <Spin size="large" />
            </div>
        )
    }

    return array.map((item, index) => {
        return children(item, index)
    })
}
