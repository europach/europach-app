import React from 'react';
import { Route } from 'react-router-dom';
import Timeline from '../Timeline';
import { ResponsiveImg, Img, TitleText, SubHeadText, BodyText, ImageWrapper, StyledLink } from '../../assets/styles/common';
import ArrowBack from '../../assets/images/arrow_back.svg';
import { StoryDetailMapping } from '../../filters/storyMappings';

export const Story = ({ match }) => {
  const currentStory = StoryDetailMapping[match.url];

  return (
    <div>
      <div>
        <StyledLink to='/'>
          <Img src={ArrowBack} />
          &nbsp;
          Back
        </StyledLink>
      </div>

      <ImageWrapper>
        <ResponsiveImg width={'100%'} src={currentStory.image}/>
      </ImageWrapper>

      <TitleText>
        { currentStory.title }
      </TitleText>

      <SubHeadText>
        { currentStory.subHead }
      </SubHeadText>

      <BodyText>
        { currentStory.body }
      </BodyText>

      <Route exact path={match.path} component={Timeline} />
    </div>
  )
}