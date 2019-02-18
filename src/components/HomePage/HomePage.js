import React from 'react';
import { StoryList, StoryItem, StyledLink, Title } from './styles';
import StoryCard from '../StoryCard';

export const HomePage = (props) => {
  return (
    <div>
      <Title>
      <h1 style={{margin: 0}}>
        "Disentangling European HIV/AIDS Policies: Activism, Citizenship and Health"
      </h1>

      <p>
        how the history of HIV policy making in Europe has shaped the way we engage with the epidemic today
      </p>
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
      </StoryList>
    </div>
  )
}