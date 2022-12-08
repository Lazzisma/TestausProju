//import { jest } from '@jest/globals';
//const ceil = require('../COMP.SE.200-2022-2023-1/src/ceil')
import ceil from '../COMP.SE.200-2022-2023-1/src/ceil'

//import ceil from '../COMP.SE.200-2022-2023-1/src/ceil.js'
 
test('Finds closest integer bigger than input float', () => {
    expect(
      ceil(4.006)).toBe(5)
  });