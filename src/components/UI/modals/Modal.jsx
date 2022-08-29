import { useEffect } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

import { useInput } from '../../../hooks/useInput';
import { FormComponent } from '../../forms/FormComponent';
import { useModal } from '../../../hooks/useModal';
import { initEvent } from '../../../utilities/initEvent';
import { ButtonComponent } from '../../buttons/ButtonComponent';

export const Modal = () => {
  const { isModalOpen, selectedPokemon, closeModal } = useModal();
  const [formValues, setFormValues, handleInputChange] =
    useInput(initEvent);

  const handleCloseModal = () => {
    closeModal();
    setFormValues(initEvent);
  };

  useEffect(() => {
    if (selectedPokemon) {
      setFormValues(selectedPokemon);
    } else {
      setFormValues(initEvent);
    }
  }, [selectedPokemon]);

  return (
    <div className={`modal relative ${isModalOpen || 'hidden'}`}>
      <ButtonComponent
        Icon={IoCloseCircleOutline}
        className='closing-tag-button'
        onClick={handleCloseModal}
      />

      <h3>{selectedPokemon ? 'Editar Pokemon' : 'Nuevo Pokemon'}</h3>

      <FormComponent
        {...formValues}
        onChange={handleInputChange}
        setValues={setFormValues}
      />
    </div>
  );
};
