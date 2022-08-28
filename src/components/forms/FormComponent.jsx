import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoSaveOutline } from 'react-icons/io5';
import { v4 as uuid } from 'uuid';

import {
  startAddNewPokemon,
  startUpdatePokemon,
} from '../../redux/actions/eventActions';
import { InputComponent } from '../inputs/InputComponent';
import { ButtonComponent } from '../buttons/ButtonComponent';
import { SelectComponent } from './selects/SelectComponent';
import { useModal } from '../../hooks/useModal.js';

import { pokemonTypes } from '../../utilities/pokemonTypes.js';
import { initEvent } from '../../utilities/initEvent';

import DefaultImage from '../../assets/img/silueta.png';
import {
  capitalizeWord,
  validateInputText,
  validateStats,
} from '../../utilities/helpers';

export const FormComponent = ({
  name,
  image,
  attack,
  defense,
  hp,
  type,
  id,
  onChange,
  setValues,
}) => {
  const dispatch = useDispatch();

  const [option, setOption] = useState(pokemonTypes[0]);
  const { selectedPokemon, closeModal } = useModal();

  useEffect(() => {
    if (type) {
      setOption(type);
    } else {
      setOption(pokemonTypes[0]);
    }
  }, [type]);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (validateInputText(name)) return;
    if (validateStats([attack, defense, hp])) return;

    if (!image) image = DefaultImage;

    const capitalName = capitalizeWord(name).trim();

    if (selectedPokemon) {
      dispatch(
        startUpdatePokemon({
          name: capitalName,
          image,
          attack,
          defense,
          hp,
          type: option,
          id,
        })
      );
    } else {
      dispatch(
        startAddNewPokemon({
          name: capitalName,
          image,
          attack,
          defense,
          hp,
          type: option,
          id: uuid(),
        })
      );
    }

    setValues(initEvent);
    closeModal();
  };

  return (
    <form
      className='form-modal'
      onSubmit={handleSubmitForm}
    >
      <div>
        <InputComponent
          type='text'
          label='Nombre'
          name='name'
          value={name}
          onChange={onChange}
          className='text-input'
        />

        <InputComponent
          label='Imagen'
          placeholder='Url'
          name='image'
          value={image}
          onChange={onChange}
          className='text-input'
        />
      </div>

      <div>
        <InputComponent
          type='range'
          label='Ataque'
          name='attack'
          value={attack}
          onChange={onChange}
          className='range-input'
        />

        <InputComponent
          type='range'
          label='Defensa'
          name='defense'
          value={defense}
          onChange={onChange}
          className='range-input'
        />

        <InputComponent
          type='range'
          label='Salud'
          name='hp'
          value={hp}
          onChange={onChange}
          className='range-input'
        />
      </div>

      <div>
        <SelectComponent
          list={pokemonTypes}
          onSelect={setOption}
          value={option}
          className='select-default'
        />

        <ButtonComponent
          Icon={IoSaveOutline}
          type='submit'
          value={`${!!selectedPokemon ? 'Actualizar' : 'Guardar'}`}
          className='button-active'
        />
      </div>
    </form>
  );
};
