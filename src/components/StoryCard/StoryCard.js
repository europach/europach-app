import React from 'react';
import { Card } from './styles';

export const StoryCard = (props) => {
  return (
    <Card>
      { props.name }
    </Card>
  )
}