import defaultToAny from '../COMP.SE.200-2022-2023/src/defaultToAny'

 
test("Returns first value from given input database that is not null. (NaN,1,3) --> 1", () => {
  expect(
    defaultToAny(NaN,1,3)).toBe(1)
});

test("Returns first value from given input database that is not null. (Null,NaN,3) --> 3", () => {
  expect(
    defaultToAny(null,NaN,3)).toBe(3)
});

