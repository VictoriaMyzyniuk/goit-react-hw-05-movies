import { useParams, useLocation, Outlet } from 'react-router-dom';
import * as API from 'services/api';
import { useState, useEffect, Suspense } from 'react';
import {
  StyledLinkCastAndReview,
  Wrapper,
  ButtonCardFilm,
  Img,
  WrapperImg,
  MainWrapper,
  Name,
  Score,
  OverviewGenres,
  ScoreTitle,
  AdditionalList,
  AdditionalItem,
  Message,
} from 'pages/MovieDetails/MovieDetails.styled';
import PropTypes from 'prop-types';

const MovieDetails = id => {
  const { movieId } = useParams();

  const location = useLocation();

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
    <MainWrapper>
      {movieInfo && (
        <>
          <WrapperImg>
            <ButtonCardFilm>
              <StyledLinkCastAndReview to={backLink}>
                Go back
              </StyledLinkCastAndReview>
            </ButtonCardFilm>
            {movieInfo.poster_path ? (
              <Img
                src={`https://image.tmdb.org/t/p/w780${movieInfo.poster_path}`}
                alt={movieInfo.title}
              />
            ) : (
              <Img
                src={`https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg`}
                alt={movieInfo.title}
              />
            )}
          </WrapperImg>
          <Wrapper>
            <Name>
              {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
            </Name>
            <ScoreTitle>
              User Score: &nbsp;
              {Math.round(movieInfo.vote_average * 10)}%
            </ScoreTitle>

            <OverviewGenres>Overview</OverviewGenres>
            <Score>{movieInfo.overview}</Score>
            <OverviewGenres>Genres</OverviewGenres>
            <Score>
              {movieInfo.genres.map(genre => genre.name).join(', ')}
            </Score>
            <OverviewGenres>Additional information</OverviewGenres>
            <AdditionalList>
              <AdditionalItem>
                <StyledLinkCastAndReview
                  to={`/movies/${movieId}/cast`}
                  state={{ from: backLink }}
                >
                  Cast
                </StyledLinkCastAndReview>
              </AdditionalItem>
              <AdditionalItem>
                <StyledLinkCastAndReview
                  to={`/movies/${movieId}/reviews`}
                  state={{ from: backLink }}
                >
                  Reviews
                </StyledLinkCastAndReview>
              </AdditionalItem>
            </AdditionalList>
            <Suspense fallback={<Message>Loading...</Message>}>
              <Outlet />
            </Suspense>
          </Wrapper>
        </>
      )}
    </MainWrapper>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movieInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    })
  ),
};
