import { useModal } from '../../../hooks/useModal.js';

export const Overlay = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <div
      className={`${isModalOpen && 'overlay'}`}
      onClick={closeModal}
    ></div>
  );
};
