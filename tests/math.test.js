const math = require('../math');

test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);
})

test('soma 5 + 3 igual a 8', () => {
    expect(math.add(5, 3)).toBe(8);
})

test('soma 10 + -30 igual a -20', () => {
    expect(math.add(10, -30)).toBe(-20);
})

//--------------------------------------------

test('subtrair 5 - 2 igual a 3', () => {
    expect(math.subtract(5, 2)).toBe(3);
})

//--------------------------------------------

test('multiplica 5 * 3 igual a 15', () => {
    expect(math.multiply(5, 3)).toBe(15);
})

//---------------------------------------------

test('divide 10 / 2 igual a 5', () => {
    expect(math.divide(10, 2)).toBe(5);
})
;