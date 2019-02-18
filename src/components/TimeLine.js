import React from 'react';
import { Link } from 'react-router-dom'
import LogicMultiSelect from './LogicMultiSelect';
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

        <ul>
          {
            this.state.selectedEvents && this.state.selectedEvents.map(({ name, id, baseStory }) => (
              <li key={id}>
                <Link to={`${baseStory}/${id}`}>
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