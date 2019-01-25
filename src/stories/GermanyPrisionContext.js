import React from 'react';
import { Link } from 'react-router-dom';
import TimeLine from '../components/TimeLine';
import { Events } from '../events/GermanyPrisionContextEvents';

const GermanyPrisionContext = ({ match }) => {
  return (
    <div>
      <Link to='/'>Back Home</Link>
      <h1>
        GermanyPrisionContext
      </h1>

      <TimeLine Events={Events} match={match} />
    </div>
  )
}

export default GermanyPrisionContext;