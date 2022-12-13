import upperFirst from '../COMP.SE.200-2022-2023/src/upperFirst'

 
test("Changes first character of string to upper character if possible. abc --> Abc", () => {
  expect(
    upperFirst("abc")).toBe("Abc")
});

test("Changes first character of string to upper character if possible. 1Ac --> 1Ac", () => {
  expect(
    upperFirst("1Ac")).toBe("1Ac")
});

