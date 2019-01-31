import React from 'react';
import { Link } from 'react-router-dom'
import LogicFilterForm from './LogicFilterForm';
import { routingSelector, germanySelector } from './Selectors'
import { Events } from '../events/Events';

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvents: null
    };
  }

  componentWillMount() {
    this.setState({
      selectedEvents: germanySelector(Events)
    })
  }

  filterMappings = {
    'nothing': germanySelector,
    'routing': routingSelector
  }

  filter = (logicFilter) => {
    const selectedEvents = this.filterMappings[logicFilter](Events)

    this.setState({
      selectedEvents
    })
  }

  render() {
    return (
      <div>
        <LogicFilterForm onChange={this.filter}/>

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