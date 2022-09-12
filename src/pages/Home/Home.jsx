import axios from 'axios';
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { List, ListItem, ItemLink } from './styledHome';

const Home = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const apiKey = '09c85c81493fa6062c48f1c67aec4f00';
  const location = useLocation();

  axios.defaults.baseURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

  useEffect(() => {
    const getPopularFilms = async () => {
      const response = await axios.get();
      try {
        const { results } = response.data;
        setPopularFilms([...results]);
      } catch (error) {
        console.log(response);
        console.log(error);
      }
    };
    getPopularFilms();
  }, []);

  return (
    <List>
      {popularFilms.map(({ id, name, title }) => {
        return (
          <ListItem key={id}>
            <ItemLink to={`/movies/${id}`} state={{ from: location }}>
              {name ? name : title}
            </ItemLink>
          </ListItem>
        );
      })}
      <Outlet />
    </List>
  );
};

export default Home;
