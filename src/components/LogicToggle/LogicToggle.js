import React from 'react';
import { FilterGroup } from './styles';
import { storyFilter } from '../../filters/StoryFilter';
import CardList from '../CardList';
import EventCard from '../EventCard';

const Filter = (props) => {
  return (
    <span onClick={props.onFilter} filter-name={props.name}>{ props.name }</span>
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
    return eventHasLogics ? [logics[0]] : ['fake-logic'];
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
        <FilterGroup>
          { logics.map((name, index) => <Filter name={name} onFilter={this.onFilter} key={index} />) }

          <CardList items={selectedEvents} cardType={EventCard} width={'100%'} />
        </FilterGroup>
      </div>
    )
  }
}