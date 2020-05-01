import React, { useState, useEffect } from 'react'
import * as contentful from 'contentful'
import ReactAudioPlayer from 'react-audio-player'
import {
  detectEvent,
  detectPreviousEvent,
  detectNextEvent,
} from '../../filters/storyMappings'
import ExternalLink from '../ExternalLink'
import BasicCard from '../BasicCard'
import {
  ResponsiveImg,
  ImageWrapper,
  StyledLink,
  Section,
  EventTitle,
  EventBody,
  EventSubhead,
  DateRedThin,
  EventQuote,
  EventSources,
  Panel,
  PanelInner,
} from '../../assets/styles/common'
import {
  CenteredWrapper,
  EventNav,
  EventWrapper,
  EventContainer,
  EventNavTitle,
  Break,
  EventNavName,
  TextItems,
  TextListItem,
} from './styles'
import DateRange from '../DateRange'
import { ImageIconMapping } from '../../utils/imageIconMapping'
import CardList from '../CardList'
import LogicToggle from '../LogicToggle'
import { RedLineWrapper } from '../../assets/styles/common'
import AppNav from '../AppNav'
import { Player } from 'video-react'
import { LOGICS } from '../../logics/logics'

const NavCard = ({ title, event }) => {
  const { startDate, name, url, baseStory } = event

  return (
    <EventNav>
      <StyledLink to={`/${baseStory}/${url}`}>
        <EventContainer>
          <EventNavTitle>{title}</EventNavTitle>
          <DateRedThin>{startDate}</DateRedThin>
          <EventNavName>{name}</EventNavName>
        </EventContainer>
      </StyledLink>
    </EventNav>
  )
}

const NavBlank = props => {
  return (
    <EventNav>
      <EventContainer>{props.text}</EventContainer>
    </EventNav>
  )
}

const Image = (content, key) => (
  <ImageWrapper key={key}>
    <ResponsiveImg width={'100%'} src={content} alt={''} />
  </ImageWrapper>
)

const Paragraph = (content, key) => <EventBody key={key}>{content}</EventBody>

const Audio = (content, key) => (
  <ReactAudioPlayer src={content} autoPlay={false} controls key={key} />
)

const Video = (content, key) => (
  <Player key={key}>
    <source src={content} />
  </Player>
)

const Quote = (content, key) => <EventQuote key={key}>{content}</EventQuote>

const getLinkedEvents = (eventsInContext, storyUrl) => {
  return eventsInContext.map(eventUrl => detectEvent(storyUrl, eventUrl))
}

const getIcon = event => {
  if (event) {
    return ImageIconMapping[event.baseStory]
  }
}

