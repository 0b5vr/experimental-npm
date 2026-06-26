/**
 * GLSL style heaviside step function.
 *
 * `edge <= x ? 1.0 : 0.0`
 *
 * @param edge - threshold value
 * @param x - value to test
 */
export function step(edge: number, x: number): number {
  return edge <= x ? 1.0 : 0.0;
}
