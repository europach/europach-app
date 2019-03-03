import styled from 'styled-components'

export const CheckboxList = styled.ul`
  list-style-type: none;
  padding: 16px 0;
  border-bottom: solid 1px #f1916e;
  margin: 0 0 24px 0;
`;

// check f1916e

export const CheckboxListTitle = styled.div`
  padding-bottom: 8px;
`;

export const CheckboxItem = styled.li`
  list-style-type: none;
  width: 50%;
  display: inline-block;
  padding-bottom: 8px;
`;

export const ButtonContainer = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CancelButton = styled.span`
  cursor: pointer;
  color: #f1916e;
`;