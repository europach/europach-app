import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { detectEvent, detectPreviousEvent, detectNextEvent } from '../../filters/storyMappings';
import EventCard from '../EventCard';
import { ResponsiveImg, ImageWrapper, StyledLink, Img } from '../../assets/styles/common';
import ArrowBack from '../../assets/images/arrow_back.svg';


const Image = (content) => (
  <ImageWrapper>
      <ResponsiveImg width={'100%'} src={content} alt={''} />
  </ImageWrapper>
);

const Paragraph = (content) => (
  <p>{content}</p>
);

const Audio = (content) => (
  <ReactAudioPlayer
    src={content}
    autoPlay={false}
    controls
  />
);

const LinkedEvents = (eventsInContext, storyUrl) => {
  return (
    <div>
      { eventsInContext.map(eventUrl => {
          const eventInContext = detectEvent(storyUrl, eventUrl);
          return <EventCard eventData={eventInContext} />
        })
      }
    </div>
  );
}

const PreviousEvent = ({ startDate, name }) => {
  return (
    <div>
      Previous
      { startDate }
      { name }
    </div>
  )
}

const NextEvent = ({ startDate, name }) => {
  return (
    <div>
      Next
      { startDate }
      { name }
    </div>
  )
}

export const EventPage = ({ match }) => {
  // eventId should be eventUrl
  const storyUrl= match.url;
  const storyName = storyUrl.split('/')[1]
  const eventUrl= match.params.eventId;
  const currentEvent = detectEvent(storyUrl, eventUrl);
  const previousEvent = detectPreviousEvent(storyUrl, eventUrl);
  const nextEvent = detectNextEvent(storyUrl, eventUrl);

  const elementMapping = {
    'paragraph': Paragraph,
    'image': Image,
    'audio': Audio
  }

  const buildJsxElements = () => {
    return(
      currentEvent.body.map(({type, content}) => {
        return elementMapping[type](content);
      })
    );
  };

  return (
    <div>
      <div>
        <StyledLink to={`/${storyName}`}>
          <Img src={ArrowBack} />
          &nbsp;
          Back
        </StyledLink>
      </div>

      { currentEvent.name }
      { buildJsxElements() }

      Timeline
      {
        previousEvent ?
        <PreviousEvent startDate={previousEvent.startDate} name={previousEvent.name} /> :
        <div>no previous events</div>
      }
      {
        nextEvent ?
        <NextEvent startDate={nextEvent.startDate} name={nextEvent.name} /> :
        <div>no next event</div>
      }

      In Context
      { LinkedEvents(currentEvent.linksWith, match.url) }

      Explore Logics
    </div>
  )
}