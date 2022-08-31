import { FaPlus } from 'react-icons/fa';

import { ButtonComponent } from '../../buttons/ButtonComponent';
import { Searchbar } from '../../inputs/searchbar/Searchbar';
import { useModal } from '../../../hooks/useModal';
import Logo from '../../../assets/img/logo.png';

export const Navbar = () => {
  const { openModal } = useModal();

  return (
    <div className='navbar'>
      <hgroup className='title'>
        <h3>Listado de Pokemons</h3>
        <img
          src={Logo}
          className='logo rotate'
        />
      </hgroup>

      <div className='actions'>
        <Searchbar />

        <ButtonComponent
          value='Nuevo'
          Icon={FaPlus}
          onClick={openModal}
        />
      </div>
    </div>
  );
};
