import Joi from '@hapi/joi'
import { storyDetails } from './storyDetails'

const storyDetailsSchema = Joi.array().items(
  Joi.object({
    path: Joi.string(),
    title: Joi.string(),
    researcher: Joi.string(),
    body: Joi.string(),
    image: Joi.string(),
  }),
)

it('has the correct amount of storyDetails', () => {
  expect(storyDetails.length).toEqual(5)
})

it('has the correct structure', () => {
  const result = storyDetailsSchema.validate(storyDetails)
  expect(result).not.toHaveProperty('error')
})
