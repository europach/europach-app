import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GermanyPrisionContext from './stories/GermanyPrisionContext';
import UkProtectiveMasksForPolice from './stories/UkProtectiveMasksForPolice';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import Event from './components/Event';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/germany-prision-context' component={GermanyPrisionContext} />
            <Route path={`/germany-prision-context/:eventId`} component={Event} />

            <Route path='/uk-protective-masks-for-police' component={UkProtectiveMasksForPolice} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
