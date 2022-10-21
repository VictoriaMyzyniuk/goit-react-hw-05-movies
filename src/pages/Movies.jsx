// import * as onSearchQuery from 'services/api';
// import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
const Movies = () => {
  // const [searchedFilms, setsearchedFilms] = useState([]);

  // useEffect(() => {
  //   async function loadSearchedFilms(values) {
  //     try {
  //       const receivedSearchedFilms = await onSearchQuery.getMovieByQuery(
  //         values
  //       );
  //       setsearchedFilms(receivedSearchedFilms);
  //       console.log('receivedFilms', receivedSearchedFilms);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  // }, []);

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
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
      {/* <ul>
        {searchedFilms.map(({ title, id }) => {
          return <li key={id}> {title} </li>;
        })}
      </ul> */}
    </main>
  );
};

export default Movies;
