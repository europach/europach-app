import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GermanyStory from '../stories/GermanyStory';
import UkStory from '../stories/UkStory';
import Home from '../components/HomePage';
import Error from '../components/pages/Error';
import Event from '../components/Event';
import { AppContainer, AppNav, AppTitle, AppMain, AppFooter } from './styles';

export class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <AppNav>Europach</AppNav>

          <AppMain>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/germany' component={GermanyStory} />
              <Route path={`/germany/:eventId`} component={Event} />

              <Route exact path='/uk' component={UkStory} />
              <Route path={`/uk/:eventId`} component={Event} />
              <Route component={Error} />
            </Switch>

          </AppMain>

          <AppFooter>Europac footer</AppFooter>
        </AppContainer>
      </Router>
    );
  }
}
