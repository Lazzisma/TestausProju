import isDate from '../COMP.SE.200-2022-2023/src/isDate'

 
test('Returns true if given value is date. new Date --> true', () => {
  expect(
    isDate(new Date)).toBe(true)
});

test('Returns true if given value is date. 45.3.3045 --> false', () => {
  expect(
    isDate("45.3.3045")).toBe(false)
});
