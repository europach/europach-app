import React from 'react'
import LogicMultiSelect from '../LogicMultiSelect'
import { storyFilter } from '../../filters/StoryFilter'
import {
  DateWrapper,
  TimelineSection,
  Circle,
  FilterContainer,
  FilterContainerInner,
} from './styles'
import { ModalTitle, ResponsiveImg } from '../../assets/styles/common'
import Modal from '../Modal'
import CardList from '../CardList'
import EventCard from '../EventCard'
import rhizomeIcon from '../../assets/images/rhizome_icon_Rhizome_icon.svg'

export class Timeline extends React.Component {
  constructor(props) {
    super(props)

    const currentStory = props.match.url

    this.state = {
      currentStory,
      showModal: false,
      selectedValues: [],
      showOtherStories: false,
    }
  }

  static getDerivedStateFromProps

  handleOnSubmit = (selectedValues, showOtherStories) => {
    this.setState({
      selectedValues,
      showOtherStories,
    })
  }

  cleanDate(date) {
    return date.split('-')[0]
  }

  splitByDate(items) {
    if (items.length < 1) {
      return
    }

    let itemsByDate = {}

    items.forEach(item => {
      let itemDate =
        new Date(item.startDate).getFullYear() ||
        (item.startDate.includes('/') && item.startDate.split('/')[0]) ||
        item.startDate.split(' ')[1]

      itemsByDate[itemDate] = itemsByDate[itemDate] || []
      itemsByDate[itemDate].push(item)
    })

    return itemsByDate
  }

  availableDates(dates) {
    if (!dates) {
      return
    }

    return Object.keys(dates)
  }

  createTimelineSection = (sectionDate, sectionItems) => {
    return (
      <TimelineSection key={sectionDate}>
        <DateWrapper>{sectionDate}</DateWrapper>

        <CardList items={sectionItems} cardType={EventCard} width={'100%'} />
      </TimelineSection>
    )
  }

  displayModal = () => {
    this.setState({ showModal: true })
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    const filteredEvents = storyFilter(
      this.props.events,
      this.state.currentStory,
      this.state.selectedValues,
      this.state.showOtherStories,
    )
    const itemsByDate = this.splitByDate(filteredEvents)
    const availableDates = this.availableDates(itemsByDate)

    return (
      <div>
        {itemsByDate &&
          availableDates.map(dateKey => {
            return this.createTimelineSection(dateKey, itemsByDate[dateKey])
          })}

        <Modal show={this.state.showModal}>
          <ModalTitle>Explore</ModalTitle>
          <LogicMultiSelect
            onSubmit={this.handleOnSubmit}
            onClose={this.hideModal}
          />
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
