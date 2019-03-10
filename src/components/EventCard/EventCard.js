import React from 'react';
import { Card, Header, Logics, Logic, LogicText } from './styles';
import { ResponsiveImg, EventBody } from '../../assets/styles/common';
import { ImageIconMapping } from '../../filters/eventMappings';
import DateRange from '../DateRange';

export const EventCard = (props) => {
  const { eventData } = props;
  const storyImage = ImageIconMapping[eventData.baseStory];

  return (
    <Card>
      <Header>
        <ResponsiveImg src={storyImage} width={'24px'} />
        &nbsp;
        <DateRange startDate={eventData.startDate} endDate={eventData.endDate} />
      </Header>
      <EventBody>
        { eventData.name.toUpperCase() }
      </EventBody>
      <Logics>
        {
          eventData.logics.map((logic, index) => (
            <Logic key={index}>
              <LogicText>{ logic.title }</LogicText>
            </Logic>
          ))
        }
      </Logics>
    </Card>
  )
}