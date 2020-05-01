import Joi from '@hapi/joi'
import events from './Events'
import { LOGICS } from '../logics/logics'

const eventsSchema = Joi.array().items(
  Joi.object({
    name: Joi.string().required(),
    url: Joi.string().required(),
    body: Joi.array()
      .items(
        Joi.object({
          type: 'paragraph',
          content: Joi.string(),
        }),
      )
      .min(1),
    externalLinks: Joi.array().items(
      Joi.object({
        url: Joi.string().required(),
        text: Joi.string(),
      }),
    ),
    sources: Joi.array().items(
      Joi.alternatives().try(
        Joi.object({ type: 'text', content: Joi.string() }),
        Joi.object({ type: 'link', content: Joi.string(), url: Joi.string() }),
      ),
    ),
    startDate: Joi.string().required(),
    endDate: Joi.string()
      .allow('')
      .required(),
    logics: Joi.array().items(Joi.alternatives().try(...Object.values(LOGICS))),
    linksWith: Joi.array().items(Joi.string()),
    baseStory: Joi.string().valid('eu', 'germany', 'poland', 'turkey', 'uk'),
  }),
)

it('has the correct amount of events', () => {
  expect(events.length).toEqual(230)
})

it('has the correct structure', () => {
  const result = eventsSchema.validate(events)
  expect(result).not.toHaveProperty('error')
})
