import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { detectEvent, detectPreviousEvent, detectNextEvent } from '../../filters/storyMappings';
import BasicCard from '../BasicCard';
import { ResponsiveImg, ImageWrapper, StyledLink, Img, Section, TitleText, DateRedThin } from '../../assets/styles/common';
import { CenteredWrapper, BackArrow, EventNav, EventWrapper, EventContainer } from './styles';
import ArrowBack from '../../assets/images/arrow_back.svg';
import Moment from 'react-moment';
import { ImageIconMapping } from '../../filters/eventMappings';

const NavCard = ({title, event}) => {
  const { startDate, name, url } = event;

  return (
    <EventNav>
      <StyledLink to={url}>
        <EventContainer>
          { title }
          <DateRedThin>{ startDate }</DateRedThin>
          { name }
        </EventContainer>
      </StyledLink>
    </EventNav>
  );
};

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
          return <BasicCard eventData={eventInContext} />
        })
      }
    </div>
  );
}

const getIcon = (event) => {
  if (event) {
    return ImageIconMapping[event.baseStory];
  }
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
      <BackArrow>
        <StyledLink to={`/${storyName}`}>
          <Img src={ArrowBack} />
          &nbsp;
          Back
        </StyledLink>
      </BackArrow>

      <CenteredWrapper>
        <ResponsiveImg src={getIcon(currentEvent)} width={'24px'} />
          &nbsp;
        <DateRedThin>
          <Moment format="D MMM YYYY" withTitle>
            { currentEvent.startDate }
          </Moment>
          &nbsp;
          -
          &nbsp;
          <Moment format="D MMM YYYY" withTitle>
            { currentEvent.endDate }
          </Moment>
        </DateRedThin>
      </CenteredWrapper>

      <TitleText>
        { currentEvent.name }
      </TitleText>

      <Section>
        { buildJsxElements() }
      </Section>

      <Section>
        Timeline

        <EventWrapper>
          {
            previousEvent ?
            <NavCard title='Previous' event={previousEvent} /> :
            <EventNav>
              <EventContainer>
                no previous
              </EventContainer>
            </EventNav>
          }
          {
            nextEvent ?
            <NavCard title='Next' event={nextEvent} /> :
            <EventNav>
              <EventContainer>
                no next
              </EventContainer>
            </EventNav>
          }
        </EventWrapper>
      </Section>

      <Section>
        In Context
        { LinkedEvents(currentEvent.linksWith, match.url) }
      </Section>

      <Section>
        Explore Logics
      </Section>
    </div>
  )
}