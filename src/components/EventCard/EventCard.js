import React from 'react';
import { SmallCard } from './styles';
import { Img, DateRedThin, EventBody } from '../../assets/styles/common';
import storyImage from '../../assets/images/iconBerlin.svg';

export const EventCard = (props) => {
  console.log('props', props)
  const { eventData } = props;

  return (
    <SmallCard>
      <div>
        <Img src={storyImage} />
        <DateRedThin>1st Jan 1955 - 6th Aug 2018</DateRedThin>
      </div>
      <EventBody>
        { props.eventData.name }
      </EventBody>
    </SmallCard>
  )
}