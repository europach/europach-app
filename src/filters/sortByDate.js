export const sortByDate = dateArray => {
  return dateArray.sort((a, b) => {
    return new Date(a.startDate) - new Date(b.startDate)
  })
}
