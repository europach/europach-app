import React from 'react';
import { Events } from '../events/GermanyPrisionContextEvents';

const Event = ({ match }) => {
  const eventData = Events.find(({ id }) => id === match.params.eventId)

  return (
    <div>
      { eventData.name }
      { eventData.description }
    </div>
  )
}

export default Event;