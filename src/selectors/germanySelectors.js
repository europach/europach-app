import { createSelector } from 'reselect'

export const germanySelector = state => state.GermanyEvents;

const getFilters = logics => logics.map(logic => logic.filter);

export const germanyBestPracticeEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('bestPractice')) }
)

export const germanyCitizenshipEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('citizenship')) }
)

export const germanyCollaborativeGovernanceEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('collaborativeGovernance')) }
)

export const germanyDeCriminalisationEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('deCriminalisation')) }
)

export const germanyDissentEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('dissent')) }
)

export const germanyEvidenceEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('evidence')) }
)

export const germanyHumanitarianismEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('humanitarianism')) }
)

export const germanyHumanRightsEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('humanRights')) }
)

export const germanyMoralizingEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('moralizing')) }
)

export const germanyMutualHelpEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('mutualHelp')) }
)

export const germanyPublicHealthEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('publicHealth')) }
)

export const germanySecuritisationEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('securitisation')) }
)

export const germanySocialJusticeEvents = createSelector(
  germanySelector, (events) => { return events.filter(item => getFilters(item.logics).includes('socialJustice')) }
)