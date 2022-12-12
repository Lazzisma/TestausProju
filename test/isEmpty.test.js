import isEmpty from '../COMP.SE.200-2022-2023/src/isEmpty'

 
test('Returns true if given database is empty. []] --> true', () => {
  expect(
    isEmpty([])).toBe(true)
});

test('Returns true if given value is date. {1: "Moi"}} --> false', () => {
  expect(
    isEmpty({1: "Moi"})).toBe(false)
});
