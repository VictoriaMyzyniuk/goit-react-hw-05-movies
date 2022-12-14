import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd2c21f22a2d4ccc40e22a6b0b1329764';

export const getPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}`
  );
  return response.data.results;
};

export const getMovieByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );

  return response.data.results;
};

export const getMovieById = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY}&language=eng`
  );

  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
  );

  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );

  return response.data.results;
};
