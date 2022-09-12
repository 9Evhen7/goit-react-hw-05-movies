import { List, ListItem, ItemLink } from './styledMoviesList';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies, path }) => {
  return (
    <List>
      {movies.map(({ id, original_title }) => {
        return (
          <ListItem key={id}>
            <ItemLink to={`${id}`} state={{ from: path }}>
              <h2>{original_title}</h2>
              <p>id:{id}</p>
            </ItemLink>
          </ListItem>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  path: PropTypes.object,
};
