import { sortByDate } from './sortByDate'

import {
  polandSelector,
  polandBestPracticeEvents,
  polandCitizenshipEvents,
  polandCollaborativeGovernanceEvents,
  polandDeCriminalisationEvents,
  polandDissentEvents,
  polandEvidenceEvents,
  polandHumanitarianismEvents,
  polandHumanRightsEvents,
  polandMoralizingEvents,
  polandMutualHelpEvents,
  polandPublicHealthEvents,
  polandSecuritisationEvents,
  polandSocialJusticeEvents,
} from '../selectors/polandSelectors'

import {
  germanySelector,
  germanyBestPracticeEvents,
  germanyCitizenshipEvents,
  germanyCollaborativeGovernanceEvents,
  germanyDeCriminalisationEvents,
  germanyDissentEvents,
  germanyEvidenceEvents,
  germanyHumanitarianismEvents,
  germanyHumanRightsEvents,
  germanyMoralizingEvents,
  germanyMutualHelpEvents,
  germanyPublicHealthEvents,
  germanySecuritisationEvents,
  germanySocialJusticeEvents,
} from '../selectors/germanySelectors'

import {
  ukSelector,
  ukBestPracticeEvents,
  ukCitizenshipEvents,
  ukCollaborativeGovernanceEvents,
  ukDeCriminalisationEvents,
  ukDissentEvents,
  ukEvidenceEvents,
  ukHumanitarianismEvents,
  ukHumanRightsEvents,
  ukMoralizingEvents,
  ukMutualHelpEvents,
  ukPublicHealthEvents,
  ukSecuritisationEvents,
  ukSocialJusticeEvents,
} from '../selectors/ukSelectors'

import {
  turkeySelector,
  turkeyBestPracticeEvents,
  turkeyCitizenshipEvents,
  turkeyCollaborativeGovernanceEvents,
  turkeyDeCriminalisationEvents,
  turkeyDissentEvents,
  turkeyEvidenceEvents,
  turkeyHumanitarianismEvents,
  turkeyHumanRightsEvents,
  turkeyMoralizingEvents,
  turkeyMutualHelpEvents,
  turkeyPublicHealthEvents,
  turkeySecuritisationEvents,
  turkeySocialJusticeEvents,
} from '../selectors/turkeySelectors'

import {
  euSelector,
  euBestPracticeEvents,
  euCitizenshipEvents,
  euCollaborativeGovernanceEvents,
  euDeCriminalisationEvents,
  euDissentEvents,
  euEvidenceEvents,
  euHumanitarianismEvents,
  euHumanRightsEvents,
  euMoralizingEvents,
  euMutualHelpEvents,
  euPublicHealthEvents,
  euSecuritisationEvents,
  euSocialJusticeEvents,
} from '../selectors/euSelectors'

import {
  GermanyStoryDetails,
  UkStoryDetails,
  PolandStoryDetails,
  EUStoryDetails,
  TurkeyStoryDetails,
} from './storyDetails'

export const STORIES = ['/uk', '/poland', '/germany', '/turkey', '/eu']

