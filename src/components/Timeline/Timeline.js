import React from 'react';
import LogicMultiSelect from '../LogicMultiSelect';
import { storyFilter } from '../StoryFilter';
import { EventList, EventItem, StyledLink } from './styles';
import EventCard from '../EventCard';

export class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvents: null,
      currentStory: null
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillMount() {
    const currentStory = this.props.match.url;
    const baseStoryEvents = storyFilter(currentStory, []);

    this.setState({
      selectedEvents: baseStoryEvents,
      currentStory: currentStory
    })
  }

  handleOnChange(selectedValues) {
    this.setState({
      selectedEvents: storyFilter(this.state.currentStory, selectedValues)
    })
  }

  render() {
    return (
      <div>
        <LogicMultiSelect onChange={this.handleOnChange}/>

        <EventList>
          {
            this.state.selectedEvents && this.state.selectedEvents.map(({ name, id, baseStory }) => (
              <EventItem key={id}>
                <StyledLink to={`${baseStory}/${id}`}>
                  <EventCard name={name} />
                </StyledLink>
              </EventItem>
            ))
          }
        </EventList>
      </div>
    )
  }
}