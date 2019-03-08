import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StoryPage from '../components/StoryPage';
import Home from '../components/HomePage';
import Error from '../components/pages/Error';
import EventPage from '../components/EventPage';
import { AppContainer, AppNav, AppNavInner, AppMain, AppFooter, AppFooterInner } from './styles';
import { StyledLink } from '../assets/styles/common';
import logo from '../assets/images/logo.svg';

export class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <AppNav>
            <AppNavInner>
              <StyledLink to='/'>
                <img src={logo} alt="Logo" />
              </StyledLink>
            </AppNavInner>
          </AppNav>

          <AppMain>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/germany' component={StoryPage} />
              <Route path={`/germany/:eventId`} component={EventPage} />

              <Route exact path='/uk' component={StoryPage} />
              <Route path={`/uk/:eventId`} component={EventPage} />

              <Route exact path='/poland' component={StoryPage} />
              <Route path={`/poland/:eventId`} component={EventPage} />
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
