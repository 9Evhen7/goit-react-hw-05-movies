import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Wrapper, Img, Button, SNavLink, Thumb } from './styledMoviesDetails';

const MoviesDetails = () => {
  const apiKey = '09c85c81493fa6062c48f1c67aec4f00';
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [vote, setVote] = useState(0);
  const [imgUrl, setImgUrl] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    const getMovieDetails = async () => {
      const response = await axios.get();
      try {
        const { title, overview, genres, vote_average, poster_path } =
          response.data;
        setTitle(title);
        setOverview(overview);
        setGenres([...genres]);
        setVote(vote_average);
        setImgUrl(`https://image.tmdb.org/t/p/w300${poster_path}`);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetails();
  }, [id, location]);

  return (
    <div>
      <Button
        type="button"
        onClick={() => {
          navigate(location.state?.from ?? '/');
        }}
      >
        {'< Go Back'}
      </Button>
      <Wrapper>
        <Img src={imgUrl} alt={'movieImg'} />
        <div>
          <Thumb>
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
          </Thumb>
          <Thumb>
            <SNavLink to="cast" state={{ from: location.state?.from ?? '/' }}>
              Cast
            </SNavLink>
            <SNavLink
              to="reviews"
              state={{ from: location.state?.from ?? '/' }}
            >
              Reviews
            </SNavLink>
          </Thumb>
          <Outlet />
        </div>
      </Wrapper>
    </div>
  );
};

export default MoviesDetails;
