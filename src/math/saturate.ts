import { clamp } from './clamp';

/**
 * `clamp(x, 0.0, 1.0)`
 *
 * @param x - value to clamp
 */
export function saturate(x: number): number {
  return clamp(x, 0.0, 1.0);
}
