import { createSelector } from 'reselect'

const sortByDate = dateArray => {
  return dateArray.sort((a,b) => {
    return new Date(a.startDate) - new Date(b.startDate);
  });
}

export const germanyPrisionContextSelector = state => state.GermanyPrisionContextEvents
export const ukProtectiveMasksForPoliceSelector = state => state.UkProtectiveMasksForPoliceEvents

export const routingSelector = createSelector(
  germanyPrisionContextSelector,
  ukProtectiveMasksForPoliceSelector,
  (germanyPrisionContextEvents, ukProtectiveMasksForPolice) => {
    let childItems = ukProtectiveMasksForPolice.filter(item => item.logics.includes('routing'))
    let parentItems = [ ...germanyPrisionContextEvents, ...childItems ]
    return sortByDate(parentItems);
  }
)

// export const librarySelector =
// export const programmingSelector =
// export const everythingSelector =