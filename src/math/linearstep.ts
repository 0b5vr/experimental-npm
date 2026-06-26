import { saturate } from './saturate';

/**
 * `smoothstep` but not smooth
 *
 * @param edge0 - lower edge of the transition
 * @param edge1 - upper edge of the transition
 * @param x - value to interpolate
 */
export function linearstep(edge0: number, edge1: number, x: number): number {
  return saturate((x - edge0) / (edge1 - edge0));
}
