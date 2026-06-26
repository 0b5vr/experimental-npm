import { linearstep } from './linearstep';

/**
 * world famous `smoothstep` function
 *
 * @param edge0 - lower edge of the transition
 * @param edge1 - upper edge of the transition
 * @param x - value to interpolate
 */
export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = linearstep(edge0, edge1, x);
  return t * t * (3.0 - 2.0 * t);
}
