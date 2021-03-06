import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TitleText = styled.h1`
  font-family: 'Lekton', serif;
  color: rgb(0, 0, 0, 0.75);
  margin: 0;
  font-weight: 400;
  line-height: 1.25;
`

export const H2 = styled.h2`
  font-family: 'Lekton', serif;
  color: rgb(0, 0, 0, 0.8);
  font-weight: 400;
  font-size: 24px;
  margin: 0;
`

export const ByLine = styled.div`
  font-family: 'Lekton', serif;
  color: #6f6f6f;
  font-weight: 400;
  font-size: 16px;
  padding-top: 8px;
`

export const SubHeadText = styled.p`
  font-family: 'Lekton', serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
`

export const BodySubHead = styled.p`
  font-family: 'Lekton', serif;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1.3;
`

export const BodyText = styled.p`
  font-family: 'Lekton', serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1.3;
`

export const EventQuote = styled.div`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-style: italics;
  color: rgba(0, 0, 0, 0.7);
  line-height: 24px;
  margin-top: 0px;
  margin-bottom: 32px;
`

export const DateRedThin = styled.span`
  font-family: 'Lekton', serif;
  font-size: 13px;
  color: #de0512;
`

export const EventTitle = styled.h1`
  font-size: 28px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  line-height: 1.2;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
`

export const EventCardTitle = styled.p`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  color: rgba(0, 0, 0, 0.7);
  line-height: 24px;
  margin-top: 0;
  font-weight: bold;
`

export const EventSubhead = styled.h2`
  font-size: 20px;
  font-family: 'Lekton', serif;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.75);
  margin: 0;
`

export const EventBody = styled.p`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  color: rgba(0, 0, 0, 0.7);
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 32px;
`

export const Paragraph = styled.p`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  color: rgba(0, 0, 0, 0.7);
  line-height: 24px;
  margin-top: 0;
`

export const EventSpan = styled.span`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.4;
`

export const EventSources = styled.div`
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  font-weight: semi-bold;
  color: rgba(0, 0, 0, 0.7);
`

export const Button = styled.button`
  padding: 16px;
  border: 1px solid #e30613;
  border-radius: 3px;
  background-color: #e30613;
  color: white;
  min-width: 158px;
  font-family: 'Lekton', serif;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background: #c90000;
  }
`

export const ImageWrapper = styled.div`
  margin: 16px 0 32px;
`

export const ResponsiveImg = styled.img`
  src: url(${props => props.src});
  max-width: 100%;
  width: ${props => props.width};
  height: auto;
  padding ${props => props.padding || 0};
  border: none;
  opacity ${props => props.opacity || 1};
`

export const Img = styled.img`
  src: url(${props => props.src});
  max-width: 100%;
  border: none;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.75);
`

export const Section = styled.div`
  padding: ${props => props.padding || '12px 0'};
`

export const RedLineWrapper = styled.div`
  border-left: 1px solid #eed5ca;
  margin-left: 16px;
`

export const ModalTitle = styled.h1`
  font-size: 36px;
  font-family: 'Lekton', serif;
  color: rgba(0, 0, 0, 0.75);
  margin: 0;
`

export const Panel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  padding: ${props => props.padding || '0'};
  margin: 0;
  background: ${props => props.background || '#fafafa'};
`

export const PanelInner = styled.div`
  max-width: 660px;
  width: 100%;
  padding: ${props => props.padding || '0'};

  @media (max-width: 468px) {
    max-width: 85%;
  }
`
