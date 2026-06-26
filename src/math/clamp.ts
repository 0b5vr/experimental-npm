/**
 * `clamp`
 *
 * @param x - value to clamp
 * @param minVal - lower bound
 * @param maxVal - upper bound
 */
export function clamp(x: number, minVal: number, maxVal: number): number {
  return Math.min(Math.max(x, minVal), maxVal);
}
