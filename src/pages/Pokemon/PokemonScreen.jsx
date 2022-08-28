import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GiBroadsword, GiShield } from 'react-icons/gi';

import { capitalizeWord } from '../../utilities/helpers';
import { ReturnButton } from '../../components/buttons/return/ReturnButton';

export const PokemonScreen = () => {
  const { id } = useParams();
  const { pokedex } = useSelector((state) => state.events);

  const pokemon = pokedex.filter((poke) => poke.id === Number(id))[0];
  const { name, image, attack, defense, hp, type } = pokemon;

  return (
    <>
      <ReturnButton />
      <div className='container scale-up-center'>
        <div className='card'>
          <div className='card__header'>
            <h4>{name}</h4>
            <h4>{hp}HP</h4>
          </div>

          <img
            src={image}
            className='card__img'
          />

          <div className='card__footer'>
            <div className='stats'>
              <hgroup>
                <i>
                  <GiBroadsword />
                </i>
                <h4>{attack}</h4>
              </hgroup>
              <hgroup>
                <i>
                  <GiShield />
                </i>
                <h4>{defense}</h4>
              </hgroup>
            </div>
            <h4>{capitalizeWord(type)}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
