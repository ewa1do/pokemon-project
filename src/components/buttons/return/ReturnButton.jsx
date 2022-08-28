import { useNavigate } from 'react-router-dom';

export const ReturnButton = () => {
  const navigate = useNavigate();

  const returnBackScreen = () => {
    navigate('/', {
      replace: true,
    });
  };

  return (
    <button
      className='return-button'
      onClick={returnBackScreen}
    >
      Atras
    </button>
  );
};
