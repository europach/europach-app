import {
  germanySelector,
  ukSelector,
  turkeySelector,
  germanyRoutingEvents,
  ukRoutingEvents,
  turkeyRoutingEvents,
  polandSelector,
  polandRoutingEvents
} from '../selectors/Selectors';

import { Events } from '../events/Events';

export const STORIES = [ '/germany', '/uk', 'turkey', '/poland' ];

export const storyMappings = {
  '/germany': {
    base: germanySelector,
    routing: germanyRoutingEvents
  },
  '/uk': {
    base: ukSelector,
    routing: ukRoutingEvents
  },
  '/turkey': {
    base: turkeySelector,
    routing: turkeyRoutingEvents
  },
  '/poland': {
    base: polandSelector,
    routing: polandRoutingEvents
  }
}

const currentStory = (storyUrl) => storyUrl.split('/')[1];
const storyEvents = (currentStory) => storyMappings[`/${currentStory}`].base(Events);

export const detectEvent = (storyUrl, eventUrl) => {
  const events =
    storyEvents(
      currentStory(storyUrl)
    );

  const story = events.find(({ url }) => url === eventUrl)

  return story;
}

export const detectPreviousEvent = (storyUrl, eventUrl) => {
  const events =
    storyEvents(
      currentStory(storyUrl)
    );

  const storyIndex = events.findIndex(({ url }) => url === eventUrl)

  if (storyIndex === 0) {
    return undefined; // first item
  } else if (storyIndex === -1) {
    return undefined; // not found
  } else if (storyIndex > 0) {
    return events[storyIndex - 1];
  }
}

export const detectNextEvent = (storyUrl, eventUrl) => {
  const events =
    storyEvents(
      currentStory(storyUrl)
    );

  const storyIndex = events.findIndex(({ url }) => url === eventUrl)

  if (storyIndex === events.length) {
    return undefined; // last item
  } else if (storyIndex === -1) {
    return undefined; // not found
  } else if (storyIndex < events.length) {
    return events[storyIndex + 1];
  }
}