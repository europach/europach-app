import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop';
import StoryPage from '../components/StoryPage';
import Home from '../components/HomePage';
import Error from '../components/pages/Error';
import EventPage from '../components/EventPage';
import { AppContainer, AppFooterInner, FooterItem } from './styles';
import { ResponsiveImg, DateRedThin, Pannel } from '../assets/styles/common';
import husiegelImg from '../assets/images/footer_husiegel.jpg'
import goldsmithsImg from '../assets/images/footer_goldsmiths.png';
import basImg from '../assets/images/footer_uni_bas.jpg';
import krakowImg from '../assets/images/footer_krakow.jpg';
import heraImg from '../assets/images/footer_hera.png';
import horizonImg from '../assets/images/footer_horizon.jpg';

export class App extends Component {
  render() {

    return (
      <Router>
        <ScrollToTop>
          <AppContainer>
            <Pannel>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/germany' component={StoryPage} />
                <Route path={`/germany/:eventId`} component={EventPage} />

                <Route exact path='/uk' component={StoryPage} />
                <Route path={`/uk/:eventId`} component={EventPage} />

                <Route exact path='/poland' component={StoryPage} />
                <Route path={`/poland/:eventId`} component={EventPage} />

                <Route exact path='/turkey' component={StoryPage} />
                <Route path={`/turkey/:eventId`} component={EventPage} />

                <Route exact path='/eu' component={StoryPage} />
                <Route path={`/eu/:eventId`} component={EventPage} />
                <Route component={Error} />
              </Switch>
            </Pannel>

            <Pannel padding='1em' background='white'>
              <AppFooterInner>
                <DateRedThin>copyright 2019 Europach</DateRedThin>
                <FooterItem><ResponsiveImg width='100px' src={husiegelImg} /></FooterItem>
                <FooterItem><ResponsiveImg width='200px' src={goldsmithsImg} /></FooterItem>
                <FooterItem><ResponsiveImg width='200px' src={basImg} /></FooterItem>
                <FooterItem><ResponsiveImg width='200px' src={krakowImg} /></FooterItem>
                <FooterItem><ResponsiveImg width='200px' src={heraImg} /></FooterItem>
                <FooterItem><ResponsiveImg width='200px' src={horizonImg} /></FooterItem>
              </AppFooterInner>
            </Pannel>
          </AppContainer>
        </ScrollToTop>
      </Router>
    );
  }
}
