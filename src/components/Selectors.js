import { createSelector } from 'reselect'

const sortByDate = dateArray => {
  return dateArray.sort((a,b) => {
    return new Date(a.startDate) - new Date(b.startDate);
  });
}

export const germanySelector = state => state.GermanyEvents
export const ukSelector = state => state.UkEvents

export const routingSelector = createSelector(
  germanySelector,
  ukSelector,
  (germanyEvents, ukEvents) => {
    let childItems = ukEvents.filter(item => item.logics.includes('routing'))
    let parentItems = [ ...germanyEvents, ...childItems ]
    return sortByDate(parentItems);
  }
)

// export const librarySelector =
// export const programmingSelector =
// export const everythingSelector =