import React from 'react';
import { Card, Header, Logics, Logic, LogicText } from './styles';
import { ResponsiveImg, DateRedThin, EventBody } from '../../assets/styles/common';
import Moment from 'react-moment';
import { ImageIconMapping } from '../../filters/eventMappings';

export const EventCard = (props) => {
  const { eventData } = props;
  const storyImage = ImageIconMapping[eventData.baseStory];

  return (
    <Card>
      <Header>
        <ResponsiveImg src={storyImage} width={'24px'} />
        &nbsp;
        <DateRedThin>
          <Moment format="D MMM YYYY" withTitle>
            { eventData.startDate }
          </Moment>
          &nbsp;
          -
          &nbsp;
          <Moment format="D MMM YYYY" withTitle>
            { eventData.endDate }
          </Moment>
        </DateRedThin>
      </Header>
      <EventBody>
        { eventData.name.toUpperCase() }
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