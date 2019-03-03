import React from 'react';
import { Card, Header, Logics, Logic, LogicText } from './styles';
import { ResponsiveImg, DateRedThin, EventBody } from '../../assets/styles/common';
import storyImage from '../../assets/images/iconBerlin.svg';

export const EventCard = (props) => {
  console.log('props', props)
  const { eventData } = props;

  return (
    <Card>
      <Header>
        <ResponsiveImg src={storyImage} width={'24px'} />
        &nbsp;
        <DateRedThin>1st Jan 1955 - 6th Aug 2018</DateRedThin>
      </Header>
      <EventBody>
        { eventData.name }
      </EventBody>
      <Logics>
        {
          eventData.logics.map((logicName) => (
            <Logic>
              <LogicText>{ logicName }</LogicText>
            </Logic>
          ))
        }
      </Logics>
    </Card>
  )
}