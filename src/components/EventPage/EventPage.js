import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { detectEvent, detectPreviousEvent, detectNextEvent } from '../../filters/storyMappings';
import BasicCard from '../BasicCard';
import { ResponsiveImg, ImageWrapper, StyledLink, Img, Section, EventTitle, EventSubhead, DateRedThin } from '../../assets/styles/common';
import { CenteredWrapper, BackArrow, EventNav, EventWrapper, EventContainer, EventNavTitle } from './styles';
import ArrowBack from '../../assets/images/arrow_back.svg';
import DateRange from '../DateRange';
import { ImageIconMapping } from '../../filters/eventMappings';
import CardList from '../CardList';
import LogicToggle from '../LogicToggle';

const NavCard = ({title, event}) => {
  const { startDate, name, url } = event;

  return (
    <EventNav>
      <StyledLink to={url}>
        <EventContainer>
          <EventNavTitle>{ title }</EventNavTitle>
          <DateRedThin>{ startDate }</DateRedThin>
          { name }
        </EventContainer>
      </StyledLink>
    </EventNav>
  );
};

const NavBlank = () => {
  return (
    <EventNav>
      <EventContainer>
        &nbsp;
      </EventContainer>
    </EventNav>
  );
};

const Image = (content, key) => (
  <ImageWrapper key={key}>
      <ResponsiveImg width={'100%'} src={content} alt={''} />
  </ImageWrapper>
);

const Paragraph = (content, key) => (
  <p key={key}>{content}</p>
);

const Audio = (content, key) => (
  <ReactAudioPlayer
    src={content}
    autoPlay={false}
    controls
    key={key}
  />
);

const getLinkedEvents = (eventsInContext, storyUrl) => {
  return eventsInContext.map(eventUrl => detectEvent(storyUrl, eventUrl))
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
  const LinkedEvents = getLinkedEvents(currentEvent.linksWith, match.url);

  const elementMapping = {
    'paragraph': Paragraph,
    'image': Image,
    'audio': Audio
  }

  const buildJsxElements = () => {
    return(
      currentEvent.body.map(({type, content}, index) => {
        return elementMapping[type](content, index);
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

      <Section>
        <CenteredWrapper>
          <ResponsiveImg src={getIcon(currentEvent)} width={'32px'} />
          &nbsp;
          <DateRange startDate={currentEvent.startDate} endDate={currentEvent.endDate} />
        </CenteredWrapper>
      </Section>

      <Section>
        <EventTitle>
          { currentEvent.name }
        </EventTitle>
      </Section>

      <Section>
        { buildJsxElements() }
      </Section>

      <Section>
        <EventSubhead>Timeline</EventSubhead>
        <EventWrapper>
          { previousEvent ? <NavCard title='Previous' event={previousEvent} /> : <NavBlank /> }
          { nextEvent ? <NavCard title='Next' event={nextEvent} /> : <NavBlank /> }
        </EventWrapper>
      </Section>

      <Section>
        <EventSubhead>In Context</EventSubhead>
        <CardList items={LinkedEvents} cardType={BasicCard} width={'auto'} />
      </Section>

      <Section>
        <EventSubhead>Explore Logics</EventSubhead>
        <LogicToggle event={currentEvent} storyName={storyName} />
      </Section>
    </div>
  )
}