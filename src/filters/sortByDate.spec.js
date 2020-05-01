import { sortByDate } from './sortByDate'

it('sorts by date', () => {
  const first = { startDate: '1980' }
  const second = { startDate: '1990' }
  expect(sortByDate([second, first])).toEqual([first, second])
})
