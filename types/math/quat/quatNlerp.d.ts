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
export declare function quatNlerp(a: RawQuaternion, b: RawQuaternion, t: number): RawQuaternion;
