import React from 'react';
import { Link } from 'react-router-dom'
import { Events } from '../events/GermanyPrisionContextEvents';

const TimeLine = ({ match }) => {
  return (
    <div>
      <ul>
        {
          Events.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>
                {name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TimeLine;