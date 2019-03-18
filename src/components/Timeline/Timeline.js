import React from 'react';
import LogicMultiSelect from '../LogicMultiSelect';
import LogicDefinitions from '../LogicDefinitions';
import { storyFilter } from '../../filters/StoryFilter';
import { DateWrapper, TimelineSection, Circle, FilterContainer, FilterContainerInner } from './styles';
import { Section, ModalTitle, ResponsiveImg } from '../../assets/styles/common';
import Modal from '../Modal';
import CardList from '../CardList';
import EventCard from '../EventCard';
import rhizomeIcon from '../../assets/images/rhizome_icon_Rhizome_icon.svg';

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
      let itemDate =
        new Date(item.startDate).getFullYear() ||
        item.startDate.includes('/') && item.startDate.split('/')[0] ||
        item.startDate.split(' ')[1];

      itemsByDate[itemDate] = itemsByDate[itemDate] || [];
      itemsByDate[itemDate].push(item);
    });

    return itemsByDate;
  }

  availableDates(dates) {
    if (!dates) { return }

    return Object.keys(dates);
  }

  createTimelineSection = (sectionDate, sectionItems) => {
    return (
      <TimelineSection key={sectionDate}>
        <DateWrapper>{ sectionDate }</DateWrapper>

        <CardList items={sectionItems} cardType={EventCard} width={'100%'} />
      </TimelineSection>
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
    let availableDates = this.availableDates(itemsByDate);

    return (
      <div>
        {
          itemsByDate && availableDates.map(dateKey => {
            return ( this.createTimelineSection(dateKey, itemsByDate[dateKey]) );
          })
        }

        <Modal show={this.state.showModal}>
          <ModalTitle>Explore</ModalTitle>

          <p>
            See how events connect across borders and topics
            for a better understanding of how the past has
            influenced the present
          </p>

          <Section padding={'0 0 40px 0'}>
            <LogicDefinitions />
          </Section>
          <LogicMultiSelect onSubmit={this.handleOnSubmit} onClose={this.hideModal} />
        </Modal>

        <FilterContainer>
          <FilterContainerInner>
            <Circle onClick={this.displayModal}>
              <ResponsiveImg src={rhizomeIcon} width={'35px'} />
            </Circle>
            EXPLORE
          </FilterContainerInner>
        </FilterContainer>
      </div>
    )
  }
}

