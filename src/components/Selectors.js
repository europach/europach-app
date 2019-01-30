import { createSelector } from 'reselect'

export const germanyPrisionContextSelector = state => state.GermanyPrisionContextEvents
const ukProtectiveMasksForPoliceSelector = state => state.UkProtectiveMasksForPoliceEvents

export const routingSelector = createSelector(
  germanyPrisionContextSelector,
  ukProtectiveMasksForPoliceSelector,
  (germanyPrisionContextEvents, ukProtectiveMasksForPolice) => {
    return ukProtectiveMasksForPolice.filter(item => item.logics.includes('routing'))
  }
)

// export const librarySelector = createSelector(
//   germanyPrisionContextSelector,
//   ukProtectiveMasksForPoliceSelector,
//   (subtotal, tax) => ({ total: subtotal + tax })
// )

// export const programmingSelector = createSelector(
//   germanyPrisionContextSelector,
//   ukProtectiveMasksForPoliceSelector,
//   (subtotal, tax) => ({ total: subtotal + tax })
// )

// export const everythingSelector = createSelector(
//   germanyPrisionContextSelector,
//   ukProtectiveMasksForPoliceSelector
// )