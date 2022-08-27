import { useState } from 'react';

export const useInput = (initialState = {}) => {
  const [inputValue, setInputValue] = useState(initialState);

  const reset = () => setInputValue(initialState);

  const handleInputChange = ({ target }) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value,
    });
  };

  return [inputValue, handleInputChange, reset];
};
