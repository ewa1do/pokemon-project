import { pokemonTypes } from './pokemonTypes.js';

describe('Pruebas en pokemonTypes.test.js', () => {
  test('Debe ser un Array', () => {
    expect(Array.isArray(pokemonTypes)).toBe(true);
  });

  test('No debe tener indices vacios', () => {
    expect(pokemonTypes.every((type) => type !== '')).toBe(true);
  });

  test('Debe tener una longitud igual a 18', () => {
    expect(pokemonTypes.length).toEqual(18);
  });
});
