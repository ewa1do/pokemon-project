import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPokemon } from '../../../redux/actions/eventActions';

export const Searchbar = () => {
  const { pokedex, loading, query } = useSelector(
    (state) => state.events
  );

  const dispatch = useDispatch();

  const [q, setQ] = useState('');

  const handleSearch = ({ target }) => {
    setQ(target.value);
    dispatch(searchPokemon(target.value));
  };

  return (
    <input
      className='searchbar'
      type='search'
      placeholder='Buscar'
      name='search'
      value={q}
      onChange={handleSearch}
      autoComplete='off'
    />
  );
};
