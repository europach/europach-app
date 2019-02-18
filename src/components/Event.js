import React from 'react'
import { detectStory } from '../events/storyMappings';

const Event = ({ match }) => {
  console.log('here', match.url)
  const eventData = detectStory(match.url, match.params.eventId);

  return (
    <div>
      { eventData.name }
      { eventData.description }
    </div>
  )
}

export default Event;