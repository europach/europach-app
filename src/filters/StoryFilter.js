import { storyMappings, STORIES } from './storyMappings'
import { sortByDate } from './sortByDate'
import uniqBy from 'lodash.uniqby'

const flatten = multiDimensionalArray => {
  return [].concat(...multiDimensionalArray)
}

const filteredLogicsForStory = (events, storyUrl, filters) => {
  let logicFilter

  const filteredEvents = filters.reduce(function(result, filter) {
    logicFilter = storyMappings[storyUrl][filter]
    logicFilter && result.push(logicFilter(events))
    return result
  }, [])

  return flatten(filteredEvents)
}

const baseStoryEvents = (events, storyUrl) => {
  return storyMappings[storyUrl].base(events)
}

// this will return selected logics for all stories
const filteredLogicsWithOtherStories = (events, filters) => {
  const storiesWithFilter = STORIES.map(story => {
    return filteredLogicsForStory(events, story, filters)
  })

  return flatten(storiesWithFilter)
}

export const storyFilter = (events, storyUrl, filters, showOtherStories) => {
  let relatedLogics
  const baseEvents = baseStoryEvents(events, storyUrl)
  const zeroFilters = filters.length < 1

  if (zeroFilters) {
    return baseEvents
  } // nothing selected

  if (showOtherStories) {
    relatedLogics = filteredLogicsWithOtherStories(events, filters) // show all stories logics
  } else {
    relatedLogics = filteredLogicsForStory(events, storyUrl, filters) // show logics per story
  }

  return sortByDate(uniqBy([...relatedLogics], 'url'))
}
