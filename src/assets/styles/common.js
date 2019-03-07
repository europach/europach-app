import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const TitleText = styled.h1`
  font-family: 'Lekton', sans-serif;
  color: rgb(0,0,0, 0.75);
  margin: 0;
  font-weight: 400;
  line-height: 1.25;
`;

export const H2 = styled.h2`
  font-family: 'Lekton', sans-serif;
  color: rgb(0,0,0, 0.80);
  font-weight: 400;
  font-size: 24px;
  margin: 0;
`;

export const ByLine = styled.div`
  font-family: 'Lekton', sans-serif;
  color: #6f6f6f;
  font-weight: 400;
  font-size: 16px;
  padding-top: 8px;
`;

export const SubHeadText = styled.p`
  font-family: 'Lekton', sans-serif;
  font-size: 14px;
  color: rgba(0,0,0,0.75);
`;

export const BodyText = styled.p`
  font-family: 'Lekton', sans-serif;
  font-size: 16px;
  color: rgba(0,0,0,0.75);
`;

export const DateRedThin = styled.span`
  font-family: 'Lekton', sans-serif;
  font-size: 13px;
  color: #de0512;
`

export const EventBody = styled.p`
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: rgba(0,0,0,0.70);
`

export const EventSpan = styled.span`
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: rgba(0,0,0,0.70);
`

export const Button = styled.button`
    padding: 16px;
    border: 1px solid #e30613;
    border-radius: 3px;
    background-color: #e30613;
    color: white;
    min-width: 158px;
    font-family: 'Lekton', sans-serif;
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
`

export const Img = styled.img`
  src: url(${props => props.src});
  max-width: 100%;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0,0,0,0.75);
`;

export const Section = styled.div`
  padding: 16px 0;
`;

export const RedLineWrapper = styled.div`
  border-left: 1px solid #de0512;;
`