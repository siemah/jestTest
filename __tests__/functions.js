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
});

// all toBe methods are used to compare with native types like number, bool, undefined, null ...
// and to test if a custom type like object should use toEqual
class Cls {
    constructor(prop) {
        this.prop = prop;
    }
}
describe("deffirence between toEquak and toStrictEqual", () => {
    test('are not semanticly equal', () => {
        expect(new Cls('s')).toEqual({prop: 's'});
        expect( new Cls('s')).not.toStrictEqual({prop: 's'});
    })
    
})


