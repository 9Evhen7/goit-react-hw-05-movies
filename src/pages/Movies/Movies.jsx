import { useState } from 'react';
import axios from 'axios';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const apiKey = '09c85c81493fa6062c48f1c67aec4f00';
  axios.defaults.baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`;

  const getMovies = async e => {
    e.preventDefault();
    const response = await axios.get(`&query=${query}`);
    setMovies(prevMovies => [...prevMovies, ...response.data.results]);
  };
  const onInputChange = value => {
    setQuery(value);
  };
  return (
    <>
      <form
        onSubmit={e => {
          getMovies(e);
        }}
      >
        <input
          type="text"
          onChange={e => {
            onInputChange(e.target.value);
          }}
        />
        <button type="submit">search</button>
      </form>

      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
