import React, { useState, useEffect, createContext } from 'react'
import sanitizeContentfulEntry from '../utils/sanitizeContentfulEntry'
import * as contentful from 'contentful'

const EventsContext = createContext([])

const EventsProvider = props => {
  const [state, setState] = useState([])

  useEffect(() => {
    const client = contentful.createClient({
      space: 'c5hh5jx0dh59',
      accessToken: 'gkn2tZmjVUzFzrbBmLZQ6LHUZSS7pfCPzh9WiiM4hU8',
    })

    client
      .getEntries({ limit: 1000, content_type: 'event' })
      .then(response => {
        const events = response.items.map(sanitizeContentfulEntry)
        setState(events)
      })
      .catch(err => {
        //do nothing
      })
  }, [])

  return (
    <EventsContext.Provider value={state}>
      {props.children}
    </EventsContext.Provider>
  )
}

export { EventsContext, EventsProvider }
