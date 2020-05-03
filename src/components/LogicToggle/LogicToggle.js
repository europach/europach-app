import React from 'react'
import { storyFilter } from '../../filters/StoryFilter'
import CardList from '../CardList'
import EventCard from '../EventCard'
import { RedLineWrapper, Section } from '../../assets/styles/common'
import { FilterBtn } from './styles'

class Filter extends React.Component {
  isSelected = () => {
    return this.props.selectedFilter === this.props.filter
  }

  render() {
    const { onFilter, filter, name } = this.props

    return (
      <FilterBtn onClick={onFilter} value={filter} active={this.isSelected()}>
        {name}
      </FilterBtn>
    )
  }
}

export class LogicToggle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedEvents: null,
      selectedFilter: null,
    }
  }

  filterOtherStories = false
  currentStory = `/${this.props.storyName}`

  defaultLogics = () => {
    const logics = this.props.event.logics
    const eventHasLogics = logics.length > 0
    const defaultFilter = [logics[0].filter]
    return eventHasLogics && defaultFilter
  }

  componentWillMount() {
    const defaultFilters = this.defaultLogics()
    const defaultFilter = defaultFilters[0]
    const baseStoryEvents = storyFilter(
      this.props.events,
      this.currentStory,
      defaultFilters,
      this.filterOtherStories,
    )

    this.setState({
      selectedEvents: baseStoryEvents,
      selectedFilter: defaultFilter,
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.event !== prevProps.event) {
      const defaultFilters = this.defaultLogics()
      const defaultFilter = defaultFilters[0]
      const baseStoryEvents = storyFilter(
        this.props.events,
        this.currentStory,
        defaultFilters,
        this.filterOtherStories,
      )

      this.setState({
        selectedEvents: baseStoryEvents,
        selectedFilter: defaultFilter,
      })
    }
  }

  onFilter = event => {
    const filterEventsBy = event.target.getAttribute('value')

    this.setState({
      selectedEvents: storyFilter(
        this.props.events,
        this.currentStory,
        [filterEventsBy],
        this.filterOtherStories,
      ),
      selectedFilter: filterEventsBy,
    })
  }

  render() {
    const { event } = this.props
    const { logics } = event
    const { selectedEvents, selectedFilter } = this.state

    return (
      <div>
        <div>
          <Section padding={'0 0 32px 0'}>
            {logics.map((logic, index) => (
              <Filter
                name={logic.title}
                filter={logic.filter}
                onFilter={this.onFilter}
                key={index}
                selectedFilter={selectedFilter}
              />
            ))}
          </Section>

          <CardList
            items={selectedEvents}
            cardType={EventCard}
            padding={'none'}
            width={'100%'}
            mobileMaxWidth={'320px'}
            wrapper={RedLineWrapper}
          />
        </div>
      </div>
    )
  }
}
