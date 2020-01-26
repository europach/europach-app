import React from 'react'
import logo from '../../assets/images/logo.svg'
import { Pannel, PannelInner, StyledLink } from '../../assets/styles/common'

export const AppNav = props => {
  const { background } = props

  return (
    <Pannel padding="40px 0" background={background}>
      <PannelInner>
        <StyledLink to="/">
          <img src={logo} alt="Logo" />
        </StyledLink>
      </PannelInner>
    </Pannel>
  )
}
