import { Events } from '../events/Events';
import { storyMappings, STORIES } from './storyMappings';
import { sortByDate } from './sortByDate';
import uniqBy from 'lodash.uniqby';

const flatten = multiDimensionalArray => {
  return [].concat(...multiDimensionalArray);
}

const filteredLogicsForStory = (storyUrl, filters) => {
  let logicFilter;

  const filteredEvents = filters.reduce(function(result, filter) {
    logicFilter = storyMappings[storyUrl][filter];
    logicFilter && result.push(logicFilter(Events));
    return result;
  }, []);

  return flatten(filteredEvents);
}

const baseStoryEvents = (storyUrl) => {
  return storyMappings[storyUrl].base(Events)
}

// this will return selected logics for all stories
const filteredLogicsWithOtherStories = (filters) => {
  const storiesWithFilter = STORIES.map(story => {
    return filteredLogicsForStory(story, filters);
  });

  return flatten(storiesWithFilter);
}

export const storyFilter = (storyUrl, filters, showOtherStories) => {
  let relatedLogics;
  const baseEvents = baseStoryEvents(storyUrl);
  const zeroFilters = filters.length < 1

  if (zeroFilters) { return baseEvents }; // nothing selected

  if (showOtherStories) {
    relatedLogics = filteredLogicsWithOtherStories(filters); // show all stories logics
  } else {
    relatedLogics = filteredLogicsForStory(storyUrl, filters); // show logics per story
  }

  return sortByDate(
    uniqBy([...relatedLogics], 'url')
  );
}