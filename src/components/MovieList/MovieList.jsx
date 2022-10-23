import { useLocation } from 'react-router-dom';
import {
  StyledLinkMovie,
  List,
  Item,
} from 'components/MovieList/MovieList.styled';
import PropTypes from 'prop-types';

const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <List>
      {films.map(({ title, id }) => {
        return (
          <Item key={id}>
            <StyledLinkMovie to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </StyledLinkMovie>
          </Item>
        );
      })}
    </List>
  );
};
export default MovieList;

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
