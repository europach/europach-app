import { Events } from '../events/Events';
import { storyMappings, STORIES } from './storyMappings';
import { sortByDate } from './sortByDate';
import uniqBy from 'lodash.uniqby';

const flatten = multiDimensionalArray => {
  return [].concat(...multiDimensionalArray);
}

const storiesForFilter = (storyUrl) => {
  return STORIES.filter(story => story !== storyUrl);
};

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

// this will return selected logics for other stories
const filteredLogicsForOtherStories = (storyUrl, filters) => {
  const storiesWithFilter = storiesForFilter(storyUrl).map(story => {
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
    relatedLogics = filteredLogicsForOtherStories(storyUrl, filters); //  show other story logics
    return sortByDate(
      uniqBy([...relatedLogics, ...baseEvents], 'url')
    );
  } else {
    relatedLogics = filteredLogicsForStory(storyUrl, filters);
    return sortByDate(
      uniqBy([...relatedLogics], 'url')
    );
  }
}