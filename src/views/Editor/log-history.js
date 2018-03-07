import React from 'react'
import { connect } from 'react-redux'
import { LoadingArray } from '../../component/LoadingHoc'

const HistoryBlock = ({ time, item = {} }) => {
    return (
        <div className="history-block">
            <div>{item.time}</div>
            <div style={{ borderBottom: '1px solid #1890FF' }} />
            {item.sets.map((set, index) => <div key={index}>{set}</div>)}
        </div>
    )
}

class LogHistory extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'fetchHistory'
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <LoadingArray array={this.props.history}>
                    {item => <HistoryBlock key={item.id} item={item} />}
                </LoadingArray>
            </div>
        )
    }
}

const mapState = state => {
    console.log()
    return {
        ...state.exercise
    }
}

export default connect(mapState)(LogHistory)
