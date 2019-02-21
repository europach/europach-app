import {
  germanySelector,
  ukSelector,
  turkeySelector,
  germanyRoutingEvents,
  ukRoutingEvents,
  turkeyRoutingEvents
} from './Selectors';

import { Events } from './Events';

export const storyMappings = {
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

export const detectStory = (storyUrl, eventUrl) => {
  const currentStory = storyUrl.split('/')[1];
  const storyEvents = storyMappings[`/${currentStory}`].base(Events);

  const story = storyEvents.find(({ url }) => url === eventUrl)

  return story;
}