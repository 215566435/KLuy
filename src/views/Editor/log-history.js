import React from 'react'
import { connect } from 'react-redux'
import { LoadingArray } from '../../component/LoadingHoc'
import moment from 'moment'

const HistoryBlock = ({ time, item = {} }) => {
    return (
        <div className="history-block">
            <div>{moment(parseInt(item.date)).format('YYYY-MM-DD HH:mm:ss')}</div>
            <div style={{ borderBottom: '1px solid #1890FF' }} />
            {item.data.map((set, index) => (
                <div key={index}>
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
    return {
        ...state.exercise
    }
}

export default connect(mapState)(LogHistory)
