import React from 'react'
import { connect } from 'react-redux'
import { LoadingArray } from '../../component/LoadingHoc'
import moment from 'moment'

import { Menu, Dropdown, Icon } from 'antd'

const DropDown = ({ onDelete }) => {
    const menu = (
        <Menu>
            <Menu.Item>
                <div>修改</div>
            </Menu.Item>
            <Menu.Item>
                <div onClick={onDelete}>删除</div>
            </Menu.Item>
        </Menu>
    )

    return (
        <Dropdown overlay={menu}>
            <Icon type="down" />
        </Dropdown>
    )
}

const HistoryBlock = ({ time, item = {}, onDelete }) => {
    return (
        <div className="history-block">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 15 }}>
                    {moment(parseInt(item.date, 10)).format(
                        'YYYY-MM-DD HH:mm:ss'
                    )}
                </div>
                <DropDown
                    onDelete={() => {
                        onDelete(item)
                    }}
                />
            </div>
            <div style={{ borderBottom: '1px solid #1890FF' }} />
            {item.data.map((set, index) => (
                <div key={index} style={{ textAlign: 'left' }}>
                    <span style={{ color: '#bfbfbf' }}>{`第${index +
                        1}组：`}</span>
                    <span>{set.reps}次/</span>
                    <span>{set.weight}kg</span>
                </div>
            ))}
        </div>
    )
}

class LogHistory extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'fetchHistory',
            payload: this.props.currentID
        })
    }

    onDelete = item => {
        this.props.dispatch({
            type: 'deleteHistory',
            payload: item
        })
    }

    render() {
        return (
            <div>
                <LoadingArray array={this.props.history}>
                    {item => (
                        <HistoryBlock
                            key={item.id}
                            item={item}
                            onDelete={this.onDelete}
                        />
                    )}
                </LoadingArray>
            </div>
        )
    }
}

const mapState = state => {
    return {
        ...state.exercise
    }
}

export default connect(mapState)(LogHistory)
