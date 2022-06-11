import React, {Component} from 'react';
import './App.css';
import Ball from './Ball';
import Lottery from './Lottery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery/>
        <Lottery title='Mini Table' maxBalls={4} maxNum={10}/>
      </div>
    );
  }
  
}

export default App;
