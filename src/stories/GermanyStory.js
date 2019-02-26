import React from 'react';
import { Route, Link } from 'react-router-dom';
import Timeline from '../components/Timeline';
import { Img, TitleText, SubHeadText, BodyText } from '../assets/styles/common';
import ArrowBack from '../assets/images/arrow_back.svg';
import MockImage from '../assets/images/mock_image2x1.png';

const GermanyStory = ({ match }) => {
  return (
    <div>
      <Img src={MockImage}/>

      <Link to='/'>
        <Img src={ArrowBack} />
      </Link>

      <TitleText>
        Germany: Prison, HIV, Drugs
      </TitleText>

      <SubHeadText>
        SubHeadTextrisoners are among those groups mostly affected by the HIV/AIDS epidemic.
      </SubHeadText>

      <BodyText>
        This timeline shows the main policy interventions by administrations, international governing bodies as well as civil society into the field of HIV/Aids related prision health.
      </BodyText>

      <Route exact path={match.path} component={Timeline} />
    </div>
  )
}

export default GermanyStory;