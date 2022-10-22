import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map(({ title, id }) => {
        return (
          <li key={id}>
            <StyledLink to={`/movies/${id}`}>{title}</StyledLink>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;
