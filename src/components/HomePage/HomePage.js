import React from 'react'
import { StoryList, StoryItem, StyledLink, Title } from './styles'
import {
  TitleText,
  BodyText,
  Panel,
  PanelInner,
} from '../../assets/styles/common'
import StoryCard from '../StoryCard'
import AppNav from '../AppNav'
import AppFooter from '../AppFooter'
import { storyDetails } from '../../filters/storyDetails'

const createStoryItem = item => {
  const { title, researcher, path } = item

  return (
    <StoryItem>
      <StyledLink to={path}>
        <StoryCard name={title} researcher={researcher} />
      </StyledLink>
    </StoryItem>
  )
}

export const HomePage = props => {
  return (
    <Panel>
      <AppNav />
      <PanelInner>
        <Title>
          <TitleText>
            Disentangling European HIV/AIDS Policies: Activism, Citizenship and
            Health
          </TitleText>

          <BodyText>
            This interactive policy map has been developed as part of the
            “Disentangling European HIV/AIDS Policies: Activism Citizenship and
            Health” (EUROPACH) research project for researchers, activists and
            advocates engaging in the entangled policy fields of HIV/AIDS, drug
            use, sex work, migration and prisons. It presents events from
            “stories” of criminalisation in relation to HIV/AIDS in Europe that
            took place in Germany, Poland, Turkey and the UK. Users are invited
            to select a story from the options below, and to explore the events
            that make up each story. You can do this chronologically by moving
            from one event to the next based on the timeline of each story, or
            you can follow the implicated policies and other actors that
            introduce “links” between events across time and place. Connecting
            all five stories are the cultural “logics” that we have analysed to
            underlie the events. Users are thus able to navigate through these
            narratives by disentangling their actors and arguments, and
            exploring the conflicting and complimentary logics that they enact
            or upon which they are based.
          </BodyText>
        </Title>

        <StoryList>
          `{' '}
          {storyDetails.map(item => {
            return createStoryItem(item)
          })}
          `
        </StoryList>

        <BodyText>
          Disclaimer: Please note that the reading and interpretation of
          legislative instruments for the purposes of this map is necessarily
          partial and may not be up to date or accurate for the purposes of
          legal action or defence.
        </BodyText>
      </PanelInner>
      <AppFooter />
    </Panel>
  )
}
