import React from 'react'
import { AppFooterInner, FooterItem } from './styles'
import { ResponsiveImg, DateRedThin, Pannel } from '../../assets/styles/common'
import husiegelImg from '../../assets/images/footer_husiegel.jpg'
import goldsmithsImg from '../../assets/images/footer_goldsmiths.png'
import basImg from '../../assets/images/footer_uni_bas.jpg'
import krakowImg from '../../assets/images/footer_krakow.jpg'
import heraImg from '../../assets/images/footer_hera.png'
import horizonImg from '../../assets/images/footer_horizon.jpg'

export const AppFooter = () => {
  return (
    <Pannel padding="48px 0 16px" background="white">
      <AppFooterInner>
        <DateRedThin>copyright 2019 Europach</DateRedThin>
        <FooterItem>
          <ResponsiveImg width="100px" src={husiegelImg} />
        </FooterItem>
        <FooterItem>
          <ResponsiveImg width="200px" src={goldsmithsImg} />
        </FooterItem>
        <FooterItem>
          <ResponsiveImg width="200px" src={basImg} />
        </FooterItem>
        <FooterItem>
          <ResponsiveImg width="200px" src={krakowImg} />
        </FooterItem>
        <FooterItem>
          <ResponsiveImg width="200px" src={heraImg} />
        </FooterItem>
        <FooterItem>
          <ResponsiveImg width="200px" src={horizonImg} />
        </FooterItem>
      </AppFooterInner>
    </Pannel>
  )
}
