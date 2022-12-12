import defaultTo from '../COMP.SE.200-2022-2023/src/defaultTo'

 
test('Returns default value if given value is null or undefined (2,5) --> 2', () => {
  expect(
    defaultTo(2,5)).toBe(2)
});

test('Returns default value if given value is null or undefined (null,5) --> 5', () => {
  expect(
    defaultTo(null,5)).toBe(5)
});
