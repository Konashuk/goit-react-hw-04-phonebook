import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style-type: disc;
`;

export const Button = styled.button`
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

export const Item = styled.li`
  font-size: 18px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
`;
