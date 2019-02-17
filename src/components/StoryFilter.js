import { Events } from '../events/Events';
import {
  germanySelector, ukSelector, turkeySelector, germanyRoutingEvents, ukRoutingEvents, turkeyRoutingEvents } from './Selectors';

const STORIES = [ '/germany', '/uk', 'turkey' ];

const sortByDate = dateArray => {
  return dateArray.sort((a,b) => {
    return new Date(a.startDate) - new Date(b.startDate);
  });
}

const flatten = multiDimensionalArray => {
  return [].concat(...multiDimensionalArray);
}

const storyMappings = {
  '/germany': {
    base: germanySelector,
    routing: germanyRoutingEvents
  },
  '/uk': {
    base: ukSelector,
    routing: ukRoutingEvents
  },
  'turkey': {
    base: turkeySelector,
    routing: turkeyRoutingEvents
  }
}

const storiesForFilter = (storyUrl) => {
  return STORIES.filter(story => story !== storyUrl);
};

const storyEventsForLogic = (storyUrl, filters) => {
  const filteredEvents = filters.map(filter => {
    return storyMappings[storyUrl][filter](Events)
  });

  return flatten(filteredEvents);
}

const baseStoryEvents = (storyUrl) => {
  return storyMappings[storyUrl].base(Events)
}

const relatedLogicsForStory = (storyUrl, filters) => {
  const storiesWithFilter = storiesForFilter(storyUrl).map(story => {
    return storyEventsForLogic(story, filters);
  });

  return flatten(storiesWithFilter);
}

export const storyFilter = (storyUrl, filters) => {
  const baseEvents = baseStoryEvents(storyUrl);
  if (filters.length < 1) { return baseEvents };

  const relatedLogics = relatedLogicsForStory(storyUrl, filters);
  return sortByDate([...relatedLogics, ...baseEvents]);
}


  // get stories that aren't the main story
    // iterate through stories
      // find filters that match selected values
      // build a new object based on the filters
      // remove duplicate values
      // sort by date