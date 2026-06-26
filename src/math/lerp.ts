/**
 * `lerp`, or `mix`.
 * Return a linear interpolation of two numbers.
 * The {@link t} won't be clamped.
 *
 * @param a - A number
 * @param b - Another number
 * @param t - A number interpolating two numbers. Usually in range [0, 1] but not clamped
 */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
