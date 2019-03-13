import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { detectEvent, detectPreviousEvent, detectNextEvent } from '../../filters/storyMappings';
import BasicCard from '../BasicCard';
import { ResponsiveImg, ImageWrapper, StyledLink, Section, EventTitle, EventBody, EventSubhead, DateRedThin, EventSpan } from '../../assets/styles/common';
import { CenteredWrapper, EventNav, EventWrapper, EventContainer, EventNavTitle, Break, EventNavName, TextItems, TextListItem } from './styles';
import DateRange from '../DateRange';
import { ImageIconMapping } from '../../filters/eventMappings';
import CardList from '../CardList';
import LogicToggle from '../LogicToggle';
import { RedLineWrapper } from '../../assets/styles/common';

const NavCard = ({title, event}) => {
  const { startDate, name, url } = event;

  return (
    <EventNav>
      <StyledLink to={url}>
        <EventContainer>
          <EventNavTitle>{ title }</EventNavTitle>
          <DateRedThin>{ startDate }</DateRedThin>
          <EventNavName>{ name }</EventNavName>
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
  <EventBody key={key}>{content}</EventBody>
);

const Audio = (content, key) => (
  <ReactAudioPlayer
    src={content}
    autoPlay={false}
    controls
    key={key}
  />
);

const Quote = (content, key) => (
  <EventBody key={key}>{content}</EventBody>
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
    'audio': Audio,
    'quote': Quote
  }

  const buildJsxElements = () => {
    return(
      currentEvent.body.map(({type, content}, index) => {
        return elementMapping[type](content, index);
      })
    );
  };

  const externalLinks = () => (
    <TextItems>
      {
        currentEvent.externalLinks.map(({url, text}) => (
          <TextListItem>
            <EventSpan>
              <a href={url}>{text}</a>
            </EventSpan>
          </TextListItem>
        ))
      }
    </TextItems>
  )

  const sources = () => (
    <TextItems>
      {
        currentEvent.sources.map(({type, url, content}) => (
          <TextListItem>
            <EventSpan>
              {
                type === 'link' ?
                  <a href={url}>{content}</a> :
                  content
              }
            </EventSpan>
          </TextListItem>
        ))
      }
    </TextItems>
  )

  const inContext = () => (
    <Section padding={'48px 0 12px 0'}>
      <EventSubhead>In Context</EventSubhead>

      <Section padding={'32px 0 12px 0'}>
        <CardList items={LinkedEvents} cardType={BasicCard} width={'auto'} padding={'none'} wrapper={RedLineWrapper} />
      </Section>
    </Section>
  )

  const exploreLogics = () => (
    <Section padding={'48px 0 12px 0'}>
      <EventSubhead>Explore Logics</EventSubhead>

      <Section padding={'24px 0 0 0'}>
        <LogicToggle event={currentEvent} storyName={storyName} />
      </Section>
    </Section>
  )

  const notEmpty = (element) => element.length > 0;

  const buildSources = () => (notEmpty(currentEvent.sources) && sources());
  const buildExternalLinks = () => (notEmpty(currentEvent.externalLinks) && externalLinks());
  const buildInContext = () => (notEmpty(currentEvent.linksWith) && inContext());
  const buildExploreLogics = () => (notEmpty(currentEvent.logics) && exploreLogics());

  return (
    <Section>
      <CenteredWrapper>
        <ResponsiveImg src={getIcon(currentEvent)} width={'24px'} padding={'0 16px 0 0'} />
        <DateRange startDate={currentEvent.startDate} endDate={currentEvent.endDate} />
      </CenteredWrapper>

      <Section padding={'24px 0 24px 0'}>
        <EventTitle>
          { currentEvent.name }
        </EventTitle>
      </Section>

      <Section padding={'0 0 0 0'}>
        { buildJsxElements() }
        { buildExternalLinks() }
        { buildSources() }
      </Section>

      <Break />

      <Section padding={'24px 0 12px 0'}>
        <EventSubhead>Timeline</EventSubhead>
        <EventWrapper>
          { previousEvent ? <NavCard title='Previous' event={previousEvent} /> : <NavBlank /> }
          { nextEvent ? <NavCard title='Next' event={nextEvent} /> : <NavBlank /> }
        </EventWrapper>
      </Section>

      { buildInContext() }
      { buildExploreLogics() }
    </Section>
  )
}