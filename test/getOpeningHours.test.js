const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('should return the right opening hours to valid parameters', () => {
    const closed = 'The zoo is closed';
    const open = 'The zoo is open';
    expect(getOpeningHours('Sunday', '09:30-AM')).toBe(open);
    expect(getOpeningHours('Sunday', '07:30-AM')).toBe(closed);
    expect(getOpeningHours('wedNesDAY', '09:30-AM')).toBe(open);
    expect(getOpeningHours('wedNesDAY', '04:30-pm')).toBe(open);
    expect(getOpeningHours('wedNesDAY', '09:30-PM')).toBe(closed);
    expect(getOpeningHours('wedNesDAY', '12:30-AM')).toBe(closed);
  });
  it('should return all opening hours when receiving to arguments', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('should should throw error if day argument is not a valid weekday', () => {
    expect(() => getOpeningHours('março')).toThrow();
    expect(() => getOpeningHours('Sunday', '09:30-AM')).not.toThrow();
    expect(() => getOpeningHours('mOndAY', '09:30-AM')).not.toThrow();
    expect(() => getOpeningHours('março', '09:30-AM')).toThrowError('The day must be valid. Example: Monday');
  });
  it('should should throw error if hour argument is not a valid hour', () => {
    expect(() => getOpeningHours('Monday', '09:70-AM')).toThrow();
    expect(() => getOpeningHours('Monday', '09:70-AM')).toThrowError('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Sunday', '13:30-AM')).toThrowError('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Sunday', '1a:30-AM')).toThrowError('The hour should represent a number');
    expect(() => getOpeningHours('Sunday', '11:3u-AM')).toThrowError('The minutes should represent a number');
    expect(() => getOpeningHours('Sunday', '11:30-fM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('should should return \'The zoo is closed\' when receving \'Monday\' as argument', () => {
    expect(getOpeningHours('Monday', '09:30-AM')).toBe('The zoo is closed');
  });
});
