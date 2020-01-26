import { createSelector } from 'reselect'

export const turkeySelector = state => state.TurkeyEvents

const getFilters = logics => logics.map(logic => logic.filter)

export const turkeyBestPracticeEvents = createSelector(
  turkeySelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('bestPractice'),
    )
  },
)

export const turkeyCitizenshipEvents = createSelector(
  turkeySelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('citizenship'),
    )
  },
)

export const turkeyCollaborativeGovernanceEvents = createSelector(
  turkeySelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('collaborativeGovernance'),
    )
  },
)

export const turkeyDeCriminalisationEvents = createSelector(
  turkeySelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('deCriminalisation'),
    )
  },
)

export const turkeyDissentEvents = createSelector(turkeySelector, events => {
  return events.filter(item => getFilters(item.logics).includes('dissent'))
})

export const turkeyEvidenceEvents = createSelector(turkeySelector, events => {
  return events.filter(item => getFilters(item.logics).includes('evidence'))
})

export const turkeyHumanitarianismEvents = createSelector(
  turkeySelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('humanitarianism'),
    )
  },
)

export const turkeyHumanRightsEvents = createSelector(
  turkeySelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('humanRights'),
    )
  },
)

export const turkeyMoralizingEvents = createSelector(turkeySelector, events => {
  return events.filter(item => getFilters(item.logics).includes('moralizing'))
})

export const turkeyMutualHelpEvents = createSelector(turkeySelector, events => {
  return events.filter(item => getFilters(item.logics).includes('mutualHelp'))
})

export const turkeyPublicHealthEvents = createSelector(
  turkeySelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('publicHealth'),
    )
  },
)

export const turkeySecuritisationEvents = createSelector(
  turkeySelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('securitisation'),
    )
  },
)

export const turkeySocialJusticeEvents = createSelector(
  turkeySelector,
  events => {
    return events.filter(item =>
      getFilters(item.logics).includes('socialJustice'),
    )
  },
)
