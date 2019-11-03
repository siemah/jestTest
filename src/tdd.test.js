const format2Date = require('./tdd');

describe('timer', () => {
  
  it('should return an object with 0 seconds', () => {
    const result = format2Date(0);
    expect(result).toEqual({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('should return 3 seconds', () => {
    const result = format2Date(3000);
    expect(result).toEqual({
      hours: 0,
      minutes: 0,
      seconds: 3,
    });
  });
  
  it('should return 1 minutes and 0 seconds', () => {
    const result = format2Date((60) * 1000);
    expect(result).toEqual({
      hours: 0,
      minutes: 1,
      seconds: 0,
    });
  });

  it('should return 1 minutes and 15 seconds', () => {
    const result = format2Date((60 + 15) * 1000);
    expect(result).toEqual({
      hours: 0,
      minutes: 1,
      seconds: 15,
    });
  });

  it('should return 2 hour and 0 minutes and 0 seconds', () => {
    const result = format2Date((3600 * 2) * 1000);
    expect(result).toEqual({
      hours: 2,
      minutes: 0,
      seconds: 0,
    });
  });

  it('should return 2 hour and 3 minutes and 4 seconds', () => {
    const result = format2Date((3600 * 2 + 3 * 60 + 4) * 1000);
    expect(result).toEqual({
      hours: 2,
      minutes: 3,
      seconds: 4,
    });
  });

});
