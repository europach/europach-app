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

import {
  germanySelector,
  germanyBestPracticeEvents,
  germanyCitizenshipEvents,
  germanyCollaborativeGovernanceEvents,
  germanyCriminalisationEvents,
  germanyDeCriminalisationEvents,
  germanyDissentEvents,
  germanyEvidenceEvents,
  germanyHumanitarianismEvents,
  germanyHumanRightsEvents,
  germanyMoralizingEvents,
  germanyMutualHelpEvents,
  germanyPublicHealthEvents,
  germanySecurityEvents,
  germanySecuritizationEvents
} from '../selectors/germanySelectors'

import {
  ukSelector,
  ukBestPracticeEvents,
  ukCitizenshipEvents,
  ukCollaborativeGovernanceEvents,
  ukCriminalisationEvents,
  ukDeCriminalisationEvents,
  ukDissentEvents,
  ukEvidenceEvents,
  ukHumanitarianismEvents,
  ukHumanRightsEvents,
  ukMoralizingEvents,
  ukMutualHelpEvents,
  ukPublicHealthEvents,
  ukSecurityEvents,
  ukSecuritizationEvents
} from '../selectors/ukSelectors'

import {
  turkeySelector,
  turkeyBestPracticeEvents,
  turkeyCitizenshipEvents,
  turkeyCollaborativeGovernanceEvents,
  turkeyCriminalisationEvents,
  turkeyDeCriminalisationEvents,
  turkeyDissentEvents,
  turkeyEvidenceEvents,
  turkeyHumanitarianismEvents,
  turkeyHumanRightsEvents,
  turkeyMoralizingEvents,
  turkeyMutualHelpEvents,
  turkeyPublicHealthEvents,
  turkeySecurityEvents,
  turkeySecuritizationEvents
} from '../selectors/turkeySelectors'

import {
  euSelector,
  euBestPracticeEvents,
  euCitizenshipEvents,
  euCollaborativeGovernanceEvents,
  euCriminalisationEvents,
  euDeCriminalisationEvents,
  euDissentEvents,
  euEvidenceEvents,
  euHumanitarianismEvents,
  euHumanRightsEvents,
  euMoralizingEvents,
  euMutualHelpEvents,
  euPublicHealthEvents,
  euSecurityEvents,
  euSecuritizationEvents
} from '../selectors/euSelectors'

import { Events } from '../events/Events';

import { GermanyStoryDetails, UkStoryDetails, PolandStoryDetails, EUStoryDetails, TurkeyStoryDetails } from './storyDetails';

export const STORIES = [ '/uk', '/poland', '/germany' ];

export const storyMappings = {
  '/germany': {
    base: germanySelector,
    bestPractice: germanyBestPracticeEvents,
    citizenship: germanyCitizenshipEvents,
    collaborativeGovernance: germanyCollaborativeGovernanceEvents,
    criminalisation: germanyCriminalisationEvents,
    deCriminalisation: germanyDeCriminalisationEvents,
    dissent: germanyDissentEvents,
    evidence: germanyEvidenceEvents,
    humanitarianism: germanyHumanitarianismEvents,
    humanRights: germanyHumanRightsEvents,
    moralizing: germanyMoralizingEvents,
    mutualHelp: germanyMutualHelpEvents,
    publicHealth: germanyPublicHealthEvents,
    security: germanySecurityEvents,
    securitization: germanySecuritizationEvents
  },
  '/uk': {
    base: ukSelector,
    bestPractice: ukBestPracticeEvents,
    citizenship: ukCitizenshipEvents,
    collaborativeGovernance: ukCollaborativeGovernanceEvents,
    criminalisation: ukCriminalisationEvents,
    deCriminalisation: ukDeCriminalisationEvents,
    dissent: ukDissentEvents,
    evidence: ukEvidenceEvents,
    humanitarianism: ukHumanitarianismEvents,
    humanRights: ukHumanRightsEvents,
    moralizing: ukMoralizingEvents,
    mutualHelp: ukMutualHelpEvents,
    publicHealth: ukPublicHealthEvents,
    security: ukSecurityEvents,
    securitization: ukSecuritizationEvents
  },
  '/turkey': {
    base: turkeySelector,
    bestPractice: turkeyBestPracticeEvents,
    citizenship: turkeyCitizenshipEvents,
    collaborativeGovernance: turkeyCollaborativeGovernanceEvents,
    criminalisation: turkeyCriminalisationEvents,
    deCriminalisation: turkeyDeCriminalisationEvents,
    dissent: turkeyDissentEvents,
    evidence: turkeyEvidenceEvents,
    humanitarianism: turkeyHumanitarianismEvents,
    humanRights: turkeyHumanRightsEvents,
    moralizing: turkeyMoralizingEvents,
    mutualHelp: turkeyMutualHelpEvents,
    publicHealth: turkeyPublicHealthEvents,
    security: turkeySecurityEvents,
    securitization: turkeySecuritizationEvents
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
  },
  '/eu': {
    base: euSelector,
    bestPractice: euBestPracticeEvents,
    citizenship: euCitizenshipEvents,
    collaborativeGovernance: euCollaborativeGovernanceEvents,
    criminalisation: euCriminalisationEvents,
    deCriminalisation: euDeCriminalisationEvents,
    dissent: euDissentEvents,
    evidence: euEvidenceEvents,
    humanitarianism: euHumanitarianismEvents,
    humanRights: euHumanRightsEvents,
    moralizing: euMoralizingEvents,
    mutualHelp: euMutualHelpEvents,
    publicHealth: euPublicHealthEvents,
    security: euSecurityEvents,
    securitization: euSecuritizationEvents
  },
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
  '/poland': PolandStoryDetails,
  '/eu': EUStoryDetails,
  '/turkey': TurkeyStoryDetails,
}