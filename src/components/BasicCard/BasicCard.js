import React from 'react';
import { Card, Header } from './styles';
import { DateRedThin, EventSpan, Section } from '../../assets/styles/common';

export const BasicCard = (props) => {
  const { eventData } = props;

  return (
    <Card>
      <Header>
        <DateRedThin>
          { eventData && eventData.startDate || 'fake!' }
        </DateRedThin>
      </Header>
      <Section padding={'16px 0 0 0'}>
        <EventSpan>
          { eventData && eventData.name || 'fake!' }
        </EventSpan>
      </Section>
    </Card>
  )
}