import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: flex-start;
`;

export const Thumb = styled.div`
  margin-bottom: 24px;
`;

export const Img = styled.img`
  margin-right: 24px;
`;

export const Button = styled.button`
  border: none;
  padding: 2px;
  border-radius: 6px;
  background-color: lightblue;
  cursor: pointer;
  margin-right: 12px;
  margin-bottom: 12px;

  font-size: 11px;
`;

export const SNavLink = styled(NavLink)`
  padding: 4px;
  text-decoration: none;
  color: blue;
  border-radius: 6px;

  &.active {
    color: red;
  }
`;
