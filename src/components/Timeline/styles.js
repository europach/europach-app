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
`

export const FilterContainer = styled.div`
  position: fixed;
  top: 91%;
  left: 0;
  background: white;
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