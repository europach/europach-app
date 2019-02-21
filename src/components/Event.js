import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { detectStory } from '../events/storyMappings';
import EventCard from './EventCard';

const Image = (content) => (
  <img src={content} alt={''} />
);

const Paragraph = (content) => (
  <p>{ content }</p>
);

const Audio = (content) => (
  <ReactAudioPlayer
    src={content}
    autoPlay
    controls
  />
);

const LinkedEvents = (eventUrls, currentUrl) => {
  return (
    <div>
      { eventUrls.map(url => {
          const eventData = detectStory(currentUrl, url);
          return <EventCard eventData={eventData} />
        })
      }
    </div>
  );
}

const Event = ({ match }) => {
  // eventId should be eventUrl
  console.log(match.url)
  const eventData = detectStory(match.url, match.params.eventId);

  const elementMapping = {
    'paragraph': Paragraph,
    'image': Image,
    'audio': Audio
  }

  const buildJsxElements = () => {
    return(
      eventData.body.map(({type, content}) => {
        return elementMapping[type](content);
      })
    );
  };

  return (
    <div>
      { eventData.name }
      { buildJsxElements() }
      { LinkedEvents(eventData.linksWith, match.url) }
    </div>
  )
}

export default Event;