import React from 'react';
import { GermanyPrisionContextEvents } from '../events/GermanyPrisionContextEvents';

const Event = ({ match }) => {
  const eventData = GermanyPrisionContextEvents.find(({ id }) => id === match.params.eventId)

  return (
    <div>
      { eventData.name }
      { eventData.description }
    </div>
  )
}

export default Event;