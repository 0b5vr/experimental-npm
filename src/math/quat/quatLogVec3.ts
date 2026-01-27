import { vecLength, vecScale } from '../vec';
import type { RawQuaternion } from './RawQuaternion';
import type { RawVector3 } from '../vec3/RawVector3';

const EPSILON = 1e-6;

/**
 * Return a logarithm map of a quaternion as a vec3.
 */
export function quatLogVec3(quat: RawQuaternion): RawVector3 {
  const [x, y, z, w] = quat;
  const v: RawVector3 = [x, y, z];

  const vl = vecLength(v);
  if (vl < EPSILON) {
    return [0.0, 0.0, 0.0];
  }

  return vecScale(v, Math.acos(w) / vl);
}
