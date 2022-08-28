import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { HomeScreen } from '../pages/Home/HomeScreen';
import { startLoadingPokemons } from '../redux/actions/eventActions';
import { PokemonScreen } from '../pages/Pokemon/PokemonScreen';

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingPokemons());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<HomeScreen />}
        />

        <Route
          path='pokemon/:id'
          element={<PokemonScreen />}
        />

        <Route
          path='*'
          element={
            <Navigate
              to='/'
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
