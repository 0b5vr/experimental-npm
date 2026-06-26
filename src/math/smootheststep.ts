import { linearstep } from './linearstep';

/**
 * `smoothstep` but WAY more smooth
 *
 * @param edge0 - lower edge of the transition
 * @param edge1 - upper edge of the transition
 * @param x - value to interpolate
 */
export function smootheststep(edge0: number, edge1: number, x: number): number {
  const t = linearstep(edge0, edge1, x);
  return t * t * t * t * (t * (t * (-20.0 * t + 70.0) - 84.0) + 35.0);
}
