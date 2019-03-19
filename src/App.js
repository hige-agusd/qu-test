import React, { Component } from 'react';
import Planets from './container/Planets/Planets';
import './assets/fonts/Starjedi.ttf';
import './assets/fonts/Starjhol.ttf';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Planets />
      </div>
    );
  }
}

export default App;
