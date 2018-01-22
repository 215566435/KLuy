import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom'

import {
  Route,
  Link
} from 'react-router-dom'

import { TrainNote } from './views/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={<TrainNote />} />
          <Route exact path="/123" component={<h1>123</h1>} />
        </div>
      </Router>
    );
  }
}

export default App;
