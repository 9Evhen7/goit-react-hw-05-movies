import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.map(({ id, original_title }) => {
        return (
          <div key={id}>
            <Link to={`${id}`}>
              <h2>{original_title}</h2>
              <p>id:{id}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};
