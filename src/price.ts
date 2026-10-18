export function applyDiscount(price: number, percent: number): number {
  return Math.max(0, Math.round(price * (1 - percent / 100) * 100) / 100);
}
