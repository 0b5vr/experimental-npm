/**
 * GLSL Style `mod` function.
 * "compute value of one parameter modulo another"
 *
 * @param value - value to mod
 * @param divisor - divisor to mod by
 */
export function mod(value: number, divisor: number): number {
  return value - Math.floor(value / divisor) * divisor;
}
