import type { RawQuaternion } from '../quat/RawQuaternion';
import type { RawVector3 } from './RawVector3';
/**
 * Treating the given vec3 as a quaternion with w = 0, return its exponential map.
 */
export declare function vec3QuatExp(v: RawVector3): RawQuaternion;
