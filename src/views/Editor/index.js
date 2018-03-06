import React from 'react';
import { Button, Menu } from 'antd';
import { Paper } from '../../component/paper/index';
import ReactQuill from 'react-quill'; // ES6
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


import './index.less';
import 'react-quill/dist/quill.snow.css'; // ES6
import { Exercise, Clickble, Curd } from './log-excersise';


const url = {
    '/workout/exercise': 'exercise',
    '/workout/category': 'category',
    '/workout/tool': 'tool',
    '/workout/about': 'about',
}

const LogMenu = ({ onSelect, routerState }) => {
    const current = url[routerState];

    return (
        <div className='log-menu-warpper' style={{ maxHeight: 192 }}>
            <Menu
                defaultSelectedKeys={['about']}
                selectedKeys={[current]}
                onSelect={onSelect}
            >
                <Menu.Item key='exercise'><Link to='/workout/exercise'>动作</Link></Menu.Item>
                <Menu.Item key='category'><Link to='/workout/category'>类目</Link></Menu.Item>
                <Menu.Item key='tool'><Link to='/workout/tool'>工具</Link></Menu.Item>
                <Menu.Item key='about'><Link to='/workout/about'>关于</Link></Menu.Item>
            </Menu>
        </div>
    )
}



const getblockStyle = (isDragging) => {
    return {
        background: isDragging ? '#e6f7ff' : 'white',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center'
    }
};


const CategoryItem = ({ item, provided }) => {
    return (
        <div
            {...provided.props}
            {...provided.dragHandle}
            style={{
                ...provided.props.style,
                ...getblockStyle(provided.isDragging)
            }}
            className="CategoryItem"
        >
            <div style={{ fontSize: 15 }}>{item.part}</div>
        </div>
    )
}

const Category = (routerState) => {
    if (routerState !== '/workout/category') return null;
    return (
        <div>
            <Clickble>
                <div>chest</div>
                <div><Curd /></div>
            </Clickble>
        </div>
    )
}




class Log extends React.Component {
    checkAuth = () => {
        this.props.dispatch({ type: 'checkAuth' });

    }
    handleOnSelect = ({ item, key, selectedKeys }) => {
        const path = '/workout/' + key;
        this.props.dispatch({ type: 'change', payload: path })
    }

    componentWillMount() {
        this.props.dispatch({ type: 'change', payload: this.props.location.pathname })
    }
    componentDidMount() {
        // this.checkAuth();

    }

    dispatcher = () => {
        const { routerState } = this.props;
        const ComponentMap = {
            '/workout/exercise': <Exercise />,
            '/workout/category': Category(routerState),
            '/workout/tool': 'tool',
            '/workout/about': 'about',
        }
        return ComponentMap[routerState];
    }


    render() {
        const { redirectPath, isRedirect, routerState } = this.props;
        if (isRedirect) {
            return <Redirect to={redirectPath} />
        }

        return (
            <div className='log-wrapper'>
                <LogMenu
                    routerState={routerState}
                    onSelect={this.handleOnSelect}
                />
                <Paper>
                    <div className='log-paper'>
                        {this.dispatcher()}
                    </div>
                </Paper>
            </div>
        )
    }
}


const mapState = (state) => {
    return {
        ...state.editor
    }
}

export default connect(mapState)(Log);



