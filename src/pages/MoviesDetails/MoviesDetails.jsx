import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper } from './styledMoviesDetails';

export const MoviesDetails = () => {
  const apiKey = '09c85c81493fa6062c48f1c67aec4f00';

  const { id } = useParams();
  axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [vote, setVote] = useState(0);
  const [imgUrl, setImgUrl] = useState('');
  //   axios.get().then(info => {
  //     console.log('call server');
  //     const { title, overview, genres, vote_average, poster_path } = info.data;
  //   setTitle(title);
  //   setOverview(overview);
  //   setMovieGenres([...genres]);
  //   setVote(vote_average * 10);
  //   setImgUrl(poster_path);
  //   console.log(info.data.genres);
  //   });

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get();
      try {
        const { title, overview, genres, vote_average, poster_path } =
          response.data;
        setTitle(title);
        setOverview(overview);
        setGenres([...genres]);
        setVote(vote_average * 10);
        setImgUrl(poster_path);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Wrapper>
      {console.log('render')}
      <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt={'movieImg'} />
      <div>
        <h3>{title}</h3>
        <p>Genres:</p>
        <ul>
          {genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
        <p>Vote: {vote}/100</p>
        <p>Overview</p>
        <p>{overview}</p>
      </div>
    </Wrapper>
  );
};
