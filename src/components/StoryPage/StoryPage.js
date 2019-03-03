import React from 'react';
import { Route } from 'react-router-dom';
import Timeline from '../Timeline';
import { ResponsiveImg, Img, TitleText, SubHeadText, BodyText, ImageWrapper, StyledLink } from '../../assets/styles/common';
import ArrowBack from '../../assets/images/arrow_back.svg';
import MockImage from '../../assets/images/mock_image2x1.png';

const GermanyStoryDetails = {
  title: 'Germany: Prison, HIV, Drugs',
  subHead: 'SubHeadTextrisoners are among those groups mostly affected by the HIV/AIDS epidemic.',
  body: 'This timeline shows the main policy interventions by administrations, international governing bodies as well as civil society into the field of HIV/Aids related prision health.',
  image: MockImage
}

const UkStoryDetails = {
  title: 'uk',
  subHead: 'prisoners are among those groups mostly affected by the HIV/AIDS epidemic.',
  body: 'This timeline shows the main policy interventions by administrations, international governing bodies as well as civil society into the field of HIV/Aids related prision health.',
  image: MockImage
}

const StoryDetailMapping = {
  '/germany': GermanyStoryDetails,
  '/uk': UkStoryDetails
}

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