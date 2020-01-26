import React from 'react'
import { Card } from './styles'
import { H2, ByLine } from '../../assets/styles/common'
import { CardTextWrapper } from './styles'

export const StoryCard = props => {
  return (
    <Card>
      <CardTextWrapper>
        <H2>{props.name}</H2>
        <ByLine>{`Researched by: ${props.researcher}`}</ByLine>
      </CardTextWrapper>
    </Card>
  )
}
