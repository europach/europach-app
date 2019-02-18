import React from 'react';
import { SmallCard } from './styles';

export const EventCard = (props) => {
  return (
    <SmallCard>
      { props.name }
    </SmallCard>
  )
}