import { initEvent } from './initEvent';

const { name, image, type, attack, defense, hp } = initEvent;

describe('Pruebas en initEvent.js', () => {
  test('Debe ser un Objeto', () => {
    expect(typeof initEvent).toBe('object');
  });

  test('No debe ser un objeto vacio', () => {
    expect(Object.keys(initEvent).length).toBeGreaterThan(0);
  });

  test('Debe tener 6 valores', () => {
    expect(Object.keys(initEvent).length).toEqual(6);
  });

  test('Los valores name, image y type deben inicializarse como un string vacio', () => {
    expect(name).toEqual('');
    expect(image).toEqual('');
    expect(type).toEqual('');
  });

  test('Los valores attack, defense y hp deben inicializarse en 0', () => {
    expect(attack).toEqual(0);
    expect(defense).toEqual(0);
    expect(hp).toEqual(0);
  });
});
