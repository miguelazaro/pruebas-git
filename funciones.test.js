const { suma, esPar, dividir, obtenerIniciales, formatearFecha } = require('./funciones');

describe('Pruebas de las funciones', () => {
    
    test('suma: Devuelve la suma de dos números', () => {
        expect(suma(2, 3)).toBe(5);
        expect(suma(-2, 2)).toBe(0);
        expect(suma(102, 62)).toBe(164);
    });

    test('esPar: Devuelve true si el número es par y false si es impar', () => {
        expect(esPar(2)).toBe(true); 
        expect(esPar(18)).toBe(true); 
        expect(esPar(49)).toBe(false); 
    });

    test('dividir: Devuelve "Error" si el divisor es 0', () => {
        expect(dividir(10, 0)).toBe("Error");
        expect(dividir(1000, 0)).toBe("Error");
    });

    test('dividir: Devuelve el resultado de la división', () => {
        expect(dividir(10, 2)).toBe(5);
        expect(dividir(9, 3)).toBe(3);
    });

    test('obtenerIniciales: Devuelve las iniciales del nombre completo', () => {
        expect(obtenerIniciales("Miguel Lazaro")).toBe('YV');
        expect(obtenerIniciales("Jesus Gonzales")).toBe('MH');
        expect(obtenerIniciales("Ana")).toBe('A');
    });

    test('formatearFecha: Devuelve la fecha en formato DD/MM/YYYY', () => {
        expect(formatearFecha("2020-02-18")).toBe('18/02/2020');
        expect(formatearFecha("01-01-2022")).toBe('01/01/2022');
        expect(formatearFecha("2025-01-04")).toBe('04/01/2025');
    });

});
