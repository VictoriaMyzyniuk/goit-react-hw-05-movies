import * as API from 'services/api';
import { useState, useEffect } from 'react';

import MovieList from 'components/MovieList/MovieList';
import { HomeHeader, Main } from 'pages/Home/Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      try {
        const receivedFilms = await API.getPopularMovies();
        setFilms(receivedFilms);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadFilms();
  }, []);

  return (
    <Main>
      <HomeHeader>Trending today</HomeHeader>
      <MovieList films={films} />
    </Main>
  );
};

export default Home;
