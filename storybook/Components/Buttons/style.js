import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 150px 150px;
`;

export const Button = styled.button`
  min-width: 250px;
  min-height: 75px;
  margin: 20px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
