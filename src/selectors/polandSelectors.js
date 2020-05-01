import { createSelector } from 'reselect'

export const polandSelector = events =>
  events.filter(event => event.baseStory === 'poland')

const getFilters = logics => logics.map(logic => logic.filter)

export const polandBestPracticeEvents = createSelector(
  polandSelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('bestPractice'),
    )
  },
)

export const polandCitizenshipEvents = createSelector(
  polandSelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('citizenship'),
    )
  },
)

export const polandCollaborativeGovernanceEvents = createSelector(
  polandSelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('collaborativeGovernance'),
    )
  },
)

export const polandDeCriminalisationEvents = createSelector(
  polandSelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('deCriminalisation'),
    )
  },
)

export const polandDissentEvents = createSelector(polandSelector, events => {
  return events.filter(item => getFilters(item.logics).includes('dissent'))
})

export const polandEvidenceEvents = createSelector(polandSelector, events => {
  return events.filter(item => getFilters(item.logics).includes('evidence'))
})

export const polandHumanitarianismEvents = createSelector(
  polandSelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('humanitarianism'),
    )
  },
)

export const polandHumanRightsEvents = createSelector(
  polandSelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('humanRights'),
    )
  },
)

export const polandMoralizingEvents = createSelector(polandSelector, events => {
  return events.filter(item => getFilters(item.logics).includes('moralizing'))
})

export const polandMutualHelpEvents = createSelector(polandSelector, events => {
  return events.filter(item => getFilters(item.logics).includes('mutualHelp'))
})

export const polandPublicHealthEvents = createSelector(
  polandSelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('publicHealth'),
    )
  },
)

export const polandSecuritisationEvents = createSelector(
  polandSelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('securitisation'),
    )
  },
)

export const polandSocialJusticeEvents = createSelector(
  polandSelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('socialJustice'),
    )
  },
)
