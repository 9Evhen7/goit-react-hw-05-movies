import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 24px;
  padding-top: 12px;
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

export const Navigation = styled.nav`
  margin-bottom: 12px;
`;
