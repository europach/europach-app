import React from 'react';
import Event from './Event';

const TimeLine = (props) => {
  const { Events: events } = props;

  return (
    <div>

      {
        events.map(({ name, id }) => (
          <li key={id}>
            <Event name={name} />
          </li>
        ))
      }
    </div>
  )
}

export default TimeLine;