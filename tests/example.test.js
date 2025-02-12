import sum from '../sum.js';
import { expect, test } from '@jest/globals';
test('sum of 1 + 2 should be 3', () => {
	  expect(sum(1, 2)).toBe(3);
});