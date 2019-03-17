import React from 'react';
import { StyledLink } from '../../assets/styles/common';
import { EventItem, EventList } from './styles';

export class CardList extends React.Component {
  createEventCard = (item, lastItem) => {
    const { cardType: Card } = this.props;
    // const { url, baseStory } = item;

    const url = item && item.url || 'fake!!!';
    const baseStory = item && item.baseStory || 'fake!!!';

    return (
      <EventItem key={url} lastItem={lastItem}>
        <StyledLink to={`/${baseStory}/${url}`}>
          <Card eventData={item} />
        </StyledLink>
      </EventItem>
    );
  }

  createEventList() {
    const { items, width, mobileMaxWidth, padding } = this.props;
    const itemsCount = items.length;

    return (
      <EventList width={width} mobileMaxWidth={mobileMaxWidth} padding={padding}>
        {
          items.map((item, index) => {
            const isLastItem = itemsCount === (index + 1);
            return this.createEventCard(item, isLastItem)
          })
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