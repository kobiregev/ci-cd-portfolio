import { test } from "node:test";
import assert from "node:assert/strict";
import { applyDiscount } from "./price.ts";

test("takes 10% off", () => {
  assert.equal(applyDiscount(50, 10), 45);
});

test("never goes below zero", () => {
  assert.equal(applyDiscount(50, 150), 0);
});

test("rejects a negative discount", () => {
  assert.throws(() => applyDiscount(50, -10), RangeError);
});

test("works with a price from a form field", () => {
  assert.equal(applyDiscount(Number("50"), 10), 45);
});
