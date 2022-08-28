import { types } from '../types/types';

const initialState = {
  isModalOpen: false,
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.openModal:
      return {
        ...state,
        isModalOpen: true,
      };

    case types.closeModal:
      return {
        ...state,
        isModalOpen: false,
      };

    default:
      return state;
  }
};
