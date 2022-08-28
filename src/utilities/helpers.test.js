import { pokemonTypes } from './pokemonTypes';
import { capitalizeWord } from './helpers';

describe('Pruebas en helpers.js', () => {
  describe('Para la función capitalizeWord', () => {
    test('Debe retornar un String con el primer caracter en Mayúscula', () => {
      for (let type in pokemonTypes) {
        const capitalType =
          type.slice(0, 1).toUpperCase() + type.slice(1);

        expect(capitalizeWord(type)).toEqual(capitalType);
      }
    });

    test('El string no debe estar vacio', () => {
      const testStr = 'test';
      expect(capitalizeWord(testStr).length).toBeGreaterThan(0);
    });
  });
});
