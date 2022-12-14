import words from '../COMP.SE.200-2022-2023/src/words'


test("Splits `string` into an array of its words", () => {
  expect(
    words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles'])
});

test("Splits `string` into an array of its words", () => {
  expect(
    words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles'])
});

