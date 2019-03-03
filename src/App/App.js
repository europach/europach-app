import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GermanyStory from '../stories/GermanyStory';
import UkStory from '../stories/UkStory';
import Home from '../components/HomePage';
import Error from '../components/pages/Error';
import EventPage from '../components/EventPage';
import { AppContainer, AppNav, AppNavInner, AppMain, AppFooter, AppFooterInner } from './styles';
import logo from '../assets/images/logo.svg';

export class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <AppNav>
            <AppNavInner>
              <img src={logo} alt="Logo" />
            </AppNavInner>
          </AppNav>

          <AppMain>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/germany' component={GermanyStory} />
              <Route path={`/germany/:eventId`} component={EventPage} />

              <Route exact path='/uk' component={UkStory} />
              <Route path={`/uk/:eventId`} component={EventPage} />
              <Route component={Error} />
            </Switch>

          </AppMain>

          <AppFooter>
            <AppFooterInner>
              Europac footer
            </AppFooterInner>
          </AppFooter>
        </AppContainer>
      </Router>
    );
  }
}
