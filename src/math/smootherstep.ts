import { linearstep } from './linearstep';

/**
 * `smoothstep` but more smooth
 *
 * @param edge0 - lower edge of the transition
 * @param edge1 - upper edge of the transition
 * @param x - value to interpolate
 */
export function smootherstep(edge0: number, edge1: number, x: number): number {
  const t = linearstep(edge0, edge1, x);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
