import { test } from 'node:test';
import assert from 'node:assert/strict';
import { applyDiscount } from './price.ts';

test('takes 10% off', () => {
  assert.equal(applyDiscount(50, 10), 45);
});