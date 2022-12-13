import reduce from '../COMP.SE.200-2022-2023/src/reduce'

 
test("Reduces collection based on given iterator function. ({ 'a': 1, 'b': 2, 'c': 1 }, (result[value] || (result[value] = [])).push(key) return result}, {}) --> { '1': ['a', 'c'], '2': ['b'] }", () => {
  expect(
    reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key)
      return result
      }, {}
    )).toBe({'1': ['a', 'c'], '2': ['b']})
});

