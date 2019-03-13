import { createSelector } from 'reselect'

export const euSelector = state => state.EUEvents;

const getFilters = logics => logics.map(logic => logic.filter);

export const euBestPracticeEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('bestPractice')) }
)

export const euCitizenshipEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('citizenship')) }
)

export const euCollaborativeGovernanceEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('collaborativeGovernance')) }
)

export const euCriminalisationEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('criminalisation')) }
)

export const euDeCriminalisationEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('deCriminalisation')) }
)

export const euDissentEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('dissent')) }
)

export const euEvidenceEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('evidence')) }
)

export const euHumanitarianismEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('humanitarianism')) }
)

export const euHumanRightsEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('humanRights')) }
)

export const euMoralizingEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('moralizing')) }
)

export const euMutualHelpEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('mutualHelp')) }
)

export const euPublicHealthEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('publicHealth')) }
)

export const euSecurityEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('security')) }
)

export const euSecuritizationEvents = createSelector(
  euSelector, (events) => { return events.filter(item => getFilters(item.logics).includes('securitization')) }
)