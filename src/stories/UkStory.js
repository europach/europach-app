import React from 'react';
import { Route, Link } from 'react-router-dom';
import TimeLine from '../components/TimeLine';

const UkStory = ({ match }) => {
  return (
    <div>
      <Link to='/'>Back Home</Link>
      <h1>
        UkProtectiveMasksForPolice
      </h1>

      <Route exact path={match.path} component={TimeLine} />
    </div>
  )
}

export default UkStory;