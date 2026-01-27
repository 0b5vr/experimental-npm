import { vecLength, vecScale } from '../vec';
import type { RawVector3 } from '../vec3';
import type { RawQuaternion } from './RawQuaternion';

const EPSILON = 1e-6;

/**
 * Return an exponential map of a quaternion.
 */
export function quatExp(quat: RawQuaternion): RawQuaternion {
  const [x, y, z, w] = quat;
  const v: RawVector3 = [x, y, z];

  const vl = vecLength(v);
  if (vl < EPSILON) {
    return [0.0, 0.0, 0.0, Math.exp(w)];
  }

  return vecScale([
    ...vecScale(v, Math.sin(vl) / vl),
    Math.cos(vl)
  ], Math.exp(w));
}
