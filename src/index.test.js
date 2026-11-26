import * as fns from './index.js';

//for future reference
/*
describe.skip('general checks', () => {
    for (const [name, fn] of Object.entries(fns)) {
        describe(name, () => {
            test('is a function', () => {
                expect(typeof fn).toBe('function');
            });
            test('returns a string', () => {
                expect(typeof fn('string')).toBe('string');
            })
        })
    }
})
*/

describe('testing cap', () => {
    test('first letter capital', () => {
        expect(fns.cap('string')).toBe('String');
    })
})

describe('testing rev', () => {
    test('reverses string', () => {
        expect(fns.rev('string')).toBe('gnirts');
    })
})

describe('testing calculator', () => {
    test('add', () => {
        expect(fns.calculator.add(4, 3)).toBe(7);
    });
    test('subtruct', () => {
        expect(fns.calculator.sub(5, 1)).toBe(4);
    });
    test('divide', () => {
        expect(fns.calculator.div(10, 2)).toBe(5);
    });
    test('multiply', () => {
        expect(fns.calculator.mul(3, 4)).toBe(12);
    })
})

describe('testing caesar cipher', () => {
    test('simple', () => {
        expect(fns.caesar('xyz', 3)).toBe('abc');
    });
    test('upper case', () => {
        expect(fns.caesar('HeLLo', 3)).toBe('KhOOr');
    });
    test('full', () => {
        expect(fns.caesar('Hello, World!', 29)).toBe('Khoor, Zruog!');
    })
})

describe('testing analize array', () => {
    test('min', () => {
        expect(fns.analArr([1,2]).min).toBe(1);
    });
    test('max', () => {
        expect(fns.analArr([1,2]).max).toBe(2);
    });
    test('average', () => {
        expect(fns.analArr([1,8,3,4,2,6]).average).toBe(4);
    });
    test('length', () => {
        expect(fns.analArr([1,2,3]).length).toBe(3);
    })
    test('full', () => {
        expect(fns.analArr([1,8,3,4,2,6])).toStrictEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    })
})