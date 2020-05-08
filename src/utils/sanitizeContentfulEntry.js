import { LOGICS } from '../logics/logics'

const sanitizeContentfulEntry = entry => ({
  name: entry.fields.name || '',
  url: entry.fields.url || '',
  body: entry.fields.body || [],
  externalLinks: entry.fields.externalLinks || [],
  sources: entry.fields.sources || [],
  startDate: entry.fields.startDate || '',
  endDate: entry.fields.endDate || '',
  logics: (entry.fields.logics || []).map(logic => LOGICS[logic]),
  linksWith: entry.fields.linksWith || [],
  baseStory: entry.fields.baseStory || '',
})

export default sanitizeContentfulEntry
