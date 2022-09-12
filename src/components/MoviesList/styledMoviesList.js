import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: fit-content;
`;

export const ListItem = styled.li`
  margin-bottom: 12px;
  width: 100%;
  padding: 4px;

  &:hover {
    background-color: white;
    border-radius: 6px;
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: darkblue;
`;
