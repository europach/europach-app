import {
  germanySelector,
  ukSelector,
  turkeySelector,
  germanyRoutingEvents,
  ukRoutingEvents,
  turkeyRoutingEvents,
} from '../selectors/Selectors';

import {
  polandSelector,
  polandBestPracticeEvents,
  polandCitizenshipEvents,
  polandCollaborativeGovernanceEvents,
  polandCriminalisationEvents,
  polandDeCriminalisationEvents,
  polandDissentEvents,
  polandEvidenceEvents,
  polandHumanitarianismEvents,
  polandHumanRightsEvents,
  polandMoralizingEvents,
  polandMutualHelpEvents,
  polandPublicHealthEvents,
  polandSecurityEvents,
  polandSecuritizationEvents
} from '../selectors/polandSelectors'

import { Events } from '../events/Events';

import { GermanyStoryDetails, UkStoryDetails, PolandStoryDetails } from './storyDetails';

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
    bestPractice: polandBestPracticeEvents,
    citizenship: polandCitizenshipEvents,
    collaborativeGovernance: polandCollaborativeGovernanceEvents,
    criminalisation: polandCriminalisationEvents,
    deCriminalisation: polandDeCriminalisationEvents,
    dissent: polandDissentEvents,
    evidence: polandEvidenceEvents,
    humanitarianism: polandHumanitarianismEvents,
    humanRights: polandHumanRightsEvents,
    moralizing: polandMoralizingEvents,
    mutualHelp: polandMutualHelpEvents,
    publicHealth: polandPublicHealthEvents,
    security: polandSecurityEvents,
    securitization: polandSecuritizationEvents
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

export const StoryDetailMapping = {
  '/germany': GermanyStoryDetails,
  '/uk': UkStoryDetails,
  '/poland': PolandStoryDetails
}