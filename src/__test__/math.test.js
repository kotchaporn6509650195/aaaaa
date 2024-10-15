const { add, subtract, multiply } = require('../math');

describe('Math Functions', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  // Add more tests
  test('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('subtracts with negative result', () => {
    expect(subtract(2, 5)).toBe(-3);
  });

  test('multiplies by zero', () => {
    expect(multiply(2, 0)).toBe(0);
  });
});
