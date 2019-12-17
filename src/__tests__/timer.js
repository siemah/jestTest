'use strict';
const { timerGame, infiniteTimerGame, } = require('../timer-functions');

beforeAll(() => {
  jest.useFakeTimers();
});

// mock a timer(not wait the timer and passing the waiting)
it.skip('should not wait 1s to run', () => {
  jest.useFakeTimers();
  timerGame();
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
});

// reset timer to avoid interference between them
describe.skip('reset all timer of they used more than one time', () => {
  // reset timer mocking
  beforeEach(() => {
    jest.useFakeTimers();
  })

  it('should not wait 1s to run', () => {
    timerGame();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });

  it('should passed', () => {
    // jest.useFakeTimers();
    timerGame();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });
  
});
// fast-forward all timers to asserts that all callback runs
test.skip('should call callback after 1s', () => {
  const cb = jest.fn();
  timerGame(cb);
  // at this time cb not called yet (<1s)
  expect(cb).not.toBeCalled();
  // fast forward all timers
  jest.runAllTimers();
  expect(cb).toBeCalled();
  expect(cb).toHaveBeenCalledTimes(1);
});
// like this above but with advanceTimersByTime API
test('should call callback after 1s using advanceTimersByTime API', () => {
  const cb = jest.fn();
  timerGame(cb);
  // at this time cb not called yet (<1s)
  expect(cb).not.toBeCalled();
  // fast forward all timers
  jest.advanceTimersByTime(1000);
  expect(cb).toBeCalled();
  expect(cb).toHaveBeenCalledTimes(1);
});

// fast-forward timer who creating other timer and catch the current timer
describe.skip('infiniteTimerGame', () => {
  test.skip('should schedule a 10s timer after 1s', () => {
    
    const cb = jest.fn();
    infiniteTimerGame(cb);
    // at this time settimeout have been called
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    // fast-forward and exhaust only currently pending timer
    // (but not any new timers that get created during that process)
    jest.runOnlyPendingTimers();
    
    // so our callback function executed
    expect(cb).toBeCalled();
    
    // verify if new timer was created that mean a 10s timer inside 1s timer executed(2nd setTimeout)
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  });
});

