import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'
import StoryPage from '../StoryPage'
import Home from '../HomePage'
import Error from '../pages/Error'
import EventPage from '../EventPage'
import PreviewEventPage from '../PreviewEventPage'
import { AppContainer } from './styles'
import { Panel } from '../../assets/styles/common'

export const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <AppContainer>
          <Panel>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/germany" component={StoryPage} />
              <Route path={`/germany/:eventId`} component={EventPage} />

              <Route exact path="/uk" component={StoryPage} />
              <Route path={`/uk/:eventId`} component={EventPage} />

              <Route exact path="/poland" component={StoryPage} />
              <Route path={`/poland/:eventId`} component={EventPage} />

              <Route exact path="/turkey" component={StoryPage} />
              <Route path={`/turkey/:eventId`} component={EventPage} />

              <Route exact path="/eu" component={StoryPage} />
              <Route path={`/eu/:eventId`} component={EventPage} />

              <Route path={`/preview/:entryId`} component={PreviewEventPage} />
              <Route component={Error} />
            </Switch>
          </Panel>
        </AppContainer>
      </ScrollToTop>
    </Router>
  )
}
