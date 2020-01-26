import React from 'react'
import { StyledExternalLink } from './styles'

export const ExternalLink = ({ url, children }) => {
  const cleanUrl = url.startsWith('www') ? `http://${url}` : url
  return <StyledExternalLink href={cleanUrl}>{children}</StyledExternalLink>
}
