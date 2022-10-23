import * as API from 'services/api';
import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import {
  FormEl,
  FieldEl,
  MoviesHeader,
  MoviesMain,
  MoviesButton,
  InfoHeader,
} from 'pages/Movies/Movies.styled';

const Movies = () => {
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [isInfoLoaded, setIsInfoLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      loadSearchedFilms(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadSearchedFilms(value) {
    if (value === '') {
      return;
    }
    try {
      const receivedSearchedFilms = await API.getMovieByQuery(value);
      setSearchedFilms(receivedSearchedFilms);
      setIsInfoLoaded(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);

    if (values.searchQuery === '') {
      return;
    }

    setSearchParams({ query: values.searchQuery });
    loadSearchedFilms(values.searchQuery);
  };

  return (
    <MoviesMain>
      <MoviesHeader>Movies</MoviesHeader>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <FormEl>
            <FieldEl
              name="searchQuery"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search films"
            />
            <MoviesButton type="submit" disabled={isSubmitting}>
              Search
            </MoviesButton>
          </FormEl>
        )}
      </Formik>
      {searchedFilms.length === 0 &&
        searchParams.get('query') &&
        isInfoLoaded && <InfoHeader>No films for this query :(</InfoHeader>}

      <MovieList films={searchedFilms} />
    </MoviesMain>
  );
};

export default Movies;
