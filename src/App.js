import React, {Component} from 'react';
import MainTimer from './MainTimer.js';


class App extends Component {
  render() {
    return ( 
      <div className = "App">
        <header >
          <h1>Tabata Timer</h1>
        </header>
        <main className = 'mainTimer'>
          <div>
            <MainTimer />
          </div>
        </main>
      </div>
    );
  }
}

export default App;