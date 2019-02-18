import React from 'react';
import { StoryList, StoryItem, StyledLink } from './styles';
import StoryCard from '../StoryCard';

export const HomePage = (props) => {
  return (
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
  )
}