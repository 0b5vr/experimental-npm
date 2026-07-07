import { vecDot } from '../vec/vecDot';
import { vecLerp } from '../vec/vecLerp';
import { vecNeg } from '../vec/vecNeg';
import { vecNormalize } from '../vec/vecNormalize';
import type { RawQuaternion } from './RawQuaternion';

/**
 * Interpolate between two quaternions using normalized lerp.
 * When the dot product of the two quaternions is negative, the second quaternion is negated to ensure the shortest path is taken.
 *
 * This should behave the same as Unity's `Quaternion.LerpUnclamped`.
 *
 * @param a - "from" quaternion
 * @param b - "to" quaternion
 * @param t - How much do we want to rotate the a to b
 * @returns The interpolated quaternion
 */
export function quatNlerp(a: RawQuaternion, b: RawQuaternion, t: number): RawQuaternion {
  const bt = vecDot(a, b) < 0 ? vecNeg(b) : b;
  return vecNormalize(vecLerp(a, bt, t));
}
