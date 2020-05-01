import { GermanyEvents } from './GermanyEvents'
import { UkEvents } from './UkEvents'
import { TurkeyEvents } from './TurkeyEvents'
import { PolandEvents } from './PolandEvents'
import { EUEvents } from './EUEvents'

export const Events = {
  GermanyEvents,
  UkEvents,
  TurkeyEvents,
  PolandEvents,
  EUEvents,
}

const allEvents = [
  ...Events.GermanyEvents,
  ...Events.UkEvents,
  ...Events.TurkeyEvents,
  ...Events.PolandEvents,
  ...Events.EUEvents,
]
export default allEvents
