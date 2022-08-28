import { FaPlus } from 'react-icons/fa';

import { ButtonComponent } from '../../buttons/ButtonComponent';
import { useModal } from '../../../hooks/useModal';

export const NoContent = () => {
  const { openModal } = useModal();

  return (
    <div className='no-content'>
      <h2>No hay pokemons disponibles</h2>
      <h3>Presiona el boton Nuevo para crear uno</h3>

      <ButtonComponent
        value='Nuevo'
        Icon={FaPlus}
        onClick={openModal}
        className='button-active'
      />
    </div>
  );
};
