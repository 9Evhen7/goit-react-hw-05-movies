
import { Cast } from 'components/Cast/Cast';
import { Reviwes } from 'components/Reviwes/Reviwes';
import { Movies } from 'pages/Movies/Movies';
import { MoviesDetails } from 'pages/MoviesDetails/MoviesDetails';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';

export const App = () => {

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviwes />} />
        </Route>
      </Routes>
    </div>
  );
};
