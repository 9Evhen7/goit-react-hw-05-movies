import { useState } from 'react';
import axios from 'axios';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Input, Button, Form } from './styledMovies';

const Movies = () => {
  const apiKey = '09c85c81493fa6062c48f1c67aec4f00';
  axios.defaults.baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`;

  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    async function fetchMovies() {
      const response = await axios.get(`&query=${query}`);
      setMovies([...response.data.results]);
    }
    setMovies([]);
    fetchMovies();
  }, [query]);

  const getMovies = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.namedItem('search').value });
    form.reset();
  };

  return (
    <>
      <Form
        onSubmit={e => {
          getMovies(e);
        }}
      >
        <Input name="search" type="text" />
        <Button type="submit">search</Button>
      </Form>

      {movies.length > 0 && <MoviesList movies={movies} path={location} />}
    </>
  );
};

export default Movies;
