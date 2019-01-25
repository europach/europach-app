import React from 'react';
import Event from './Event';
import { Route, Link } from 'react-router-dom'

const TimeLine = ({match, Events: events}) => {
  return (
    <div>
      <ul>
        {
          events.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>
                {name}
              </Link>
            </li>
          ))
        }
      </ul>

      <Route path={`${match.path}/:eventId`} component={Event} />
    </div>
  )
}

export default TimeLine;