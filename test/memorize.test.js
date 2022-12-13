import memoize from '../COMP.SE.200-2022-2023/src/memoize'

const object = { 'a': 1, 'b': 2 }
const other = { 'c': 3, 'd': 4 }

//const values = memoize(values)
//values(object)

test("Memoizes given data cache and opens it", () => {
  const values = memoize(values)
  expect(
    
    values(object)).toBe([1, 2])
});

test("Memoizes given data cache and opens it", () => {
  const values = memoize(values)
  expect(
    values(other)).toBe([3, 4])
});

