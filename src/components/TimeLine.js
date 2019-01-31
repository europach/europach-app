import React from 'react';
import { Link } from 'react-router-dom'
import LogicFilterForm from './LogicFilterForm';
import { storyFilter } from './StoryFilter';

class TimeLine extends React.Component {
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
    const baseStoryEvents = storyFilter(currentStory, 'base');

    this.setState({
      selectedEvents: baseStoryEvents,
      currentStory: currentStory
    })
  }

  handleOnChange(selectedValue) {
    this.setState({
      selectedEvents: storyFilter(this.state.currentStory, selectedValue)
    })
  }

  render() {
    return (
      <div>
        <LogicFilterForm onChange={this.handleOnChange}/>

        <ul>
          {
            this.state.selectedEvents && this.state.selectedEvents.map(({ name, id }) => (
              <li key={id}>
                <Link to={`${this.props.match.url}/${id}`}>
                  {name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default TimeLine;