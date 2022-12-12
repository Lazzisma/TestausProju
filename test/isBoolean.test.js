import isBoolean from '../COMP.SE.200-2022-2023/src/isBoolean'

 
test('Returns true if given value is boolean. true --> true', () => {
  expect(
    isBoolean(true)).toBe(true)
});

test('Returns true if given value is boolean. 2 --> false', () => {
  expect(
    isBoolean(3)).toBe(false)
});
