import { useDispatch, useSelector } from 'react-redux';
import {
  uiCloseModal,
  uiOpenModal,
} from '../redux/actions/UIActions';

export const useModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.UI);

  const closeModal = () => {
    dispatch(uiCloseModal());
  };

  const openModal = () => {
    dispatch(uiOpenModal());
  };

  return { isModalOpen, closeModal, openModal };
};
