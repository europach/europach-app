import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { detectEvent, detectPreviousEvent, detectNextEvent } from '../../filters/storyMappings';
import BasicCard from '../BasicCard';
import { ResponsiveImg, ImageWrapper, StyledLink, Img, Section, TitleText, DateRedThin, SubHeadText } from '../../assets/styles/common';
import { CenteredWrapper, BackArrow, EventNav, EventWrapper, EventContainer } from './styles';
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
          { title }
          <DateRedThin>{ startDate }</DateRedThin>
          { name }
        </EventContainer>
      </StyledLink>
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

      <CenteredWrapper>
        <ResponsiveImg src={getIcon(currentEvent)} width={'24px'} />
        &nbsp;
        <DateRange startDate={currentEvent.startDate} endDate={currentEvent.endDate} />
      </CenteredWrapper>

      <TitleText>
        { currentEvent.name }
      </TitleText>

      <Section>
        { buildJsxElements() }
      </Section>

      <Section>
        <SubHeadText>Timeline</SubHeadText>

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
        <SubHeadText>In Context</SubHeadText>
        <CardList items={LinkedEvents} cardType={BasicCard} width={'auto'} />
      </Section>

      <Section>
        <SubHeadText>Explore Logics</SubHeadText>
        <LogicToggle event={currentEvent} storyName={storyName} />
      </Section>
    </div>
  )
}