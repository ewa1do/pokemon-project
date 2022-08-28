import { useDispatch, useSelector } from 'react-redux';
import {
  uiCloseModal,
  uiOpenModal,
} from '../redux/actions/UIActions';

import { clearSelectedPokemon } from '../redux/actions/eventActions';

export const useModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.UI);

  const { selectedPokemon } = useSelector((state) => state.events);

  const closeModal = () => {
    dispatch(clearSelectedPokemon());
    dispatch(uiCloseModal());
  };

  const openModal = () => {
    dispatch(uiOpenModal());
  };

  return { isModalOpen, selectedPokemon, closeModal, openModal };
};
