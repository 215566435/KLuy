import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { TrainNote } from './views/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrainNote />
      </div>
    );
  }
}

export default App;
