import React from 'react'
import logo from '../../assets/images/logo.svg'
import { Panel, PanelInner, StyledLink } from '../../assets/styles/common'

export const AppNav = props => {
  const { background } = props

  return (
    <Panel padding="40px 0" background={background}>
      <PanelInner>
        <StyledLink to="/">
          <img src={logo} alt="Logo" />
        </StyledLink>
      </PanelInner>
    </Panel>
  )
}
