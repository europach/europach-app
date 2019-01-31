import React from 'react';
import { GermanyEvents } from '../events/GermanyEvents';

const Event = ({ match }) => {
  const eventData = GermanyEvents.find(({ id }) => id === match.params.eventId)

  return (
    <div>
      { eventData.name }
      { eventData.description }
    </div>
  )
}

export default Event;