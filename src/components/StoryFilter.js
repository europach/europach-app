import { Events } from '../events/Events';
import { germanySelector, ukSelector, ukRoutingEvents, germanyRoutingEvents } from './Selectors';

export const storyFilter = (storyUrl, filters) => {
  const STORIES = [ '/germany', '/uk' ];

  const sortByDate = dateArray => {
    return dateArray.sort((a,b) => {
      return new Date(a.startDate) - new Date(b.startDate);
    });
  }

  const storyMappings = {
    '/germany': {
      base: germanySelector,
      routing: germanyRoutingEvents
    },
    '/uk': {
      base: ukSelector,
      routing: ukRoutingEvents
    }
  }

  // get stories that aren't the main story
    // iterate through stories
      // find filters that match selected values
      // build a new object based on the filters
      // remove duplicate values
      // sort by date



  const storiesForFilter = STORIES.filter(story => story !== storyUrl);
  const flatten = (multiDimensionalArray) => { return [].concat(...multiDimensionalArray); }

  const filterStoryEvents = (storyUrl, filters) => {
    const filteredEvents = filters.map(filter => {
      return storyMappings[storyUrl][filter](Events)
    });

    return flatten(filteredEvents);
  }

  const filter = (storyUrl, filters) => {
    if (filters.length < 1) { return storyMappings[storyUrl].base(Events) }

    const storiesWithFilter = storiesForFilter.map(story => {
      return filterStoryEvents(story, filters);
    });

    return flatten(storiesWithFilter);
  }

  const filteredStories = filter(storyUrl, filters)

  return filteredStories;
}