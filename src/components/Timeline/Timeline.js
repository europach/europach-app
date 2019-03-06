import React from 'react';
import LogicMultiSelect from '../LogicMultiSelect';
import { storyFilter } from '../../filters/StoryFilter';
import { Date, Section, Circle, FilterContainer, FilterContainerInner } from './styles';
import Modal from '../Modal';
import CardList from '../CardList';

export class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvents: null,
      currentStory: null,
      showModal: false
    };
  }

  componentWillMount() {
    const currentStory = this.props.match.url;
    const baseStoryEvents = storyFilter(currentStory, []);

    this.setState({
      selectedEvents: baseStoryEvents,
      currentStory: currentStory
    })
  }

  handleOnSubmit = (selectedValues, showOtherStories) => {
    this.setState({
      selectedEvents: storyFilter(
        this.state.currentStory,
        selectedValues,
        showOtherStories
      )
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

  createTimelineSection = (sectionDate, sectionItems) => {
    return (
      <Section key={sectionDate}>
        <Date>{ sectionDate }</Date>

        <CardList items={sectionItems} />
      </Section>
    );
  }

  displayModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    let itemsByDate = this.splitByDate(this.state.selectedEvents);
    let availableDates = Object.keys(itemsByDate);

    return (
      <div>
        {
          itemsByDate && availableDates.map(dateKey => {
            return ( this.createTimelineSection(dateKey, itemsByDate[dateKey]) );
          })
        }

        <Modal show={this.state.showModal}>
          <h1>Explore Themes</h1>

          <p>
            See how events connect across borders and topics
            for a better understanding of how the past has
            influenced the present
          </p>

          <LogicMultiSelect onSubmit={this.handleOnSubmit} onClose={this.hideModal} />
        </Modal>

        <FilterContainer>
          <FilterContainerInner>
            <Circle onClick={this.displayModal} />
            EXPLORE
          </FilterContainerInner>
        </FilterContainer>
      </div>
    )
  }
}

