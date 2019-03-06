import React from 'react';
import { Card, Header } from './styles';
import { DateRedThin, EventSpan } from '../../assets/styles/common';
import Moment from 'react-moment';

export const BasicCard = (props) => {
  const { eventData } = props;

  return (
    <Card>
      <Header>
        <DateRedThin>
          <Moment format="D MMM YYYY" withTitle>
            { eventData.startDate }
          </Moment>
        </DateRedThin>
      </Header>
      <EventSpan>
        { eventData.name }
      </EventSpan>
    </Card>
  )
}