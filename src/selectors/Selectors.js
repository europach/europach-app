import { createSelector } from 'reselect'

export const germanySelector = state => state.GermanyEvents
export const ukSelector = state => state.UkEvents
export const turkeySelector = state => state.TurkeyEvents
export const polandSelector = state => state.PolandEvents

export const ukRoutingEvents = createSelector(ukSelector, ukEvents => {
  return ukEvents.filter(item => item.logics.includes('routing'))
})

export const germanyRoutingEvents = createSelector(
  germanySelector,
  germanyEvents => {
    return germanyEvents.filter(item => item.logics.includes('routing'))
  },
)

export const turkeyRoutingEvents = createSelector(
  turkeySelector,
  turkeyEvents => {
    return turkeyEvents.filter(item => item.logics.includes('routing'))
  },
)

export const polandRoutingEvents = createSelector(
  polandSelector,
  polandEvents => {
    return polandEvents.filter(item => item.logics.includes('routing'))
  },
)
