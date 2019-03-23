# Data Entry

Please be precise with data entry. When data is entered incorrectly the event page many not work.

### Formatting

The following is a blank format, if data does not exist - please leave the fields empty.

```
  {
    name: ``,
    url: ``,
    body: [
      {
        type: 'paragraph',
        content: ``
      },
    ],
    externalLinks: [],
    sources: [],
    startDate: '',
    endDate: '',
    logics: [],
    linksWith: [],
    baseStory: baseStory,
  },
```

The following is a populated event

```
  {
    name: `germany event that happened last year`,
    url: `germany_event_that_happened`,
    body: [
      {
        type: 'paragraph',
        content: `there was a germany event that happened last year, carnival was fun!`
      },
      {
        type: 'quote',
        content: `Matt had fun at carnival`
      },
      {
        type: 'audio',
        content: `http://edm-sounds.com/best-party`
      },
      {
        type: 'video',
        content: `http://youtube.com/best-party`
      },
    ],
    externalLinks: [
      {
        url: `http://best-party.com/beats`,
        text: `fun`
      },
      {
        url: `http://melbourne.com/coffee`,
        text: `living on good coffee`
      },
    ],
    sources: [
          {
        type: 'link',
        content: 'Candice, matts friend wrote an article',
        url: 'http://fake-article.com'
      },
      {
        type: 'text',
        content: 'Simon said carnival was fun'
      }
    ],
    startDate: '1977/12/22',
    endDate: '1981/1/27',
    logics: [LOGICS.publicHealth, LOGICS.mutualHelp],
    linksWith: ['url-to-other-public-event'],
    baseStory: baseStory,
  },
```

### logics

Here is a list of the available logics

```
  bestPractice
  citizenship
  collaborativeGovernance
  deCriminalisation
  dissent
  evidence
  humanitarianism
  humanRights
  moralizing
  mutualHelp
  publicHealth
  securitisation
  socialJustice
```

### Common errors

#1. Incorrect logics, we require an exact matches for the logic text e.g PublicHealth should be publicHealth.

#2. Events with the same url, each event should have a unique url - usually we use the first 4 words, lowercase and separated by dashes and most of the time it is unique. Occasionally it isn't and you'll need to ad a unique word, I would add a year as a suffix.

#3. Duplicate keys, currently we can only have one body, sources and external links per event.

#4. Incorrect links_with, the links with item/s needs to exactly match the url of the corresponding story.

## Event directories

To change data of an event please update:

- EU events: src/events/EUEvents.js
- Germany events: src/events/GermanyEvents.js
- Poland events: src/events/PolandEvents.js
- Turkey events: src/events/TurkeyEvents.js
- Uk events: src/events/UkEvents.js

## Story Details

To change the title, author or sub text of a story please update:

- src/filters/storyDetails.js

# Developers

Made with [Create React App](https://github.com/facebook/create-react-app). Checkout the documentation for how to build, eject, upgrade etc.

Deployed with [Netlify](netlify.com). Builds and DNS config lives here.
