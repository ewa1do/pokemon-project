import { useState } from 'react';

export const useInput = (initialState = {}) => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value,
    });
  };

  const reset = (state = initialState) => {
    setValues(state);
  };

  return [inputValue, setInputValue, handleInputChange, reset];
};
