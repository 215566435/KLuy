import React from 'react';
import { connect } from 'react-redux';


class Consoles extends React.Component {
    componentWillMount() {
        this.props.dispatch({ type: 'change', payload: this.props.location.pathname })
    }

    renderArticleList = () => {
        const { articleList } = this.props
        if (articleList) {
            console.log(articleList);
            return articleList.map((item) => {
                return (
                    <div key={item.id}>
                        {item.title}
                    </div>
                )
            })
        }
    }

    render() {
        console.log(this.props)

        return (
            <div>

            </div>
        )
    }
}

const mapState = (state) => {
    return {
        ...state.intro
    }
}

export default connect(mapState)(Consoles)
