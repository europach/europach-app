import React from 'react';
import { Route, Link } from 'react-router-dom';
import Timeline from '../components/Timeline';

const GermanyStory = ({ match }) => {
  return (
    <div>
      <Link to='/'>Back Home</Link>

      <h1>
        Germany: Prison, HIV, Drugs
      </h1>

      <p>
        Prisoners are among those groups mostly affected by the HIV/AIDS epidemic.
      </p>

      <p>
        This timeline shows the main policy interventions by administrations, international governing bodies as well as civil society into the field of HIV/Aids related prision health.
      </p>

      <Route exact path={match.path} component={Timeline} />
    </div>
  )
}

export default GermanyStory;