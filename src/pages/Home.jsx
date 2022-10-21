import * as API from 'services/api';
import { useState, useEffect } from 'react';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      try {
        const receivedFilms = await API.getPopularMovies();
        setFilms(receivedFilms);
        console.log('receivedFilms', receivedFilms);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {films.map(({ title, id }) => {
          return <li key={id}> {title} </li>;
        })}
      </ul>
    </main>
  );
};

export default Home;
