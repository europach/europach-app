import { createSelector } from 'reselect'

export const germanySelector = state => state.GermanyEvents
export const ukSelector = state => state.UkEvents

export const ukRoutingEvents = createSelector(
  ukSelector, (ukEvents) => { return ukEvents.filter(item => item.logics.includes('routing')) }
)

export const germanyRoutingEvents = createSelector(
  germanySelector, (germanyEvents) => { return germanyEvents.filter(item => item.logics.includes('routing')) }
)