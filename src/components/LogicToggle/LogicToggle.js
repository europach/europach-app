import React from 'react';
import { storyFilter } from '../../filters/StoryFilter';
import CardList from '../CardList';
import EventCard from '../EventCard';
import { RedLineWrapper, Section } from '../../assets/styles/common';
import { FilterBtn } from './styles';

const Filter = (props) => {
  return (
    <FilterBtn onClick={props.onFilter} filter-name={props.filter}>{ props.name }</FilterBtn>
  )
};

export class LogicToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEvents: null
    };
  }

  filterOtherStories = false;
  currentStory = `/${this.props.storyName}`

  defaultLogics = () => {
    const logics = this.props.event.logics;
    const eventHasLogics = logics.length > 0;
    return eventHasLogics ? [logics[0].filter] : ['fake-logic'];
  }

  componentWillMount() {
    const baseStoryEvents = storyFilter(this.currentStory, this.defaultLogics(), this.filterOtherStories);

    this.setState({
      selectedEvents: baseStoryEvents,
    })
  }

  onFilter = (event) => {
    const filterEventsBy = event.target.getAttribute('filter-name');

    this.setState({
      selectedEvents: storyFilter(
        this.currentStory,
        [filterEventsBy],
        this.filterOtherStories
      )
    })
  }

  render() {
    const { event } = this.props;
    const { logics } = event;
    const selectedEvents = this.state.selectedEvents;

    return (
      <div>
        <div>
          <Section padding={'0 0 32px 0'}>
            { logics.map((logic, index) => <Filter name={logic.title} filter={logic.filter} onFilter={this.onFilter} key={index} />) }
          </Section>

          <CardList items={selectedEvents} cardType={EventCard} padding={'none'} width={'100%'} mobileMaxWidth={'320px'} wrapper={RedLineWrapper} />
        </div>
      </div>
    )
  }
}