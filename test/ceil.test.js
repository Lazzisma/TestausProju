//import { jest } from '@jest/globals';
//const ceil = require('../COMP.SE.200-2022-2023-1/src/ceil')
import ceil from '../COMP.SE.200-2022-2023/src/ceil'

//import ceil from '../COMP.SE.200-2022-2023-1/src/ceil.js'
 
test('Finds closest integer bigger than input float 0.1 -> 1', () => {
  expect(
    ceil(0.1)).toBe(1)
});

test('Finds closest integer bigger than input float 4 -> 4', () => {
  expect(
    ceil(4)).toBe(4)
});