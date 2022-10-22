import * as API from 'services/api';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList';

const Movies = () => {
  const [searchedFilms, setsearchedFilms] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('searchQuery');

  async function loadSearchedFilms(value) {
    try {
      const receivedSearchedFilms = await API.getMovieByQuery(value);
      setsearchedFilms(receivedSearchedFilms);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);

    if (values.searchQuery === '') {
      return;
    }
    loadSearchedFilms(values.searchQuery);
  };

  return (
    <main>
      <h1>Movies</h1>

      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field
              name="searchQuery"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search films"
            />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </Form>
        )}
      </Formik>
      <MovieList films={searchedFilms} />
    </main>
  );
};

export default Movies;
