import { RawQuaternion } from '../quat/RawQuaternion';
import { RawVector3 } from '../vec3/RawVector3';
import { EulerOrder } from './EulerOrder';
/**
 * Return a euler angles out of a quaternion.
 *
 * @param m An input quaternion
 * @param order An order of output euler angles. Assume as `XYZ` if not specified
 */
export declare function eulerFromQuaternion(m: RawQuaternion, order?: EulerOrder): RawVector3;
