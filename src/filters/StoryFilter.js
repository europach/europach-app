import { Events } from '../events/Events';
import { storyMappings } from './storyMappings';

const STORIES = [ '/germany', '/uk', 'turkey' ];

const sortByDate = dateArray => {
  return dateArray.sort((a,b) => {
    return new Date(a.startDate) - new Date(b.startDate);
  });
}

const flatten = multiDimensionalArray => {
  return [].concat(...multiDimensionalArray);
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