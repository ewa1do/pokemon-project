import { types } from '../types/types';

export const uiOpenModal = () => {
  return {
    type: types.openModal,
  };
};

export const uiCloseModal = () => {
  return {
    type: types.closeModal,
  };
};
