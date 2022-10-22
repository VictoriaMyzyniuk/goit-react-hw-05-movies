import { useParams, useLocation } from 'react-router-dom';
import * as API from 'services/api';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const MovieDetails = id => {
  const { movieId } = useParams();

  const location = useLocation();
  console.log('location', location.state);
  const backLink = location.state?.from ?? '/';

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    async function loadFilmById(movieId) {
      try {
        const movieResponse = await API.getMovieById(movieId);

        setMovieInfo(movieResponse);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadFilmById(movieId);
  }, [movieId]);

  return (
    <>
      {movieInfo && (
        <div>
          <button>
            <StyledLink to={backLink}>Go back</StyledLink>
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
            alt={movieInfo.title}
          />
          <h1>
            {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
          </h1>
          <p>User Score {Math.round(movieInfo.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movieInfo.overview}</p>
          <h3>Genres</h3>
          <p>{movieInfo.genres.map(genre => genre.name).join(', ')}</p>
          <p>Additional information</p>
          <ul>
            <li>
              <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
            </li>
            <li>
              <StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
