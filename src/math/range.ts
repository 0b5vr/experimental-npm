/**
 * Transform a value from input range to output range.
 *
 * This function does NOT clamp the output value.
 *
 * This function is inspired by the Processing's `map()` function.
 *
 * @param x - value to transform
 * @param x0 - lower edge of the input range
 * @param x1 - upper edge of the input range
 * @param y0 - lower edge of the output range
 * @param y1 - upper edge of the output range
 */
export function range(x: number, x0: number, x1: number, y0: number, y1: number): number {
  return ((x - x0) * (y1 - y0)) / (x1 - x0) + y0;
}
