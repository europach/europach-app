import React from 'react'
import { Route } from 'react-router-dom'
import Timeline from '../Timeline'
import {
  ResponsiveImg,
  EventTitle,
  SubHeadText,
  Paragraph,
  ImageWrapper,
  Section,
  Pannel,
  PannelInner,
} from '../../assets/styles/common'
import { StoryDetailMapping } from '../../filters/storyMappings'
import AppNav from '../AppNav'
import AppFooter from '../AppFooter'

export const Story = ({ match }) => {
  const currentStory = StoryDetailMapping[match.url]

  return (
    <Pannel>
      <AppNav />
      <PannelInner>
        <ImageWrapper>
          <ResponsiveImg width={'100%'} src={currentStory.image} />
        </ImageWrapper>

        <EventTitle>{currentStory.title}</EventTitle>

        <SubHeadText>{currentStory.subHead}</SubHeadText>

        <Section padding={'24px 0 24px 0'}>
          <Paragraph>{currentStory.body}</Paragraph>
        </Section>

        <Route exact path={match.path} component={Timeline} />
      </PannelInner>

      <AppFooter />
    </Pannel>
  )
}
