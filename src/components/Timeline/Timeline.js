import React from 'react';
import LogicMultiSelect from '../LogicMultiSelect';
import { storyFilter } from '../StoryFilter';
import { EventList, EventItem, StyledLink, Date, Section } from './styles';
import EventCard from '../EventCard';
import Modal from '../Modal';

export class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvents: null,
      currentStory: null,
      show: false
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

  cleanDate(date) {
    return date.split('-')[0];
  }

  splitByDate(items) {
    if (items.length < 1) { return; }

    let itemsByDate = {}

    items.forEach(item => {
      let itemDate = this.cleanDate(item.startDate);
      itemsByDate[itemDate] = itemsByDate[itemDate] || [];
      itemsByDate[itemDate].push(item);
    });

    return itemsByDate;
  }

  createEventCard = ({ name, id, baseStory }) => {
    return (
      <EventItem key={id}>
        <StyledLink to={`${baseStory}/${id}`}>
          <EventCard name={name} />
        </StyledLink>
      </EventItem>
    );
  }

  createTimelineSection = (sectionDate, sectionItems) => {
    return (
      <Section key={sectionDate}>
        <Date>{ sectionDate }</Date>

        <EventList>
          {
            sectionItems.map((item) => (
              this.createEventCard(item)
            ))
          }
        </EventList>
      </Section>
    );
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    let itemsByDate = this.splitByDate(this.state.selectedEvents);
    let availableDates = Object.keys(itemsByDate);

    return (
      <div>
        <LogicMultiSelect onChange={this.handleOnChange}/>
        {
          itemsByDate && availableDates.map(dateKey => {
            return ( this.createTimelineSection(dateKey, itemsByDate[dateKey]) );
          })
        }
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </div>
    )
  }
}

