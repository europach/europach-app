import styled from 'styled-components'

export const CheckboxList = styled.ul`
  list-style-type: none;
  padding: 16px 0;
  border-bottom: solid 1px #f1916e;
  margin: 0 0 24px 0;
`;

// check f1916e

export const CheckboxListTitle = styled.div`
  padding-bottom: 24px;
  font-weight: bold;
`;

export const CheckboxItem = styled.li`
  list-style-type: none;
  width: 40%;
  margin-right: 10%;
  display: inline-block;
  padding-bottom: 16px;

  @media (max-width: 468px) {
    width: 100%;
    margin: 0;
    padding-bottom: 8px;
  }
`;

export const ButtonContainer = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CancelButton = styled.div`
  padding: 16px;
  border: none;
  min-width: 158px;
  font-family: 'Lekton', serif;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  color: #f1916e;
  text-align: center;
`;

export const CheckboxText = styled.div`
  padding-left: 16px;
  display: inline-block;
`;