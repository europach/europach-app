import React from 'react';
import { Card, Img } from './styles';
import storyImage from '../../assets/images/mock_image2x1.png';
import { H2, ByLine } from '../../assets/styles/common';
import { CardTextWrapper } from './styles';

export const StoryCard = (props) => {
  return (
    <Card>
      <CardTextWrapper>
        <H2>{ props.name }</H2>
        <ByLine>{ `Researched by: ${props.researcher}` }</ByLine>
      </CardTextWrapper>
    </Card>
  )
}

{/* <Img src={storyImage} alt="storyImage" /> */}