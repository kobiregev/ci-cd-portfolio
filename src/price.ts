export function applyDiscount(price: number, percent: number): number {
  if (percent < 0) throw new RangeError('percent must be >= 0');

  return Math.max(0, Math.round(price * (1 - percent / 100) * 100) / 100);
}
