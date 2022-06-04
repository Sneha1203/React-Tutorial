import React, {Component} from 'react';
import Random from './Random';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Random maxNum={7}/>
      </div>
    );
  }
 
}

export default App;