export const storyMappings = {
  '/germany': {
    base: germanySelector,
    bestPractice: germanyBestPracticeEvents,
    citizenship: germanyCitizenshipEvents,
    collaborativeGovernance: germanyCollaborativeGovernanceEvents,
    deCriminalisation: germanyDeCriminalisationEvents,
    dissent: germanyDissentEvents,
    evidence: germanyEvidenceEvents,
    humanitarianism: germanyHumanitarianismEvents,
    humanRights: germanyHumanRightsEvents,
    moralizing: germanyMoralizingEvents,
    mutualHelp: germanyMutualHelpEvents,
    publicHealth: germanyPublicHealthEvents,
    securitisation: germanySecuritisationEvents,
    socialJustice: germanySocialJusticeEvents,
  },
  '/uk': {
    base: ukSelector,
    bestPractice: ukBestPracticeEvents,
    citizenship: ukCitizenshipEvents,
    collaborativeGovernance: ukCollaborativeGovernanceEvents,
    deCriminalisation: ukDeCriminalisationEvents,
    dissent: ukDissentEvents,
    evidence: ukEvidenceEvents,
    humanitarianism: ukHumanitarianismEvents,
    humanRights: ukHumanRightsEvents,
    moralizing: ukMoralizingEvents,
    mutualHelp: ukMutualHelpEvents,
    publicHealth: ukPublicHealthEvents,
    securitisation: ukSecuritisationEvents,
    socialJustice: ukSocialJusticeEvents,
  },
  '/turkey': {
    base: turkeySelector,
    bestPractice: turkeyBestPracticeEvents,
    citizenship: turkeyCitizenshipEvents,
    collaborativeGovernance: turkeyCollaborativeGovernanceEvents,
    deCriminalisation: turkeyDeCriminalisationEvents,
    dissent: turkeyDissentEvents,
    evidence: turkeyEvidenceEvents,
    humanitarianism: turkeyHumanitarianismEvents,
    humanRights: turkeyHumanRightsEvents,
    moralizing: turkeyMoralizingEvents,
    mutualHelp: turkeyMutualHelpEvents,
    publicHealth: turkeyPublicHealthEvents,
    securitisation: turkeySecuritisationEvents,
    socialJustice: turkeySocialJusticeEvents,
  },
  '/poland': {
    base: polandSelector,
    bestPractice: polandBestPracticeEvents,
    citizenship: polandCitizenshipEvents,
    collaborativeGovernance: polandCollaborativeGovernanceEvents,
    deCriminalisation: polandDeCriminalisationEvents,
    dissent: polandDissentEvents,
    evidence: polandEvidenceEvents,
    humanitarianism: polandHumanitarianismEvents,
    humanRights: polandHumanRightsEvents,
    moralizing: polandMoralizingEvents,
    mutualHelp: polandMutualHelpEvents,
    publicHealth: polandPublicHealthEvents,
    securitisation: polandSecuritisationEvents,
    socialJustice: polandSocialJusticeEvents,
  },
  '/eu': {
    base: euSelector,
    bestPractice: euBestPracticeEvents,
    citizenship: euCitizenshipEvents,
    collaborativeGovernance: euCollaborativeGovernanceEvents,
    deCriminalisation: euDeCriminalisationEvents,
    dissent: euDissentEvents,
    evidence: euEvidenceEvents,
    humanitarianism: euHumanitarianismEvents,
    humanRights: euHumanRightsEvents,
    moralizing: euMoralizingEvents,
    mutualHelp: euMutualHelpEvents,
    publicHealth: euPublicHealthEvents,
    securitisation: euSecuritisationEvents,
    socialJustice: euSocialJusticeEvents,
  },
}

const currentStory = storyUrl => storyUrl.split('/')[1]
const storyEvents = (allEvents, currentStory) =>
  storyMappings[`/${currentStory}`].base(allEvents)

export const detectEvent = (allEvents, storyUrl, eventUrl) => {
  const events = storyEvents(allEvents, currentStory(storyUrl))

  const story = events.find(({ url }) => url === eventUrl)

  return story
}

export const detectPreviousEvent = (allEvents, storyUrl, eventUrl) => {
  const events = storyEvents(allEvents, currentStory(storyUrl))

  const sortedEvents = sortByDate(events)

  const storyIndex = sortedEvents.findIndex(({ url }) => url === eventUrl)

  if (storyIndex === 0) {
    return undefined // first item
  } else if (storyIndex === -1) {
    return undefined // not found
  } else if (storyIndex > 0) {
    return sortedEvents[storyIndex - 1]
  }
}

export const detectNextEvent = (allEvents, storyUrl, eventUrl) => {
  const events = storyEvents(allEvents, currentStory(storyUrl))

  const sortedEvents = sortByDate(events)

  const storyIndex = sortedEvents.findIndex(({ url }) => url === eventUrl)

  if (storyIndex === sortedEvents.length) {
    return undefined // last item
  } else if (storyIndex === -1) {
    return undefined // not found
  } else if (storyIndex < sortedEvents.length) {
    return sortedEvents[storyIndex + 1]
  }
}

export const StoryDetailMapping = {
  '/germany': GermanyStoryDetails,
  '/uk': UkStoryDetails,
  '/poland': PolandStoryDetails,
  '/eu': EUStoryDetails,
  '/turkey': TurkeyStoryDetails,
}
