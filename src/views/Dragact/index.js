import React from 'react';
import { connect } from 'react-redux';

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

class DragactDemo extends React.Component {


    render() {


        return (
            <Dragact
                layout={fakeData}//必填项
                col={16}//必填项
                width={800}//必填项
                rowHeight={40}//必填项
                margin={[5, 5]}//必填项
                className='plant-layout'//必填项
                style={{ background: '#333' }}//非必填项
                placeholder={true}//非必填项
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
                            {provided.isDragging ? '正在抓取' : '停放'}
                        </div>
                    )
                }}
            </Dragact>
        )
    }
}

const mapState = (state) => {
    return {
        ...state.intro
    }
}

export default connect(mapState)(DragactDemo)
