import { vecLength, vecScale } from '../vec';
import type { RawQuaternion } from '../quat/RawQuaternion';
import type { RawVector3 } from './RawVector3';

const EPSILON = 1e-6;

/**
 * Treating the given vec3 as a quaternion with w = 0, return its exponential map.
 */
export function vec3QuatExp(v: RawVector3): RawQuaternion {
  const vl = vecLength(v);
  if (vl < EPSILON) {
    return [0.0, 0.0, 0.0, 1.0];
  }

  return [
    ...vecScale(v, Math.sin(vl) / vl),
    Math.cos(vl)
  ];
}
