import React from 'react';
import { StyledLink } from '../../assets/styles/common';
import { EventItem, EventList } from './styles';

export class CardList extends React.Component {
  createEventCard = (item) => {
    const { cardType: Card } = this.props;
    const { url, baseStory } = item;

    return (
      <EventItem key={url}>
        <StyledLink to={`${baseStory}/${url}`}>
          <Card eventData={item} />
        </StyledLink>
      </EventItem>
    );
  }

  render() {
    const { items } = this.props;

    return (
      <EventList>
        {
          items.map((item) => (
            this.createEventCard(item)
          ))
        }
      </EventList>
    )
  }
}