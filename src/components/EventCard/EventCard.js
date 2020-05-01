import React from 'react'
import { Card, Header, Logics, Logic, LogicText } from './styles'
import {
  ResponsiveImg,
  Section,
  EventCardTitle,
} from '../../assets/styles/common'
import { ImageIconMapping } from '../../utils/imageIconMapping'
import DateRange from '../DateRange'

export const EventCard = props => {
  const { eventData } = props
  const storyImage = ImageIconMapping[eventData.baseStory]

  return (
    <Card>
      <Header>
        <ResponsiveImg
          src={storyImage}
          width={'24px'}
          padding={'0 8px 0 0'}
          opacity=".4"
        />
        <DateRange
          startDate={eventData.startDate}
          endDate={eventData.endDate}
        />
      </Header>
      <Section padding={'16px 0 0 0'}>
        <EventCardTitle>{eventData.name.toUpperCase()}</EventCardTitle>
      </Section>
      <Logics>
        {eventData.logics.map((logic, index) => (
          <Logic key={index}>
            <LogicText>{logic && logic.title}</LogicText>
          </Logic>
        ))}
      </Logics>
    </Card>
  )
}
