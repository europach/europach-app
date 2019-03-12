import React from 'react';
import { Card, Header, Logics, Logic, LogicText } from './styles';
import { ResponsiveImg, Section, Paragraph } from '../../assets/styles/common';
import { ImageIconMapping } from '../../filters/eventMappings';
import DateRange from '../DateRange';

export const EventCard = (props) => {
  const { eventData } = props;
  const storyImage = ImageIconMapping[eventData.baseStory];

  return (
    <Card>
      <Header>
        <ResponsiveImg src={storyImage} width={'24px'} padding={'0 16px 0 0'} />
        <DateRange startDate={eventData.startDate} endDate={eventData.endDate} />
      </Header>
      <Section padding={'16px 0 0 0'}>
        <Paragraph>
          { eventData.name.toUpperCase() }
        </Paragraph>
      </Section>
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