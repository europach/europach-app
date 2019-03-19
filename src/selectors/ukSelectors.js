import { createSelector } from 'reselect'

export const ukSelector = state => state.UkEvents;

const getFilters = logics => logics.map(logic => logic.filter);

export const ukBestPracticeEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('bestPractice')) }
)

export const ukCitizenshipEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('citizenship')) }
)

export const ukCollaborativeGovernanceEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('collaborativeGovernance')) }
)

export const ukDeCriminalisationEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('deCriminalisation')) }
)

export const ukDissentEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('dissent')) }
)

export const ukEvidenceEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('evidence')) }
)

export const ukHumanitarianismEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('humanitarianism')) }
)

export const ukHumanRightsEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('humanRights')) }
)

export const ukMoralizingEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('moralizing')) }
)

export const ukMutualHelpEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('mutualHelp')) }
)

export const ukPublicHealthEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('publicHealth')) }
)

export const ukSecuritisationEvents = createSelector(
  ukSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('securitisation')) }
)