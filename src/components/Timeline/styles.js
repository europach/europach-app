import styled from 'styled-components'

export const TimelineSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-top: solid 1px #eed5ca;
`;

export const DateWrapper = styled.div`
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: inline-block;
  color: #de0512;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #fbe9e7;
  cursor: pointer;
  margin: 0 auto 8px;
  display: flex;
  justify-content: center;
  box-shadow: 3px 10px 61px -8px rgba(0,0,0,0.44);
  -webkit-box-shadow: 3px 10px 61px -8px rgba(0,0,0,0.44);
  -moz-box-shadow: 3px 10px 61px -8px rgba(0,0,0,0.44);
  transition: transform 0.2s ease-in-out, margin 0.2s linear, box-shadow 0.2s linear;

  &:hover {
    box-shadow: 0 8px 8px 2px rgba(0, 0, 0, 0.1);
    transform: scale(1.10);
  }
`

export const FilterContainer = styled.div`
  position: fixed;
  top: 91%;
  left: 0;
  background: #fafafa;
  z-index: 2;
  width: 100%;
  height: 100%;
`

export const FilterContainerInner = styled.div`
  position: fixed;
  left: 50%;
  top: 93%;
  transform: translate(-50%,-50%);
`