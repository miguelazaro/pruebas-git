const { suma, esPar, dividir, obtenerIniciales, formatearFecha } = require('./funciones');

test('Suma de 2 + 3 es 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('Número 4 es par', () => {
  expect(esPar(4)).toBe(true);
});

test('Dividir 6 entre 2 es 3', () => {
  expect(dividir(6, 2)).toBe(3);
});

test('Obtener iniciales de "Juan Pérez"', () => {
  expect(obtenerIniciales("Juan Pérez")).toEqual("JP");

});

test('Formatear fecha "2024-07-18"', () => {
  expect(formatearFecha("2024-07-18")).toBe("18/07/2024");
});
