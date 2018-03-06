import React from 'react';
import { connect } from 'react-redux';



const HistoryBlock = ({ time, item = {} }) => {
    return (
        <div className='history-block'>
            <div>{item.time}</div>
            <div style={{ borderBottom: '1px solid #1890FF' }} />
            {item.sets.map((set, index) =>
                <div key={index}>{set}</div>
            )}
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
        return (
            <div>
                {this.props.history.map((item) => {
                    return <HistoryBlock
                        key={item.id}
                        item={item}
                    />
                })}
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

