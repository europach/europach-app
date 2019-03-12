import React from 'react';
import { Card, Header } from './styles';
import { DateRedThin, EventSpan, Section } from '../../assets/styles/common';
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
      <Section padding={'16px 0 0 0'}>
        <EventSpan>
          { eventData.name }
        </EventSpan>
      </Section>
    </Card>
  )
}