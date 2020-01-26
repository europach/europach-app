import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  max-width: 100%;
  border-radius: 7px;
  border: 1px solid #f0f2f5;
  cursor: pointer;
  background-color: #fff;
  transition: transform 0.2s ease-in-out, margin 0.2s linear,
    box-shadow 0.2s linear;
  line-height: 1;
  box-shadow: 3px 10px 61px -8px rgba(0, 0, 0, 0.44);
  -webkit-box-shadow: 3px 10px 61px -8px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 3px 10px 61px -8px rgba(0, 0, 0, 0.44);

  &:hover {
    box-shadow: 0 8px 8px 2px rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
  }
`

export const Img = styled.img`
  src: url(${props => props.src});
  border-radius: 7px;
`

export const CardTextWrapper = styled.div`
  padding: 24px 16px;
`
