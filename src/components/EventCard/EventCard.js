import React from 'react';
import { SmallCard } from './styles';

export const EventCard = ({ eventData }) => {
  return (
    <SmallCard>
      { eventData.name }
    </SmallCard>
  )
}