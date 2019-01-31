import { createSelector } from 'reselect'

const sortByDate = dateArray => {
  return dateArray.sort((a,b) => {
    return new Date(a.startDate) - new Date(b.startDate);
  });
}

export const germanySelector = state => state.GermanyEvents
export const ukSelector = state => state.UkEvents

const ukRoutingEvents = createSelector(
  ukSelector, (ukEvents) => { return ukEvents.filter(item => item.logics.includes('routing')) }
)

const germanyRoutingEvents = createSelector(
  germanySelector, (germanyEvents) => { return germanyEvents.filter(item => item.logics.includes('routing')) }
)

export const germanyRoutingRelationships = createSelector(
  germanySelector,
  ukRoutingEvents,
  (germanyEvents, ukRoutingEvents) => {
    return sortByDate([ ...germanyEvents, ...ukRoutingEvents ]);
  }
)

export const ukRoutingRelationships = createSelector(
  ukSelector,
  germanyRoutingEvents,
  (ukEvents, germanyRoutingEvents) => {
    return sortByDate([ ...ukEvents, ...germanyRoutingEvents ]);
  }
)