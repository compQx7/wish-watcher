import { parsePoint, parsePrice } from "../../src/utils/parser";

describe('parsePrice', () => {
    test.each([
        ['$12.34', 'USD', 12.34],
        ['￥1,234', 'JPY', 1234],
        ['1234円', 'JPY', 1234],
    ])('parsePrice(\'%s\', \'%s\')', (value, currency, expected) => {
        expect(parsePrice(value, currency)).toBe(expected);
    });
});

describe('parsePoint', () => {
    test.each([
        ['10%', 10],
        ['12.3%', 12.3],
    ])('parsePoint(\'%s\')', (value, expected) => {
        expect(parsePoint(value)).toBe(expected);
    });
});
