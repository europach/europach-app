import React from 'react';
import { StoryList, StoryItem, StyledLink, Title } from './styles';
import { TitleText, BodyText } from '../../assets/styles/common';
import StoryCard from '../StoryCard';

export const HomePage = (props) => {
  return (
    <div>
      <Title>
        <TitleText>
          Disentangling European HIV/AIDS Policies: Activism, Citizenship and Health
        </TitleText>

        <BodyText>
          how the history of HIV policy making in Europe has shaped the way we engage with the epidemic today
        </BodyText>

      </Title>
      <StoryList>
        <StoryItem>
          <StyledLink to='/germany'>
            <StoryCard name="Germany: Prison Context"/>
          </StyledLink>
        </StoryItem>

        <StoryItem>
          <StyledLink to='/uk'>
            <StoryCard name="Uk: Protective Masks for Police"/>
          </StyledLink>
        </StoryItem>

        <StoryItem>
          <StyledLink to='/poland'>
            <StoryCard name="Poland"/>
          </StyledLink>
        </StoryItem>

        <StoryItem>
          <StyledLink to='/turkey'>
            <StoryCard name="Turkey"/>
          </StyledLink>
        </StoryItem>
      </StoryList>

      <BodyText>
        Disclaimer: Please note that the reading and interpretation of legislative instruments for the purposes of this map is necessarily partial and may not be up to date or accurate for the purposes of legal action or defence.
      </BodyText>
    </div>
  )
}