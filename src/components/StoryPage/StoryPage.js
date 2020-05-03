import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import Timeline from '../Timeline'
import {
  ResponsiveImg,
  EventTitle,
  SubHeadText,
  Paragraph,
  ImageWrapper,
  Section,
  Panel,
  PanelInner,
} from '../../assets/styles/common'
import { StoryDetailMapping } from '../../filters/storyMappings'
import AppNav from '../AppNav'
import AppFooter from '../AppFooter'
import { EventsContext } from '../EventsContext'

export const Story = ({ match }) => {
  const events = useContext(EventsContext)
  const currentStory = StoryDetailMapping[match.url]

  return (
    <Panel>
      <AppNav />
      <PanelInner>
        <ImageWrapper>
          <ResponsiveImg width={'100%'} src={currentStory.image} />
        </ImageWrapper>

        <EventTitle>{currentStory.title}</EventTitle>

        <SubHeadText>{currentStory.subHead}</SubHeadText>

        <Section padding={'24px 0 24px 0'}>
          <Paragraph>{currentStory.body}</Paragraph>
        </Section>

        <Route
          exact
          path={match.path}
          render={props => <Timeline {...props} events={events} />}
          events={events}
        />
      </PanelInner>

      <AppFooter />
    </Panel>
  )
}
