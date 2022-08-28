import { useSelector } from 'react-redux';

import { Spinner } from '../../UI/spinners/Spinner';
import { TableRow } from './TableRow';
import { NoContent } from './NoContent';
import { ListComponent } from '../../lists/ListComponent';

export const MainTable = () => {
  const { pokedex, loading, search, query } = useSelector(
    (state) => state.events
  );

  if (pokedex.length === 0 && !loading)
    return <Spinner /> && <NoContent />;

  return (
    <div className='pokemons__container'>
      {loading ? (
        <Spinner />
      ) : (
        <table className='pokemons'>
          <thead className='pokemons__header'>
            <tr className='pokemons__header--row'>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>Ataque</th>
              <th>Defensa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody className='pokemons__body'>
            {query === '' ? (
              <ListComponent
                list={pokedex}
                Component={TableRow}
              />
            ) : (
              <ListComponent
                list={search}
                Component={TableRow}
              />
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};
