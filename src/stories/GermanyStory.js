import React from 'react';
import { Route, Link } from 'react-router-dom';
import TimeLine from '../components/TimeLine';

const GermanyStory = ({ match }) => {
  return (
    <div>
      <Link to='/'>Back Home</Link>
      <h1>
        GermanyPrisionContext
      </h1>

      <Route exact path={match.path} component={TimeLine} />
    </div>
  )
}

export default GermanyStory;