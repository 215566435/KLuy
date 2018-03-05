import React from 'react';
import { connect } from 'react-redux';



const HistoryBlock = ({ time, history = [] }) => {
    return (
        <div className='history-block'>
            <div>{time}</div>
            <div style={{ borderBottom: '1px solid #1890FF' }} />
            {history.map((item) => {
                return <div></div>
            })}
        </div>
    )
}

class LogHistory extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'fetchHistory'
        });
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <HistoryBlock />
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        ...state.excersise
    }
}

export default connect(mapState)(LogHistory);

