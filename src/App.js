import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Planets from './container/Planets/Planets';
import UnpaginatedPlanets from './container/Planets/UnPlanets';
import home from './components/Home/Home';
import './assets/fonts/Starjedi.ttf';
import './assets/fonts/Starjhol.ttf';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/unpaginated" component={UnpaginatedPlanets} />
          <Route path="/paginated" component={Planets} />
        </Switch>
      </div>
    );
  }
}

export default App;