export const PreviewEventPage = ({ match }) => {
  const entryId = match.params.entryId
  const [event, setEvent] = useState()

  useEffect(() => {
    const client = contentful.createClient({
      space: 'c5hh5jx0dh59',
      accessToken: 'pt6cVsCIJqWUcND7M8Xa2ylxQvo0lSh9ffipDbiZs7U',
      host: 'preview.contentful.com',
    })

    client
      .getEntry(entryId)
      .then(entry => {
        const event = {
          ...entry.fields,
          logics: entry.fields.logics.map(logic => LOGICS[logic]),
        }
        setEvent(event)
      })
      .catch(err => {
        //do nothing
      })
  }, [entryId])

  if (!event) {
    return null
  }

  // // eventId should be eventUrl
  const storyUrl = `/${event.baseStory}/${event.url}`
  const storyName = storyUrl.split('/')[1]
  const eventUrl = event.url
  const currentEvent = event
  const previousEvent = detectPreviousEvent(storyUrl, eventUrl)
  const nextEvent = detectNextEvent(storyUrl, eventUrl)
  const LinkedEvents = getLinkedEvents(currentEvent.linksWith, storyUrl)

  const elementMapping = {
    paragraph: Paragraph,
    image: Image,
    audio: Audio,
    quote: Quote,
    video: Video,
  }

  const buildJsxElements = () => {
    return event.body.map(({ type, content }, index) => {
      return elementMapping[type](content, index)
    })
  }

  const externalLinks = () => {
    const externalLinksCount = event.externalLinks.length

    return (
      <Section padding={'0 0 12px 0'}>
        <TextItems>
          {event.externalLinks.map(({ url, text }, index) => {
            const isLastItem = externalLinksCount === index + 1

            return (
              <TextListItem lastItem={isLastItem} key={index}>
                <EventSources>
                  <ExternalLink url={url}>{text}</ExternalLink>
                </EventSources>
              </TextListItem>
            )
          })}
        </TextItems>
      </Section>
    )
  }

  const sources = () => {
    const sourcesCount = event.sources.length

    return (
      <Section>
        <TextItems>
          {event.sources.map(({ type, url, content }, index) => {
            const isLastItem = sourcesCount === index + 1

            return (
              <TextListItem lastItem={isLastItem} key={index}>
                <EventSources>
                  {type === 'link' ? <a href={url}>{content}</a> : content}
                </EventSources>
              </TextListItem>
            )
          })}
        </TextItems>
      </Section>
    )
  }

  const inContext = () => (
    <Section padding={'48px 0 12px 0'}>
      <EventSubhead>Links to other events in the story</EventSubhead>

      <Section padding={'32px 0 12px 0'}>
        <CardList
          items={LinkedEvents}
          cardType={BasicCard}
          width={'auto'}
          padding={'none'}
          wrapper={RedLineWrapper}
        />
      </Section>
    </Section>
  )

  const exploreLogics = () => (
    <Section padding={'48px 0 12px 0'}>
      <EventSubhead>Explore Logics</EventSubhead>

      <Section padding={'16px 0 0 0'}>
        <LogicToggle event={event} storyName={storyName} />
      </Section>
    </Section>
  )

  const empty = element => element == null || element.length === 0

  const buildSources = () => !empty(event.sources) && sources()
  const buildExternalLinks = () =>
    !empty(event.externalLinks) && externalLinks()
  const buildInContext = () => !empty(currentEvent.linksWith) && inContext()
  const buildExploreLogics = () => !empty(event.logics) && exploreLogics()

  return (
    <Panel>
      <div style={{ height: 48 }}></div>
      <div
        style={{
          backgroundColor: 'red',
          width: '100%',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
          padding: 14,
          position: 'fixed',
          top: 0,
        }}
      >
        THIS IS A PREVIEW
      </div>
      <Panel background="white" padding="0 0 32px">
        <AppNav background="white" />
        <PanelInner padding="12px 0 0">
          <CenteredWrapper>
            <ResponsiveImg
              src={getIcon(event)}
              width={'24px'}
              padding={'0 8px 0 0'}
              opacity=".4"
            />
            <DateRange startDate={event.startDate} endDate={event.endDate} />
          </CenteredWrapper>

          <Section padding={'24px 0 32px 0'}>
            <EventTitle>{event.name}</EventTitle>
          </Section>

          <Section padding={'0 0 24px 0'}>
            {buildJsxElements()}
            {buildExternalLinks()}
            {buildSources()}
          </Section>

          <Break />

          <Section padding={'32px 0 12px 0'}>
            <EventSubhead>Timeline</EventSubhead>
            <EventWrapper>
              {previousEvent ? (
                <NavCard title="Previous" event={previousEvent} />
              ) : (
                <NavBlank text="This the first event for this story" />
              )}
              {nextEvent ? (
                <NavCard title="Next" event={nextEvent} />
              ) : (
                <NavBlank text="This is the last event for this story" />
              )}
            </EventWrapper>
          </Section>
        </PanelInner>
      </Panel>

      <Panel padding="0 0 48px">
        <PanelInner>
          {buildInContext()}
          {buildExploreLogics()}
        </PanelInner>
      </Panel>
    </Panel>
  )
}
