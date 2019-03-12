import React from 'react';
import { StyledLink } from '../../assets/styles/common';
import { EventItem, EventList } from './styles';

export class CardList extends React.Component {
  createEventCard = (item) => {
    const { cardType: Card } = this.props;
    const { url, baseStory } = item;

    return (
      <EventItem key={url}>
        <StyledLink to={`/${baseStory}/${url}`}>
          <Card eventData={item} />
        </StyledLink>
      </EventItem>
    );
  }

  createEventList() {
    const { items, width, mobileMaxWidth, padding } = this.props;

    return (
      <EventList width={width} mobileMaxWidth={mobileMaxWidth} padding={padding}>
        {
          items.map((item) => (
            this.createEventCard(item)
          ))
        }
      </EventList>
    );
  }

  determineWrapper() {
    const hasWrapper = this.props.wrapper;
    const Wrapper = this.props.wrapper;

    return hasWrapper ? <Wrapper>{this.createEventList()}</Wrapper> : this.createEventList();
  }

  render() {
    return (
      this.determineWrapper()
    )
  }
}