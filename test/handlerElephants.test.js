const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('should return undefined if it receives no arguments', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('should return the right message when it doesnt receive a string as argument', () => {
    const invalidText = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(2)).toBe(invalidText);
    expect(handlerElephants(2, 5, 9)).toBe(invalidText);
    expect(handlerElephants('string')).not.toBe(invalidText);
    expect(handlerElephants(['string'])).toBe(invalidText);
    expect(handlerElephants({ string: 'strings' })).toBe(invalidText);
  });
  it('should return the right property when received as argument', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('name')).toBe('elephants');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual([
      {
        name: 'Ilana',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4,
      },
    ]);
  });
  it('should return the right message when it receives specific strings as argument', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
