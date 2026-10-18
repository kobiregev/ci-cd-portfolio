import { test } from "node:test";
import assert from "node:assert/strict";
import { applyDiscount } from "./price.ts";

test("takes 10% off", () => {
  assert.equal(applyDiscount(50, 10), 45);
});

test("never goes below zero", () => {
  assert.equal(applyDiscount(50, 150), 0);
});
