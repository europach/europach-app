const contentful = require('contentful-management')
const fs = require('fs')

const ACCESS_TOKEN = ''
const FILE_PATH = './src/assets/rawEntries.json'

const rawdata = fs.readFileSync(FILE_PATH)
const events = JSON.parse(rawdata)

const client = contentful.createClient({
  accessToken: ACCESS_TOKEN,
})

client
  .getSpace('c5hh5jx0dh59')
  .then(space => {
    events.forEach(event => {
      space.createEntry('event', {
        fields: {
          name: {
            'en-US': event.name,
          },
          url: {
            'en-US': event.url,
          },
          body: {
            'en-US': event.body,
          },
          externalLinks: {
            'en-US': event.externalLinks,
          },
          sources: {
            'en-US': event.sources,
          },
          startDate: {
            'en-US': event.startDate,
          },
          logics: {
            'en-US': event.logics.map(logic => logic.filter),
          },
          linksWith: {
            'en-US': event.linksWith,
          },
          baseStory: {
            'en-US': event.baseStory,
          },
        },
      })
    })
  })
  .then(entry => console.log(entry))
  .catch(console.error)
