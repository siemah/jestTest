const functions = require('../src/functions');

test('add 2 to 2 expect 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('add 2 to 2 not be 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

test('to be falsy value', () => {
    expect(functions.checkValue(0)).toBeFalsy()
})

test('to be falsy value', () => {
    expect(functions.checkValue(null)).toBeNull();
})


