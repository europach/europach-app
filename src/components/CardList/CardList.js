import React from 'react';
import { StyledLink } from '../../assets/styles/common';
import EventCard from '../EventCard';
import { EventItem, EventList } from './styles';

export class CardList extends React.Component {
  createEventCard = (item) => {
    const { url, baseStory } = item;

    return (
      <EventItem key={url}>
        <StyledLink to={`${baseStory}/${url}`}>
          <EventCard eventData={item} />
        </StyledLink>
      </EventItem>
    );
  }

  render() {
    const eventItems = this.props.items;

    return (
      <EventList>
        {
          eventItems.map((item) => (
            this.createEventCard(item)
          ))
        }
      </EventList>
    )
  }
}