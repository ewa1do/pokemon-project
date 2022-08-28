import { useDispatch } from 'react-redux';
import { MdModeEdit, MdDelete, MdOpenInFull } from 'react-icons/md';

import {
  selectPokemon,
  startDeletePokemon,
} from '../../../redux/actions/eventActions';
import { useModal } from '../../../hooks/useModal';
import { ButtonComponent } from '../../buttons/ButtonComponent';

export const TableRow = ({ props }) => {
  const { name, image, attack, defense, iteration, id } = props;

  const dispatch = useDispatch();

  const { openModal } = useModal();

  const handleEdition = () => {
    dispatch(selectPokemon({ ...props }));
    openModal();
  };

  const handleDeletePokemon = () => {
    dispatch(selectPokemon({ ...props }));
    dispatch(startDeletePokemon());
  };

  return (
    <tr
      className={`pokemons__body--row ${
        iteration % 2 !== 0 && 'bg-gray'
      }`}
    >
      <td>{name}</td>
      <td className='img'>
        <img src={image} />
      </td>
      <td>{attack}</td>
      <td>{defense}</td>
      <td>
        <ButtonComponent
          value=''
          Icon={MdOpenInFull}
          link={true}
          id={id}
          className='action-button'
        />

        <ButtonComponent
          value=''
          Icon={MdModeEdit}
          onClick={handleEdition}
          className='action-button'
        />

        <ButtonComponent
          value=''
          Icon={MdDelete}
          onClick={handleDeletePokemon}
          className='action-button'
        />
      </td>
    </tr>
  );
};
