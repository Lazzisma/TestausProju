import toInteger from '../COMP.SE.200-2022-2023/src/toInteger'

 
test("Converts given value to integer. infinity --> 1.7976931348623157e+308", () => {
  expect(
    toInteger(Infinity)).toBe(1.7976931348623157e+308)
});

test("Converts given value to integer. 3.2 --> 3", () => {
  expect(
    toInteger(3.2)).toBe(3)
});

