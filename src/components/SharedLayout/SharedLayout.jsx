import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { SNavLink, Navigation, Container } from './styledSharedLayout';

export const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <SNavLink to="/">Home</SNavLink>
        <SNavLink to="/movies">Movies</SNavLink>
      </Navigation>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
