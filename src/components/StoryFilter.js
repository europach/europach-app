import { routingSelector, germanySelector, ukSelector } from './Selectors'
import { Events } from '../events/Events';

export const storyFilter = (storyUrl, filterBy) => {
  const storyMappings = {
    '/germany': germanySelector,
    '/uk': ukSelector
  }

  const filterMappings = {
    'base': storyMappings[storyUrl],
    'routing': routingSelector
  }

  const executeFilter = () => {
    return filterMappings[filterBy](Events);
  }

  return executeFilter();
}