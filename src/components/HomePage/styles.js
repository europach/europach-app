import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StoryList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 32px 0 0;
`

export const StoryItem = styled.li`
  list-style-type: none;
  padding-bottom: 32px;
`

export const StyledLink = styled(Link)`
  color: palevioletred;
  text-decoration: none;
`

export const Title = styled.div`
  padding: 0;
`
