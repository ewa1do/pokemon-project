import Swal from 'sweetalert2';

export const capitalizeWord = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};

export const validateInputText = (input = '') => {
  if (input.length < 2) {
    return Swal.fire('Nombre muy corto', 'Validation Error', 'error');
  }
};

export const validateStats = (stats = []) => {
  const invalidStats = stats
    .map((stat) => Number(stat))
    .some((stat) => stat === 0);

  if (invalidStats) {
    return Swal.fire(
      'Los stats no pueden ser 0',
      'Validation Error',
      'error'
    );
  }
};
