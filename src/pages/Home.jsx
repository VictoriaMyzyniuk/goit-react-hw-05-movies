import * as API from 'services/api';
import { useState, useEffect } from 'react';

import MovieList from 'components/MovieList';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      try {
        const receivedFilms = await API.getPopularMovies();
        setFilms(receivedFilms);
        // console.log('receivedFilms', receivedFilms);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList films={films} />
    </main>
  );
};

export default Home;
