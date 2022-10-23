import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledLink,
  Button,
  Header,
  Message,
} from 'components/SharedLayout/SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Button>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </Button>
          <Button>
            <StyledLink to="/movies">Movies</StyledLink>
          </Button>
        </nav>
      </Header>
      <Suspense fallback={<Message>Loading...</Message>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
