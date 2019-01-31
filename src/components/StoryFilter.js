import {
  germanySelector,
  ukSelector,
  germanyRoutingRelationships,
  ukRoutingRelationships,
} from './Selectors'
import { Events } from '../events/Events';

export const storyFilter = (storyUrl, filterBy) => {
  const storyMappings = {
    '/germany': germanySelector,
    '/uk': ukSelector
  }

  const routingMappings = {
    '/germany': germanyRoutingRelationships,
    '/uk': ukRoutingRelationships
  }

  const filterMappings = {
    'base': storyMappings[storyUrl],
    'routing': routingMappings[storyUrl]
  }

  const executeFilter = () => {
    return filterMappings[filterBy](Events);
  }

  return executeFilter();
}