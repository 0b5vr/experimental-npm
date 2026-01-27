import { vecLength, vecScale } from '../vec';
import type { RawVector3 } from '../vec3';
import type { RawQuaternion } from './RawQuaternion';

const EPSILON = 1e-6;

/**
 * Return a logarithm map of a quaternion.
 */
export function quatLog(quat: RawQuaternion): RawQuaternion {
  const [x, y, z, w] = quat;
  const v: RawVector3 = [x, y, z];

  const ql = vecLength(quat);
  const vl = vecLength(v);
  if (vl < EPSILON) {
    return [0.0, 0.0, 0.0, Math.log(ql)];
  }

  return [...vecScale(v, Math.acos(w / ql) / vl), Math.log(ql)];
}
