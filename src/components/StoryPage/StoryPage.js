import React from 'react';
import { Route } from 'react-router-dom';
import Timeline from '../Timeline';
import { ResponsiveImg, EventTitle, SubHeadText, Text, ImageWrapper, Section } from '../../assets/styles/common';
import { StoryDetailMapping } from '../../filters/storyMappings';

export const Story = ({ match }) => {
  const currentStory = StoryDetailMapping[match.url];

  return (
    <div>
      <ImageWrapper>
        <ResponsiveImg width={'100%'} src={currentStory.image}/>
      </ImageWrapper>

      <EventTitle>
        { currentStory.title }
      </EventTitle>

      <SubHeadText>
        { currentStory.subHead }
      </SubHeadText>

      <Section padding={'24px 0 24px 0'}>
        <Text>
          { currentStory.body }
        </Text>
      </Section>

      <Route exact path={match.path} component={Timeline} />
    </div>
  )
}